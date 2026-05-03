"use client";

import { useEffect } from "react";
import { Download, ExternalLink, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PDFViewer({ pdfUrl, title, isOpen, onClose }: PDFViewerProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pdf-viewer-title"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-950 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-ink-900/50 px-6 py-4 backdrop-blur">
            <h3 id="pdf-viewer-title" className="font-display text-xl font-bold text-sand-50">{title}</h3>
            <div className="flex items-center gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-sand-50 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-signal-500"
                aria-label="Open in new tab"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={pdfUrl}
                download
                className="rounded-full border border-white/10 bg-white/5 p-2 text-sand-50 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-signal-500"
                aria-label="Download PDF"
              >
                <Download className="h-5 w-5" />
              </a>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 p-2 text-sand-50 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-signal-500"
                aria-label="Close viewer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* PDF via iframe — no extra dependencies, works everywhere */}
          <div className="flex-1 overflow-hidden bg-ink-900/30">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=1`}
              className="h-full w-full"
              title={title}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
