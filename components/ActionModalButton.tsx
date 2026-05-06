"use client";

import { useEffect, useState } from "react";
import { Check, Copy, Github, Mail, X } from "lucide-react";

type ActionModalButtonProps = {
  type: "email" | "github";
  label?: string;
  value: string;
  title?: string;
  compact?: boolean;
  className?: string;
  modalTitle?: string;
};

export default function ActionModalButton({
  type,
  label,
  value,
  title,
  compact = false,
  className = "",
  modalTitle,
}: ActionModalButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const Icon = type === "github" ? Github : Mail;
  const defaultLabel = type === "github" ? "GitHub" : "联系我";
  const resolvedTitle = modalTitle ?? (type === "github" ? "GitHub" : "邮箱");

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  async function handleCopy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      }
    } catch {
      // Local browser contexts can block clipboard writes; the value remains visible in the modal.
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          compact
            ? `flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-paper transition-transform hover:-translate-y-0.5 sm:h-14 sm:w-14 ${className}`
            : `inline-flex h-14 items-center gap-3 rounded-xl border-[3px] border-ink bg-ink px-6 text-base font-black text-paper shadow-paper transition-transform hover:-translate-y-0.5 sm:h-16 sm:px-8 sm:text-lg ${className}`
        }
        aria-label={title ?? `${resolvedTitle}: ${value}`}
      >
        <Icon className={compact ? "h-6 w-6" : "h-5 w-5"} />
        {compact ? null : label ?? defaultLabel}
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${type}-modal-title`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/20 px-4 py-8"
        >
          <button
            type="button"
            aria-label="关闭弹窗"
            className="absolute inset-0 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-[680px] rounded-[28px] border-4 border-ink bg-paper p-6 shadow-paper-lg sm:p-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink/55 transition-colors hover:bg-ink/6 hover:text-ink"
              aria-label="关闭"
            >
              <X className="h-5 w-5" />
            </button>

            <h2
              id={`${type}-modal-title`}
              className="sr-only"
            >
              {resolvedTitle}
            </h2>

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-ink bg-[#ffd23f] text-ink">
              <Icon className="h-7 w-7" />
            </div>

            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="flex min-h-16 min-w-0 items-center rounded-2xl border-[3px] border-ink bg-white px-5 py-4 text-base font-black leading-7 text-ink shadow-paper break-all sm:text-lg">
                {value}
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex h-16 items-center justify-center gap-2 rounded-xl border-[3px] border-ink bg-ink px-6 text-base font-black text-paper transition-transform hover:-translate-y-0.5"
              >
                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                {copied ? "已复制" : "复制"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
