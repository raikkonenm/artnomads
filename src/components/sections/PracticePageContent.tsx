import Image from "next/image";
import Link from "next/link";

const services = [
  {
    index: "01",
    title: "VISIBILITY",
    subtitle: "Get seen.",
    description: "Publication on FindArt + shared with 127K+ audience.",
    price: "FROM $19",
    image: "/images/ad027148-85b8-4582-a81b-8a720d76b341.png",
    alt: "Exhibition and opportunity platform preview",
  },
  {
    index: "02",
    title: "SYSTEM",
    subtitle: "Get organized.",
    description: "Workflow.art — open calls, deadlines, portfolio in one place.",
    price: "FROM $XX",
    image: "/images/image(832).png",
    alt: "Workflow.art dashboard preview",
  },
  {
    index: "03",
    title: "REALIZATION",
    subtitle: "Make it happen.",
    description: "Personal curatorial support — CV, portfolio, applications, exhibitions.",
    price: "BY REQUEST",
    image: "/images/b59b2f74-a0e2-4e4a-8a26-82b0d21c1649.png",
    alt: "Contemporary exhibition installation view",
  },
];

export function PracticePageContent() {
  return (
    <div className="section-paper">
      <section className="relative flex min-h-[100svh] overflow-hidden bg-void text-white">
        <Image
          src="/projects/exhibition_view_1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.3)_0%,rgba(17,17,17,0.33)_40%,rgba(17,17,17,0.64)_100%)]"
        />

        <div className="container-gallery relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 lg:pb-20">
          <div className="max-w-[64rem]">
            <h1 className="font-display text-[clamp(3rem,6.5vw,7.1rem)] font-medium leading-[0.94] tracking-[-0.035em] text-white">
              From studio to
              <br />
              international exhibition.
            </h1>
            <p className="mt-9 text-[clamp(1rem,1.22vw,1.22rem)] leading-[1.75] text-white/78">
              Three levels to grow your practice
              <br />
              Visibility {"\u2192"} Organization {"\u2192"} Realization
            </p>
          </div>

          <div className="mt-16 text-label text-white/64" aria-hidden>
            {"\u2193"}
          </div>
        </div>
      </section>

      <section className="container-gallery py-[var(--spacing-section)]">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 xl:gap-12">
          {services.map((service) => (
            <article key={service.index} className="border-t border-black/10 pt-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-black/[0.03]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="mt-7 grid grid-cols-[3rem_minmax(0,1fr)_auto] items-start gap-4">
                <p className="text-label text-void/38">{service.index}</p>
                <div>
                  <h2 className="text-label text-void">{service.title}</h2>
                  <p className="mt-4 font-display text-[clamp(1.35rem,1.8vw,1.9rem)] font-medium leading-none text-void">
                    {service.subtitle}
                  </p>
                  <p className="mt-6 text-sm leading-[1.65] text-void/62">{service.description}</p>
                  <p className="mt-6 text-label text-void/56">{service.price} {"\u2192"}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <Link
            href="/#contact"
            className="link-editorial font-display text-[clamp(1.8rem,3.2vw,3.25rem)] font-medium leading-[1.08] text-void"
          >
            Not sure where to start? Write to us {"\u2192"}
          </Link>
        </div>
      </section>
    </div>
  );
}
