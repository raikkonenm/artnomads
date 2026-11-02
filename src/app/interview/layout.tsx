import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.artcnomad.com"),
};

export default function InterviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
