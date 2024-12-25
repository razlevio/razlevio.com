import { Eye } from "lucide-react";
import { incrementPageViews } from "@/actions/increment-views";
import { getPageViews } from "@/actions/get-views";

export const dynamic = "force-dynamic";

export async function ViewCounter() {
  try {
    const { views: currentViews } = await getPageViews();
    const { views } = await incrementPageViews();

    return (
      <div className="flex items-center gap-1 text-muted-foreground">
        <Eye size={14} />
        <span className="text-xs">{views.toLocaleString()} visits</span>
      </div>
    );
  } catch (error) {
    // Gracefully handle errors
    console.error("Failed to load view counter:", error);
    return null;
  }
}
