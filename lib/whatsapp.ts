export const WHATSAPP_NUMBER = "919418033069"; // Updated phone number

export function getWhatsAppLink(message?: string): string {
  const encoded = message
    ? encodeURIComponent(message)
    : encodeURIComponent(
        "Hello! I found your website and would like to inquire about your electrical products."
      );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  default:
    "Hello! I found your website and would like to inquire about your electrical products.",
  catalog:
    "Hello! I'd like to request a catalog or product list for my requirements.",
  bulk: "Hello! I'm interested in bulk/wholesale pricing for electrical goods.",
  contact:
    "Hello! I'd like to get in touch with Devki Nandan and Sons regarding your products.",
};
