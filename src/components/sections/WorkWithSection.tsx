"use client";

import Link from "next/link";

const ARTISTS_COLUMN_ONE = [
  "Yasya Bachurina",
  "Chunkook Lee",
  "Gabor Koos",
  "Mindshapes",
  "Nicky Sparre-Ulrich",
  "Ángela Leyva",
  "Juri Wi",
  "Taketo Kikuchi",
  "Eimi Suzuki",
];

const ARTISTS_COLUMN_TWO = [
  "Hwia Kim",
  "Andrey Berger",
  "Yutaro Inagaki",
  "Irina Razumovskaya",
  "Ellen Barratt",
  "Orkhan Mammadov",
  "Ellen Sheidlin",
  "Sarah Mcdaniel",
  "Maria Koshenkova",
];

const INSTITUTIONS = [
  "Art Dubai",
  "ESQAPE",
  "Linda Gallery",
  "White Stone Gallery",
  "TOKAS",
  "Capsules by Luxembourg Art Week",
  "421 Arts Campus",
  "Studiya",
  "RARARES",
  "Kyara",
];

function NetworkList({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border-t border-black/10 pt-5">
      {label ? (
        <p className="text-label mb-7 text-void/35">{label}</p>
      ) : (
        <div className="mb-7 h-[1.05rem]" aria-hidden />
      )}
      <ul className="grid gap-3 md:gap-4">
        {items.map((item) => (
          <li
            key={item}
            className="text-[clamp(1rem,1.05vw,1.08rem)] leading-[1.45] text-void/68"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WorkWithSection() {
  return (
    <section id="network" className="section-paper scroll-mt-28 border-y border-black/10">
      <div className="container-gallery py-[var(--spacing-section)]">
        <div>
          <div>
            <h3 className="text-label text-void/45">
              Network
            </h3>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 md:gap-14 lg:gap-20">
              <div>
                <NetworkList label="ARTISTS" items={ARTISTS_COLUMN_ONE} />
                <Link
                  href="/practice"
                  className="link-editorial mt-16 hidden w-fit whitespace-nowrap font-display text-[clamp(1.45rem,2.4vw,2.35rem)] font-medium leading-tight text-void md:inline-flex"
                >
                  Building your international practice →
                </Link>
              </div>
              <NetworkList label="" items={ARTISTS_COLUMN_TWO} />
              <div className="col-span-2 mt-2 md:col-span-1 md:mt-0">
                <NetworkList label="GALLERIES & INSTITUTIONS" items={INSTITUTIONS} />
              </div>
              <Link
                href="/practice"
                className="link-editorial col-span-2 mt-4 inline-flex w-fit font-display text-[1.5rem] font-medium leading-tight text-void md:hidden"
              >
                Building your international practice →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
