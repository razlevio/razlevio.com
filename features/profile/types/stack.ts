export type Stack = {
  title: string;
  category:
    | "development"
    | "ai"
    | "productivity"
    | "design"
    | "finance"
    | "other";
  /** Optional rich text description; Markdown and line breaks supported. */
  description?: string;
  /** Optional URL to certificate, announcement, or reference material. */
  referenceLink?: string;
};
