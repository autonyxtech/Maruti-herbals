"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SendHorizonal, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { chatbotBubbleText, chatbotPrompts } from "@/data/chatbot";
import { sendMessageToBackend } from "@/lib/chatbot";
import { siteConfig } from "@/config/site";

type ChatMessage = {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: "intro",
    sender: "bot",
    text: "Hi! I’m Maruti Harbals Assistant. I can guide you through our herbal powders and order options.",
    time: "Now",
  },
];

export function FloatingChatWidget() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem("maruti-harbals-chat-dismissed") === "true";
    } catch {
      return false;
    }
  });
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [draft, setDraft] = useState("");
  const [thinking, setThinking] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (dismissed) return;

    const timer = window.setTimeout(() => setVisible(true), 3000);
    return () => window.clearTimeout(timer);
  }, [dismissed]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const addMessage = (message: ChatMessage) => {
    setMessages((current) => [...current, message]);
  };

  const handleQuickReply = async (text: string) => {
    if (!text.trim()) return;

    addMessage({ id: crypto.randomUUID(), sender: "user", text, time: "Now" });
    setThinking(true);

    const response = await sendMessageToBackend(text);
    addMessage({
      id: crypto.randomUUID(),
      sender: "bot",
      text: response.reply,
      time: "Now",
    });
    setThinking(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!draft.trim()) return;
    await handleQuickReply(draft);
    setDraft("");
  };

  const dismissBadge = () => {
    try {
      sessionStorage.setItem("maruti-harbals-chat-dismissed", "true");
    } catch {
      // ignore storage problems
    }
    setDismissed(true);
    setVisible(false);
  };

  return (
    <>
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Order on WhatsApp"
        className="fixed bottom-4 left-4 z-[80] flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border)] bg-white shadow-[0_12px_30px_rgba(15,61,34,0.16)] transition-transform hover:-translate-y-1 sm:bottom-5 sm:left-5"
      >
        <Image src="/images/whatsapp-icon.png" alt="" width={48} height={48} className="h-12 w-12 rounded-full object-contain" />
      </a>

      <div className="fixed bottom-4 right-4 z-[80] flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {!dismissed && visible && !open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 mr-1 flex max-w-[calc(100vw-6rem)] items-center gap-2 rounded-[22px] border border-white/60 bg-white/95 px-3 py-2.5 shadow-[0_14px_40px_rgba(15,61,34,0.15)] backdrop-blur-md sm:mr-2 sm:gap-3"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--leaf-green)] shadow-[0_0_12px_rgba(76,175,80,0.8)]" aria-hidden="true" />
            <span className="text-sm font-medium text-[var(--forest-green)]">{chatbotBubbleText}</span>
            <button
              type="button"
              onClick={dismissBadge}
              className="rounded-full p-1 text-[var(--muted)] transition hover:text-[var(--green-700)]"
              aria-label="Dismiss chat prompt"
            >
              <X size={14} />
            </button>
            <div className="absolute -bottom-2 left-5 h-4 w-4 rotate-45 border-b border-r border-white/60 bg-white/90" aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-end gap-3">
        <button
          type="button"
          onClick={() => {
            setOpen((state) => !state);
            if (open) {
              setVisible(true);
            }
          }}
          aria-label="Open chat assistant"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[var(--green-700)] text-white shadow-[0_15px_38px_rgba(46,125,50,0.22)] transition-transform hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 animate-ping rounded-full border border-[rgba(76,175,80,0.35)]" aria-hidden="true" />
          <Sparkles size={24} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[92vw] max-w-[380px] overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[0_22px_60px_rgba(15,61,34,0.18)]"
            aria-live="polite"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--forest-green)] px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                  MH
                </div>
                <div>
                  <div className="text-sm font-semibold">Maruti Harbals Assistant</div>
                  <div className="flex items-center gap-2 text-[10px] text-white/70">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" /> Online
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button type="button" aria-label="Minimise chat" onClick={() => setOpen(false)} className="rounded-full border border-white/20 p-1.5">
                  <span className="block h-0.5 w-4 bg-white" />
                </button>
                <button type="button" aria-label="Close chat" onClick={() => setOpen(false)} className="rounded-full border border-white/20 p-1.5">
                  <X size={15} />
                </button>
              </div>
            </div>

            <div className="flex max-h-[420px] min-h-[280px] flex-col gap-3 overflow-y-auto bg-[var(--soft-mint)]/30 p-3">
              {messages.map((item) => (
                <div key={item.id} className={`flex ${item.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                      item.sender === "user"
                        ? "bg-[var(--green-700)] text-white"
                        : "bg-white text-[var(--body-text)] shadow-sm"
                    }`}
                  >
                    {item.text}
                  </div>
                </div>
              ))}

              {thinking && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl bg-white p-3 shadow-sm">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--green-700)] [animation-delay:-0.2s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--green-700)] [animation-delay:-0.1s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--green-700)]" />
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-[var(--border)] bg-white p-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {chatbotPrompts.slice(0, 4).map((prompt) => (
                  <button
                    key={prompt.question}
                    type="button"
                    onClick={() => handleQuickReply(prompt.question)}
                    className="rounded-full border border-[var(--border)] bg-[var(--soft-mint)] px-2.5 py-1.5 text-xs text-[var(--forest-green)] transition-colors hover:border-[var(--green-700)]"
                  >
                    {prompt.question}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  className="h-11 flex-1 rounded-full border border-[var(--border)] bg-[var(--soft-mint)] px-3 text-sm outline-none ring-0 transition focus:border-[var(--green-700)]"
                  placeholder="Ask about products or ordering…"
                  aria-label="Write a message"
                />
                <button type="submit" className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--green-700)] text-white shadow-lg shadow-green-900/20 transition hover:bg-[var(--green-800)]" aria-label="Send message">
                  <SendHorizonal size={18} />
                </button>
              </form>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {!open && !dismissed && (
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setVisible(false);
          }}
          className="hidden"
          aria-label="Open chat assistant"
        />
      )}
      </div>
    </>
  );
}
