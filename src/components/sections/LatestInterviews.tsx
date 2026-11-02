import Image from "next/image";
import Link from "next/link";
import { getLatestInterviews } from "@/lib/interviews";
import s from "./latest-interviews.module.css";

export function LatestInterviews() {
  const interviews = getLatestInterviews();

  return (
    <section id="interviews" className={`section-paper ${s.section}`} aria-labelledby="home-interviews-title">
      <div className="container-gallery">
        <div className={s.layout}>
          <div className={s.heading}>
            <h2 id="home-interviews-title" className="text-label text-steel">INTERVIEWS</h2>
            <p>Conversations with artists. A closer look at the work.</p>
          </div>
          <div className={s.stories}>
            {interviews.map(interview => (
              <article className={s.story} key={interview.slug}>
                <Link href={`/interview/${interview.slug}`} className={s.image} aria-label={`Read interview with ${interview.artist}`}>
                  <Image src={interview.heroImage.src} alt={interview.heroImage.alt} width={interview.heroImage.width} height={interview.heroImage.height} sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1023px) 46vw, (max-width: 1859px) 42vw, 796px" />
                </Link>
                <div className={s.body}>
                  <p className={s.label}>Interview</p>
                  <div className={s.meta}>
                    <h3><Link href={`/interview/${interview.slug}`}>{interview.artist}</Link></h3>
                    <p className={s.title}>{interview.title}</p>
                    <time className={s.date} dateTime={interview.dateTime}>{interview.date}</time>
                  </div>
                  <Link href={`/interview/${interview.slug}`} className={s.read} aria-label={`Read interview with ${interview.artist}`}><span aria-hidden="true">→</span> Read interview</Link>
                </div>
              </article>
            ))}
          </div>
          <Link href="/interview" className={s.viewAll}>VIEW ALL INTERVIEWS <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
