import { NotFound as PageNotFound } from "@/components/not-found";

export const metadata = {
  title: "Page Not Found",
  description:
    "Sorry, the page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return <PageNotFound className="h-screen" />;
}
