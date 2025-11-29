import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const URL_REGEX = /(^\w+:|^)\/\//;
const WWW_REGEX = /^www\./;
const DOMAIN_EXTRACT_REGEX = /(?:https?:\/\/)?(?:www\.)?([^/]+)/;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // ignore
  }
};

export function decodeEmail(email: string) {
  return atob(email);
}

export function urlToName(url: string) {
  return url.replace(URL_REGEX, "");
}

export function addQueryParams(
  urlString: string,
  query: Record<string, string>
): string {
  try {
    const url = new URL(urlString);

    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value);
    }

    return url.toString();
  } catch {
    return urlString;
  }
}

/**
 * Extracts the domain from a URL
 * @param url - The URL to extract domain from
 * @returns The domain (e.g., "vercel.com" from "https://vercel.com")
 */
export function extractDomain(url: string): string | null {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace(WWW_REGEX, "");
  } catch {
    // If URL parsing fails, try to extract domain manually
    const match = url.match(DOMAIN_EXTRACT_REGEX);
    return match ? match[1] : null;
  }
}

/**
 * Generates a Brandfetch logo URL
 * @param domain - The domain name (e.g., "vercel.com")
 * @param options - Optional configuration for the logo
 * @returns The Brandfetch logo URL or null if client ID is not available
 */
export function getBrandfetchLogoUrl(
  domain: string,
  options?: {
    width?: number;
    height?: number;
    format?: "webp" | "png" | "jpg";
    type?: "icon" | "symbol" | "logo";
    theme?: "light" | "dark";
    fallback?: "lettermark" | "wordmark" | "monogram";
  }
): string | null {
  const clientId =
    process.env.NEXT_PUBLIC_BRANDFETCH_CLIENT_ID ||
    process.env.BRANDFETCH_CLIENT_ID;

  if (!clientId) {
    return null;
  }

  const {
    width,
    height,
    format = "webp",
    type = "icon",
    theme,
    fallback,
  } = options || {};

  let path = `https://cdn.brandfetch.io/${domain}`;

  // Add theme if specified
  if (theme) {
    path += `/theme/${theme}`;
  }

  // Add fallback if specified
  if (fallback) {
    path += `/fallback/${fallback}`;
  }

  // Add type (icon, symbol, or logo)
  path += `/${type}`;

  // Add dimensions if specified
  if (width || height) {
    const parts: string[] = [];
    if (height) {
      parts.push(`h/${height}`);
    }
    if (width) {
      parts.push(`w/${width}`);
    }
    path = path.replace(`/${type}`, `/${parts.join("/")}/${type}`);
  }

  // Add format extension (except for SVG which is only available for logo/symbol)
  if (format !== "webp" || type === "logo" || type === "symbol") {
    path += `.${format}`;
  }

  // Add client ID
  return `${path}?c=${clientId}`;
}
