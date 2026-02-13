"use client";

import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

type TrailerModalProps = {
  videoKey?: string | null;
  children: ReactNode; // 👈 custom button content
};

export const TrailerModal = ({ videoKey, children }: TrailerModalProps) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!videoKey) return null;

  return (
    <>
      {/* 👇 ONE BUTTON */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        {children}
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
