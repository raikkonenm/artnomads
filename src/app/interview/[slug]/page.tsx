import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INTERVIEWS, type InterviewImage, type InterviewQuestion } from "@/lib/interviews";
import s from "../interview.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return INTERVIEWS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const interview = INTERVIEWS.find(item => item.slug === slug);
  if (!interview) return {};
  return {
    title: `${interview.artist}: ${interview.title}`,
    description: interview.metaDescription,
    openGraph: { title: `${interview.artist}: ${interview.title}`, type: "article", images: [{ url: interview.ogImage.src, width: interview.ogImage.width, height: interview.ogImage.height, alt: interview.ogImage.alt }] },
  };
}

function Photo({ image, className = "", priority = false, sizes = "(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 80px), 1280px" }: { image: InterviewImage; className?: string; priority?: boolean; sizes?: string }) {
  const titleIndex = image.artwork ? image.caption.indexOf(image.artwork.title) : -1;
  return (
    <figure className={`${s.photo} ${className}`}>
      <picture>
        <source srcSet={`${image.src.replace(".webp", "-small.webp")} 900w, ${image.src} ${image.width}w`} sizes={sizes} type="image/webp" />
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={priority} />
      </picture>
      <figcaption>
        {image.artwork && titleIndex >= 0 ? <>{image.caption.slice(0, titleIndex)}<em>{image.artwork.title}</em>{image.caption.slice(titleIndex + image.artwork.title.length)}</> : image.caption}
      </figcaption>
    </figure>
  );
}

function Question({ item, index, artist }: { item: InterviewQuestion; index: number; artist: string }) {
  const paragraphs = typeof item.answer === "string" ? [item.answer] : item.answer;
  return (
    <div className={s.questionText}>
      <div className={s.questionLabel} aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{item.topic}</span>
      </div>
      <div className={s.answer}>
        <h2 id={`${item.id}-title`}>{item.question}</h2>
        {paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraphIndex === 0 && <span className={s.speaker}>{artist}</span>}{paragraph}</p>)}
        {item.note && <p className={s.questionNote}>{item.note.text}{item.note.link && <> <a href={item.note.link.href} target="_blank" rel="noopener noreferrer">{item.note.link.label} <span aria-hidden="true">↗</span></a></>}</p>}
      </div>
    </div>
  );
}

function QuestionPhotos({ item }: { item: InterviewQuestion }) {
  if (!item.images?.length) return null;
  if (item.layout === "framePair" || item.layout === "materialPair" || item.layout === "paintingPair") {
    return <div className={s[item.layout]}>{item.images.map(image => <Photo key={image.src} image={image} sizes="(max-width: 760px) calc(100vw - 40px), 55vw" />)}</div>;
  }
  return <>{item.images.map(image => <Photo key={image.src} image={image} className={item.layout === "studio" ? "" : `${s.widePhoto} ${image.width < image.height ? s.portraitWork : ""}`} sizes={item.layout === "studio" ? "(max-width: 760px) 80vw, 40vw" : undefined} />)}</>;
}

export default async function ArtistInterviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const interview = INTERVIEWS.find(item => item.slug === slug);
  if (!interview) notFound();

  return (
    <article className={s.article}>
      <div className={s.container}>
        <div className={s.breadcrumb}>
          <Link href="/interview"><span aria-hidden="true">←</span> All interviews</Link>
          <span>Conversation {interview.number}</span>
        </div>

        <header className={s.articleHero}>
          <div className={s.heroText}>
            <p className={s.artist}>{interview.artist}</p>
            <h1>{interview.title}</h1>
            <p className={s.deck}>{interview.excerpt}</p>
            <a className={s.readLink} href="#conversation">Read the conversation <span aria-hidden="true">↓</span></a>
          </div>
          <Photo image={interview.heroImage} priority sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1600px) 40vw, 600px" />
        </header>

        <div id="conversation" className={s.conversation}>
          <nav className={s.contents} aria-label="In this interview">
            <p>In this conversation</p>
            <ol>
              {interview.questions.map((item, index) => (
                <li key={item.id}><a href={`#${item.id}`}><span>{String(index + 1).padStart(2, "0")}</span>{item.topic}</a></li>
              ))}
            </ol>
          </nav>

          <div className={s.intro}>
            <span className={s.eyebrow}>{interview.eyebrow}</span>
            <p>{interview.intro}</p>
          </div>

          {interview.questions.map((item, index) => (
            <section key={item.id} id={item.id} className={`${s.question} ${item.layout === "studio" ? s.studioQuestion : ""}`} aria-labelledby={`${item.id}-title`}>
              <Question item={item} index={index} artist={interview.artist} />
              <QuestionPhotos item={item} />
              {item.imageNote && <p className={s.imageNote}>{item.imageNote}</p>}
            </section>
          ))}
          {interview.closingView && <section className={s.closingView} aria-labelledby="exhibition-view-title"><h2 id="exhibition-view-title">{interview.closingView.title}</h2><Photo image={interview.closingView.image} /></section>}
        </div>

        <footer className={s.artistFooter}>
          <div className={s.aboutArtist}>
            <h2>About the artist</h2>
            <div>
              <p>{interview.about}</p>
              <div className={s.artistLinks}>
                {interview.links.map(link => <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}
              </div>
              <p className={s.editorNote}>{interview.editorNote}</p>
            </div>
          </div>
          <Link href="/interview" className={s.backLink}>All interviews <span aria-hidden="true">↗</span></Link>
        </footer>
      </div>
    </article>
  );
}
