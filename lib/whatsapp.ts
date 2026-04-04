export const WHATSAPP_NUMBER = "919418000309";

export function getWhatsAppLink(message?: string): string {
  const encoded = message
    ? encodeURIComponent(message)
    : encodeURIComponent(
        "Hello! I would like to inquire about your electrical products and availability."
      );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  default:
    "Hello! I would like to inquire about your electrical products and availability.",
  catalog:
    "Hello! I'd like to request a catalog or product list for my requirement.",
  bulk: "Hello! I'm interested in bulk pricing and supply support for electrical goods.",
  contact:
    "Hello! I'd like to get in touch with Devki Nandan & Sons regarding your products.",
};
