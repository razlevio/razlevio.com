import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const URL_REGEX = /(^\w+:|^)\/\//;

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
