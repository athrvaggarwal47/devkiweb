import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Devki Nandan & Sons",
  description:
    "Learn about Devki Nandan & Sons, an electrical goods business established in 1957 and trusted across Rampur Bushahr and Himachal Pradesh.",
  path: "/about",
  keywords: [
    "about Devki Nandan and Sons",
    "electrical business Rampur Bushahr since 1957",
    "trusted electrical supplier Himachal Pradesh",
  ],
});

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
