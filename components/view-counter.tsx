import { Eye } from "lucide-react";
import { incrementPageViews } from "@/features/kv/actions";

export const dynamic = "force-dynamic";

export async function ViewCounter() {
  try {
    const { views } = await incrementPageViews();

    return (
      <div className="hidden items-center gap-1 text-muted-foreground sm:flex">
        <Eye size={14} />
        <span className="text-xs">{views.toLocaleString()} visitors</span>
      </div>
    );
  } catch (error) {
    // Gracefully handle errors
    console.error("Failed to load view counter:", error);
    return null;
  }
}
