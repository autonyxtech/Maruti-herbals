import { siteConfig } from "@/config/site";
import { chatbotPrompts } from "@/data/chatbot";

export function getBotReply(message: string): string {
  const normalized = message.toLowerCase();

  const match = chatbotPrompts.find((item) =>
    normalized.includes(item.question.toLowerCase().split(" ")[0].replace("/", "")) ||
    item.question.toLowerCase().includes(normalized)
  );

  if (match) return match.answer;

  return `Thanks for your message. You can shop on Amazon: ${siteConfig.amazonStorefront} or connect with us on WhatsApp: ${siteConfig.whatsappLink}.`;
}

export async function sendMessageToBackend(message: string) {
  const reply = getBotReply(message);
  return {
    ok: true,
    reply,
  };
}
