import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Devki Nandan & Sons",
  description:
    "Contact Devki Nandan & Sons for electrical goods, catalog support, quotations, and project supply assistance in Rampur Bushahr.",
  path: "/contact",
  keywords: [
    "contact Devki Nandan and Sons",
    "electrical shop contact Rampur Bushahr",
    "electrical supplier phone number Himachal Pradesh",
  ],
});

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
