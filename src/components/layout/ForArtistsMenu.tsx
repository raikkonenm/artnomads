"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import nav from "./navbar.module.css";
import s from "./for-artists-menu.module.css";

const resources = [
  { title: "Artist Advisory", href: "/practice", external: false },
  { title: "Workflow.art", href: "/workflow-art", external: false },
  { title: "FindArt.Platform", href: "https://www.findartplatform.com/", external: true },
] as const;

export function ForArtistsMenu({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLLIElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const pendingFocus = useRef<number | null>(null);
  const pathname = usePathname();
  const id = mobile ? "for-artists-mobile" : "for-artists-desktop";
  const active = resources.some(item => !item.external && pathname === item.href);

  useEffect(() => {
    if (!open) { pendingFocus.current = null; return; }
    let focusFrame: number | undefined;
    if (pendingFocus.current !== null) {
      const index = pendingFocus.current;
      pendingFocus.current = null;
      focusFrame = requestAnimationFrame(() => {
        focusFrame = requestAnimationFrame(() => root.current?.querySelectorAll<HTMLAnchorElement>(`#${id} a`)[index]?.focus());
      });
    }
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    }
    function escape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape" && !root.current?.contains(document.activeElement)) setOpen(false);
    }
    document.addEventListener("pointerdown", outside);
    window.addEventListener("keydown", escape);
    return () => {
      if (focusFrame !== undefined) cancelAnimationFrame(focusFrame);
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("keydown", escape);
    };
  }, [open, id]);

  function handleKeys(event: KeyboardEvent<HTMLLIElement>) {
    if (event.key === "Escape" && open) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(false);
      trigger.current?.focus();
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    if (!open && event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const key = event.key;
    const links = [...(root.current?.querySelectorAll<HTMLAnchorElement>(`#${id} a`) ?? [])];
    const index = links.findIndex(link => link === document.activeElement);
    const next = key === "Home" ? 0 : key === "End" ? links.length - 1 : key === "ArrowDown" ? (index + 1) % links.length : index < 0 ? links.length - 1 : (index - 1 + links.length) % links.length;
    if (open) links[next]?.focus();
    else { pendingFocus.current = next; setOpen(true); }
  }

  function navigate() {
    setOpen(false);
    onNavigate?.();
  }

  return (
    <li
      className={mobile ? s.mobile : s.desktop}
      ref={root}
      onMouseEnter={mobile ? undefined : () => setOpen(true)}
      onMouseLeave={mobile ? undefined : () => { if (!root.current?.contains(document.activeElement)) setOpen(false); }}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}
      onKeyDown={handleKeys}
    >
      <button
        className={cn(mobile ? s.mobileTrigger : nav.desktopLink, s.trigger)}
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(value => mobile ? !value : true)}
        data-active={active || open}
      >
        <span>{mobile ? "For Artists" : "FOR ARTISTS"}</span><span className={s.chevron} aria-hidden="true">▾</span>
      </button>
      <div id={id} className={s.panel} data-open={open}>
        <ul className={s.list}>
          {resources.map(item => {
            const content = <span className={s.title}>{item.title}</span>;
            return <li key={item.href}>{item.external ? <a className={s.resource} href={item.href} target="_blank" rel="noopener noreferrer" onClick={navigate}>{content}</a> : <Link className={s.resource} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={navigate}>{content}</Link>}</li>;
          })}
        </ul>
      </div>
    </li>
  );
}
