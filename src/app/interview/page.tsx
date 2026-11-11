import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { INTERVIEWS } from "@/lib/interviews";
import s from "./interview.module.css";

export const metadata: Metadata = {
  title: "Interview",
  description: "Conversations with artists on the ideas, materials and decisions behind their work. Interviews by Art Curatorial Nomads.",
};

export default function InterviewPage() {
  return (
    <div className={s.index}>
      <div className={s.container}>
        <header className={s.indexHeader}>
          <h1>INTERVIEW</h1>
          <p>Conversations with artists.<br />A closer look at the work.</p>
        </header>

        <section aria-label="Artist interviews" className={s.archive}>
          <div className={s.archiveLabel}>
            <p>Artist conversations</p>
            <span>{String(INTERVIEWS.length).padStart(2, "0")} {INTERVIEWS.length === 1 ? "interview" : "interviews"}</span>
          </div>
          <div className={s.cardGrid}>
            {INTERVIEWS.map(interview => (
              <article className={s.card} key={interview.slug}>
                <Link className={s.cardLink} href={`/interview/${interview.slug}`}>
                  <div className={s.cardImage}>
                    <Image src={interview.image.src} alt={interview.image.alt} width={interview.image.width} height={interview.image.height} priority />
                  </div>
                  <div className={s.cardMeta}>
                    <span>{interview.artist}</span>
                  </div>
                  <h2>{interview.title}</h2>
                  <p className={s.cardExcerpt}>{interview.excerpt}</p>
                  <p className={s.cardDate}><time dateTime={interview.dateTime}>{interview.date}</time></p>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
