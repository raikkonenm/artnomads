"use client";

import { useState, type FormEvent } from "react";

export function WorkflowAccessRequestForm() {
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
          source: "workflow-access",
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
        }),
      });

      if (!response.ok) {
        throw new Error("Access request delivery failed.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 border-t border-black/10 pt-5">
      <label className="block">
        <span className="text-label mb-3 block text-void/45">Name</span>
        <input
          name="name"
          type="text"
          required
          className="h-11 w-full border-b border-black/16 bg-transparent text-sm text-void transition-colors duration-300 focus:border-black/45 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-label mb-3 block text-void/45">Email</span>
        <input
          name="email"
          type="email"
          required
          className="h-11 w-full border-b border-black/16 bg-transparent text-sm text-void transition-colors duration-300 focus:border-black/45 focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="text-label mb-3 block text-void/45">Phone / Messenger (optional)</span>
        <input
          name="phone"
          type="text"
          className="h-11 w-full border-b border-black/16 bg-transparent text-sm text-void transition-colors duration-300 focus:border-black/45 focus:outline-none"
        />
      </label>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="link-editorial text-label text-void transition-opacity duration-300 disabled:cursor-wait disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Request Access →"}
        </button>
        <p className="mt-5 text-sm text-void/45">
          We&apos;ll get back to you within 1–2 days.
        </p>
        {status === "success" && (
          <p className="mt-4 text-sm text-void/68" role="status">
            Thank you. Your request has been received.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-void/68" role="alert">
            Your request could not be sent. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
