import Link from "next/link";

const footerLinks = [
  ["Projects", "#projects"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Team", "#team"],
  ["Contact", "#contact"],
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-void text-white">
      <div className="container-gallery py-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="font-display text-[1rem] font-semibold leading-none">ART CURATORIAL NOMADS</p>
            <p className="mt-4 max-w-[34ch] text-sm leading-[1.75] text-white/58">
              International curatorial platform for contemporary art, digital culture,
              and exhibition production.
            </p>
          </div>

          <nav className="lg:col-start-6 lg:col-span-4">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {footerLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-label text-white/58 transition-colors duration-300 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-start-10 lg:col-span-3 lg:text-right">
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <a href="mailto:artcnomads@gmail.com" className="link-editorial text-label text-white/65 hover:text-white">
                artcnomads@gmail.com
              </a>
              <a
                href="https://www.instagram.com/artcnomads/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-label text-white/65 hover:text-white"
              >
                @artcnomads
              </a>
            </div>
            <p className="mt-5 text-label text-white/36">(c) {year} ACN</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
