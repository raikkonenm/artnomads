"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type FormEvent, type KeyboardEvent, type MouseEvent } from "react";
import { FAQ, HERO_PROJECT, PEOPLE, PROJECTS, SERVICES } from "./practice-content";
import s from "./practice.module.css";

function Arrow({ previous = false }: { previous?: boolean }) {
  return <svg viewBox="0 0 44 18" fill="none" aria-hidden="true" focusable="false"><path d={previous ? "M41 9H3M11 1 3 9l8 8" : "M3 9h38M33 1l8 8-8 8"} stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" /></svg>;
}

export function PracticePageContent() {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const selectRef = useRef<HTMLSelectElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [projectPosition, setProjectPosition] = useState(0);
  const submitting = useRef(false);
  const emailHref = `mailto:artcnomads@gmail.com?subject=${encodeURIComponent(`${service || "Artist consulting"} enquiry — ACN`)}`;

  function chooseService(event: MouseEvent<HTMLAnchorElement>, value: string) {
    event.preventDefault();
    if (submitting.current) return;
    setService(value);
    if (status !== "idle") setStatus("idle");
    document.getElementById("consulting-enquiry")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    selectRef.current?.focus({ preventScroll: true });
  }

  function scrollProjects(direction: number, edge?: "start" | "end") {
    const rail = galleryRef.current;
    const card = rail?.querySelector<HTMLElement>("article");
    if (!rail || !card) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    if (edge) rail.scrollTo({ left: edge === "start" ? 0 : rail.scrollWidth, behavior });
    else rail.scrollBy({ left: direction * (card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap)), behavior });
  }

  function galleryKeys(event: KeyboardEvent<HTMLDivElement>) {
    if (event.currentTarget !== event.target) return;
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      scrollProjects(event.key === "ArrowLeft" ? -1 : 1, event.key === "Home" ? "start" : event.key === "End" ? "end" : undefined);
    }
  }

  function updateProjectPosition() {
    const rail = galleryRef.current;
    const card = rail?.querySelector<HTMLElement>("article");
    if (!rail || !card) return;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap);
    const atEnd = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 2;
    setProjectPosition(atEnd ? PROJECTS.length - 1 : Math.max(0, Math.min(PROJECTS.length - 1, Math.round(rail.scrollLeft / step))));
  }

  function handleInput(event: FormEvent<HTMLFormElement>) {
    const field = event.target;
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity("");
    if (status === "success" || status === "error") setStatus("idle");
  }

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const portfolio = String(fields.get("portfolio") ?? "").trim();
    const questions = String(fields.get("questions") ?? "").trim();
    const message = [portfolio ? `Portfolio: ${portfolio}` : "", questions].filter(Boolean).join("\n\n") || `Enquiry about ${service}.`;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const questionsInput = form.elements.namedItem("questions") as HTMLTextAreaElement;
    nameInput.setCustomValidity(name ? "" : "Please enter your name.");
    questionsInput.setCustomValidity(message.length > 10_000 ? "Please shorten your questions and portfolio link to 10,000 characters in total." : "");
    if (!form.reportValidity()) return;
    submitting.current = true;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ role: "Artist consulting enquiry", projectType: service, name, email, message }) });
      if (!response.ok) throw new Error("Delivery failed");
      const result = await response.json();
      if (result?.success !== true) throw new Error("Delivery was not confirmed");
      form.reset(); setService(""); setStatus("success");
    } catch { setStatus("error"); } finally { submitting.current = false; }
  }

  return (
    <div className={s.page}><div className={s.container}>
      <section className={s.hero} aria-labelledby="consulting-title">
        <div className={s.heroCopy}>
          <p className={s.eyebrow}>Artist advisory</p>
          <h1 id="consulting-title">A curatorial perspective<br className={s.desktopBreak} /> on your practice.</h1>
          <p className={s.heroDescription}>Written reviews, development strategies and exhibition development for contemporary artists.</p>
          <a href="#consulting-formats" className={s.heroTextCta}>Explore our services <span aria-hidden>↓</span></a>
        </div>
        <figure className={s.heroFigure}>
          <Link href={HERO_PROJECT.href} className={s.heroImage} aria-label={`View ${HERO_PROJECT.title}`}><Image src={HERO_PROJECT.image} alt={HERO_PROJECT.alt} fill priority sizes="(max-width: 760px) 100vw, (max-width: 1400px) 55vw, 680px" /></Link>
          <figcaption className={s.heroCaption}>
            <span>{HERO_PROJECT.title}</span><br />{HERO_PROJECT.context}
            <Link href={HERO_PROJECT.href} className={s.viewProject}>View project ↗</Link>
          </figcaption>
        </figure>
      </section>

      <section id="consulting-formats" className={s.section} aria-labelledby="formats-title">
        <div className={s.sectionHeading}><h2 id="formats-title">Services</h2></div>
        <div className={s.services}>{SERVICES.map((offer, index) => (
          <article className={s.service} key={offer.name} aria-labelledby={`service-${index + 1}-title`}>
            <Link href={offer.imageHref} className={s.serviceImage} aria-label={`View exhibition: ${offer.imageCredit}`} title={offer.imageCredit}><Image src={offer.image} alt={offer.alt} fill sizes="(max-width: 760px) 100vw, 32vw" style={{ objectPosition: offer.position }} /></Link>
            <h3 id={`service-${index + 1}-title`} className={s.serviceTitle}>{offer.name}</h3>
            <p className={s.servicePrice}>{offer.price}</p>
            <p className={s.offerDescription}>{offer.description}</p>
            <div className={s.serviceScope}><p className={s.scopeLabel}>{offer.scopeLabel}</p><ul className={s.scopeList}>{offer.scope.map((line) => <li key={line}>{line}</li>)}</ul></div>
            <dl className={s.serviceSummary}><div><dt>Format</dt><dd>{offer.format}{offer.pages && <span className={s.formatPages}>{offer.pages}</span>}</dd></div><div><dt>{offer.timelineLabel}</dt><dd>{offer.timeline}</dd></div></dl>
            <a href="#consulting-enquiry" className={s.serviceEnquire} onClick={(event) => chooseService(event, offer.value)} aria-label={`Enquire about ${offer.name}`}><span>ENQUIRE</span><span aria-hidden="true">→</span></a>
          </article>
        ))}</div>
        <p className={s.followUp}>Both written services include one round of follow-up questions by email within 14 days after you receive your document.</p>
      </section>

      <section id="consulting-work" className={`${s.section} ${s.workSection}`} aria-labelledby="work-title">
        <div className={`${s.sectionHeading} ${s.galleryHeading}`}><div><h2 id="work-title">Case Studies</h2><p className={s.gallerySubtitle}>Selected exhibitions, curatorial collaborations and public art projects.</p></div><div className={s.galleryTools}><Link href="/exhibitions" className={s.textLink}>View all exhibitions <span aria-hidden>↗</span></Link><p className={s.galleryPosition} aria-live="polite" aria-atomic="true"><span className={s.srOnly}>Project </span>{String(projectPosition + 1).padStart(2, "0")} <span aria-hidden>/</span><span className={s.srOnly}>of</span> {String(PROJECTS.length).padStart(2, "0")}</p></div></div>
        <div className={s.galleryShell}>
          <div ref={galleryRef} id="curatorial-projects" className={s.projects} role="region" aria-label="Selected curatorial projects" aria-describedby="gallery-instructions" tabIndex={0} onKeyDown={galleryKeys} onScroll={updateProjectPosition}>
          {PROJECTS.map((project) => <article className={s.project} key={project.href}><Link href={project.href} className={s.projectImage} aria-label={`View ${project.title}`}><Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1100px) calc((100vw - 76px) / 2), (max-width: 1360px) calc((100vw - 136px) / 3), 408px" style={{ objectFit: project.fit, objectPosition: project.position }} /></Link><p className={s.projectContext}>{project.context}</p><h3><Link href={project.href}>{project.title}</Link></h3><p className={s.projectRole}>{project.role}</p><p className={s.projectDescription}>{project.description}</p><Link href={project.href} className={s.textLink}>View project <span aria-hidden>↗</span></Link></article>)}
          </div>
          <div className={s.galleryControls}>
            <button className={s.galleryArrow} type="button" onClick={() => scrollProjects(-1)} aria-label="Previous curatorial project" aria-controls="curatorial-projects" disabled={projectPosition === 0}><Arrow previous /></button>
            <button className={s.galleryArrow} type="button" onClick={() => scrollProjects(1)} aria-label="Next curatorial project" aria-controls="curatorial-projects" disabled={projectPosition === PROJECTS.length - 1}><Arrow /></button>
          </div>
        </div>
        <p id="gallery-instructions" className={s.srOnly}>Use the previous and next buttons, swipe, or focus this gallery and use the arrow, Home and End keys to explore eight projects.</p>
      </section>

      <section className={`${s.section} ${s.team}`} aria-labelledby="team-title">
        <div className={s.teamIntro}><p className={s.eyebrow}>The people behind the review</p><h2 id="team-title">Who reviews your work</h2><p>Your materials are personally reviewed by Eugene Sheidlin and Maria Raikkonen. Our perspective comes from selecting, developing and presenting artists through exhibitions, galleries and art fairs.</p></div>
        <div className={s.people}>{PEOPLE.map((person) => <article className={s.person} key={person.name}><Image src={person.image} alt={person.name} width={419} height={480} sizes="(max-width: 327px) calc(100vw - 48px), (max-width: 600px) 280px, (max-width: 1100px) 24vw, 280px" /><h3>{person.name}</h3><p>{person.role}</p></article>)}</div>
      </section>

      <section id="consulting-enquiry" className={`${s.section} ${s.enquiry}`} aria-labelledby="enquiry-title">
        <div className={s.enquiryIntro}><p className={s.eyebrow}>Start a conversation</p><h2 id="enquiry-title">Tell us about your practice.</h2><p>{"Share your work and what you're looking to develop. We'll take it from there."}</p></div>
        <form className={s.form} onSubmit={submitEnquiry} onInput={handleInput} noValidate aria-busy={status === "sending"}>
          <fieldset disabled={status === "sending"}>
            <legend className={s.srOnly}>Your enquiry details</legend>
            <div className={s.formPair}>
              <label htmlFor="consulting-name"><span className={s.fieldLabel}>Your name <span aria-hidden>*</span></span><input id="consulting-name" name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
              <label htmlFor="consulting-email"><span className={s.fieldLabel}>Email address <span aria-hidden>*</span></span><input id="consulting-email" name="email" type="email" autoComplete="email" required maxLength={254} pattern={"[^\\s@]+@[^\\s@]+\\.[^\\s@]+"} placeholder="you@example.com" /></label>
            </div>
            <label htmlFor="consulting-service"><span className={s.fieldLabel}>What are you interested in? <span aria-hidden>*</span></span><select id="consulting-service" name="service" required ref={selectRef} value={service} onChange={(event) => setService(event.target.value)}><option value="" disabled>Select a service</option>{SERVICES.map((offer) => <option key={offer.value} value={offer.value}>{offer.name}</option>)}</select></label>
            <label htmlFor="consulting-portfolio"><span className={s.fieldLabel}>Portfolio or website</span><input id="consulting-portfolio" name="portfolio" type="text" inputMode="url" maxLength={2048} placeholder="Link to your work" /></label>
            <label htmlFor="consulting-questions"><span className={s.fieldLabel}>{"Anything you'd like us to know?"}</span><textarea id="consulting-questions" name="questions" rows={4} maxLength={10_000} placeholder="Tell us a little about your work or what you'd like to explore..." /></label>
            <div className={s.formActions}><button type="submit" className={s.button} disabled={status === "sending"}><span>{status === "sending" ? "Sending…" : "Send your enquiry"}</span><span aria-hidden>↗</span></button><p className={s.formNote}>We review every enquiry personally.</p></div>
          </fieldset>
          <div className={s.feedback} aria-live="polite">{status === "success" && <p role="status">Thank you. Your enquiry has been received.</p>}{status === "error" && <p role="alert">Your enquiry could not be sent. Please try again or <a href={emailHref}>email us about {service || "your practice"}</a>.</p>}</div>
        </form>
        <aside className={s.faq} aria-label="Questions about the services">{FAQ.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</aside>
      </section>
    </div></div>
  );
}
