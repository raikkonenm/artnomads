import type { Metadata } from "next";
import { WorkflowBrowserMockup } from "@/components/sections/WorkflowHeroCarousel";
import { WorkflowAccessRequestForm } from "@/components/sections/WorkflowAccessRequestForm";

export const metadata: Metadata = {
  title: {
    absolute: "Workflow.art | Art Curatorial Nomads",
  },
  description:
    "A practice management system for artists working internationally.",
};

const problemItems = [
  "You miss open call deadlines",
  "You lose gallery contacts",
  "You don't know what to apply for or where",
  "Your portfolio is not ready",
];

const modules = [
  {
    index: "01",
    title: "Open Calls Tracker",
    description:
      "A curated database of global opportunities. Filter by discipline, deadline, location, and fee.",
    placeholder: "Open calls preview",
  },
  {
    index: "02",
    title: "Contacts & Relationships",
    description:
      "Organize galleries, curators, institutions, and collaborators. Keep every connection in one place.",
    placeholder: "Contacts preview",
  },
  {
    index: "03",
    title: "Applications Manager",
    description:
      "Track every submission step-by-step. Materials, status, notes, and follow-ups all in one view.",
    placeholder: "Applications preview",
  },
  {
    index: "04",
    title: "Portfolio Builder",
    description:
      "Build and update your portfolio modules. Always exhibition ready, always up to date.",
    placeholder: "Portfolio preview",
  },
];

function AccessLink({ className = "" }: { className?: string }) {
  return (
    <a href="#workflow-access" className={`link-editorial inline-flex w-fit text-label text-void ${className}`}>
      GET ACCESS {"\u2192"}
    </a>
  );
}

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`grid place-items-center border border-black/10 bg-black/[0.035] text-label text-void/35 ${className}`}
    >
      {label}
    </div>
  );
}

function PreviewImage({ src, alt, fit = "contain" }: { src: string; alt: string; fit?: "contain" | "cover" }) {
  return (
    <div className="aspect-[16/10] overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-center [filter:none] [image-rendering:auto] [transform:none] ${
          fit === "cover" ? "object-cover" : "object-contain"
        }`}
      />
    </div>
  );
}

export default function WorkflowArtPage() {
  return (
    <div className="post-hero-narrow mobile-tight-sections section-paper pt-[76px]">
      <section className="container-gallery pb-[var(--spacing-section)] pt-[72px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <p className="text-label mb-6 text-void/45">WORKFLOW.ART</p>
            <h1 className="font-display text-[clamp(2.55rem,5vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.03em] text-void">
              The practice management system for artists working internationally.
            </h1>
            <p className="mt-9 max-w-[34rem] text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.75] text-void/62">
              Everything you need to plan, apply, and move your practice forward.
            </p>
            <AccessLink className="mt-10" />
          </div>

          <div className="lg:col-start-5 lg:col-span-8 lg:ml-20">
            <WorkflowBrowserMockup />
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-10 text-void/45">THE PROBLEM</p>
          <div className="grid gap-12 lg:grid-cols-12">
            <h2 className="font-display text-[clamp(2rem,3.5vw,4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-void lg:col-span-5">
              Artists lose time because their practice is scattered.
            </h2>
            <ul className="grid gap-5 border-t border-black/10 pt-6 lg:col-start-8 lg:col-span-5">
              {problemItems.map((item) => (
                <li key={item} className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.6] text-void/68">
                  {"\u2192"} {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-10 text-void/45">WHAT&apos;S INSIDE</p>
          <div className="grid gap-8 md:grid-cols-2">
            {modules.map((module) => (
              <article key={module.index} className="border-t border-black/10 pt-5">
                {module.index === "01" ? (
                  <PreviewImage
                    src="/exhibitions/Workflow.art/48a5d743-7b8b-48fb-8dab-bbe9a4f2cc71.png"
                    alt="Workflow.art open calls tracker preview"
                  />
                ) : module.index === "02" ? (
                  <PreviewImage
                    src="/projects/whitecub.png"
                    alt="Workflow.art contacts and relationships preview"
                    fit="cover"
                  />
                ) : module.index === "03" ? (
                  <PreviewImage
                    src="/exhibitions/Workflow.art/awards.png"
                    alt="Workflow.art applications manager preview"
                  />
                ) : module.index === "04" ? (
                  <PreviewImage
                    src="/images/edc788c7-3c03-42b6-a385-9fe7f0ae7940.png"
                    alt="Workflow.art portfolio builder preview"
                  />
                ) : (
                  <Placeholder label={module.placeholder} className="aspect-[16/10]" />
                )}
                <p className="text-label mt-7 text-void/35">{module.index}</p>
                <h2 className="mt-5 font-display text-[clamp(1.45rem,2.4vw,2.6rem)] font-medium leading-[1.04] text-void">
                  {module.title}
                </h2>
                <p className="mt-5 max-w-[34rem] text-sm leading-[1.75] text-void/62">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-10 text-void/45">FOR WHO</p>
          <div className="grid gap-10 lg:grid-cols-12">
            <h2 className="font-display text-[clamp(2rem,4vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-void lg:col-span-7">
              For artists who apply to international exhibitions, residencies, and grants.
            </h2>
            <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.78] text-void/62 lg:col-start-9 lg:col-span-4 lg:self-end">
              Designed for artists who need structure, deadlines, contacts, documents,
              and applications to live in one clear system.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-10 text-void/45">PRICE</p>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="font-display text-[clamp(4.5rem,11vw,11rem)] font-medium leading-none tracking-[-0.04em] text-void">
                $49
              </p>
            </div>
            <div className="lg:col-start-8 lg:col-span-4">
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.78] text-void/62">
                One-time payment.
                <br />
                Lifetime access to all modules and future updates.
              </p>
              <AccessLink className="mt-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-10 text-void/45">ABOUT ACN</p>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="grid gap-7 lg:col-span-6">
              <p className="text-[clamp(1.05rem,1.35vw,1.28rem)] leading-[1.78] text-void/68">
                Art Curatorial Nomads is a curatorial and consultancy platform
                connecting contemporary artists with exhibitions, institutions, and
                opportunities worldwide.
              </p>
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.78] text-void/58">
                Our team has curated projects at Art Dubai and Art Central.
              </p>
            </div>
            <div className="grid content-start gap-5 border-t border-black/10 pt-5 lg:col-start-9 lg:col-span-4">
              <p className="text-label text-void/45">ART DUBAI</p>
              <p className="text-label text-void/45">ART CENTRAL</p>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow-access" className="scroll-mt-28 border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-10 text-void/45">START NOW</p>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="font-display text-[clamp(2.2rem,4.8vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.03em] text-void lg:col-span-8">
              Bring structure to your practice and focus on what matters.
            </h2>
            <div className="lg:col-start-10 lg:col-span-3">
              <WorkflowAccessRequestForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
