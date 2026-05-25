"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useState, type FormEvent } from "react";

const INQUIRY_ROLES = ["Artist", "Gallery / Institution", "Collector", "Press / Media", "Other"];

const PROJECT_TYPES = [
  "Exhibition",
  "Artist Development",
  "Residency Strategy",
  "Curatorial Research",
  "Institutional Collaboration",
  "Digital Environment",
  "Consultation",
];

export function NewsletterCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity() || status === "sending") {
      return;
    }

    const formData = new FormData(form);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: formData.get("inquiry-role"),
          projectType: formData.get("project-type"),
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Inquiry delivery failed.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-paper scroll-mt-28 border-t border-black/10">
      <div className="container-gallery py-[var(--spacing-section)]">
        <div className="grid gap-14 lg:grid-cols-12">
          <FadeIn className="lg:col-span-6">
            <p className="text-label mb-5 text-void/45">CONTACT</p>
            <h2 className="font-display text-[clamp(2.6rem,5.5vw,6.4rem)] font-medium leading-[0.98] text-void">
              Begin with a
              <br />
              precise
              <br />
              conversation.
            </h2>
            <p className="mt-10 max-w-[60ch] text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.85] text-void/62">
              For exhibitions, artist development, digital culture projects, and
              cross-border curatorial collaborations, the first gesture is a clear
              conversation about context, ambition, constraints, and audience.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-start-8 lg:col-span-5 lg:self-end">
            <form onSubmit={handleSubmit} className="border-t border-black/10 pt-6">
              <fieldset className="border-b border-black/10 pb-7">
                <legend className="text-label mb-5 text-void/45">
                  I’m reaching out as
                </legend>
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  {INQUIRY_ROLES.map((role) => (
                    <label key={role} className="inline-flex items-center gap-2 text-sm text-void/62">
                      <input
                        type="radio"
                        name="inquiry-role"
                        value={role}
                        required
                        className="h-3 w-3 appearance-none rounded-full border border-black/30 bg-transparent checked:border-black checked:bg-void"
                      />
                      {role}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="border-b border-black/10 py-7">
                <label htmlFor="project-type" className="text-label mb-4 block text-void/45">
                  Project type
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  defaultValue=""
                  required
                  className="h-12 w-full border border-black/16 bg-transparent px-4 text-sm text-void/70 transition-colors duration-300 focus:border-black/45 focus:outline-none"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-4 border-b border-black/10 py-7 sm:grid-cols-2">
                <label className="block">
                  <span className="text-label mb-4 block text-void/45">Your Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    className="h-12 w-full border border-black/16 bg-transparent px-4 text-sm text-void placeholder:text-void/30 transition-colors duration-300 focus:border-black/45 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-label mb-4 block text-void/45">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-12 w-full border border-black/16 bg-transparent px-4 text-sm text-void placeholder:text-void/30 transition-colors duration-300 focus:border-black/45 focus:outline-none"
                  />
                </label>
              </div>

              <div className="border-b border-black/10 py-7">
                <label htmlFor="message" className="text-label mb-4 block text-void/45">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  placeholder="Tell us about your project, ideas, or goals..."
                  className="w-full resize-none border border-black/16 bg-transparent px-4 py-4 text-sm leading-[1.7] text-void placeholder:text-void/32 transition-colors duration-300 focus:border-black/45 focus:outline-none"
                />
              </div>

              <div className="grid gap-5 py-7 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="h-12 bg-void px-7 text-label text-white transition-opacity duration-300 hover:opacity-82 disabled:cursor-wait disabled:opacity-55"
                >
                  {status === "sending" ? "Sending..." : "Send Inquiry"}
                </button>
                <div>
                  <p className="text-sm leading-[1.65] text-void/45">
                    We read every message carefully.
                    <br />
                    Response time: 2–4 business days.
                  </p>
                  {status === "success" && (
                    <p className="mt-3 text-sm text-void/70" role="status">
                      Thank you. Your inquiry has been received.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-3 text-sm text-void/70" role="alert">
                      Your inquiry could not be sent. Please try again.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-6">
                <a
                  href="mailto:ARTCNOMADS@GMAIL.COM"
                  className="link-editorial text-label text-void/65 hover:text-void"
                >
                  ARTCNOMADS@GMAIL.COM
                </a>
                <a
                  href="https://www.instagram.com/artcnomads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial text-label text-void/65 hover:text-void"
                >
                  @ARTCNOMADS
                </a>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
