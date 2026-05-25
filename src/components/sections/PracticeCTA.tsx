import Link from "next/link";

export function PracticeCTA() {
  return (
    <section className="section-paper border-t border-black/10">
      <div className="container-gallery py-[var(--spacing-section)]">
        <div className="max-w-[32rem]">
          <p className="text-label mb-6 text-void/45">PRACTICE</p>
          <p className="text-sm leading-[1.78] text-void/62">
            A structured path for artists building
            <br />
            international practice.
          </p>
          <p className="mt-6 text-label text-void/42">
            Foundation · Presence · Workflow · Strategy · Network
          </p>
          <Link href="/practice" className="link-editorial mt-8 inline-flex w-fit text-label text-void">
            Enter Practice →
          </Link>
        </div>
      </div>
    </section>
  );
}
