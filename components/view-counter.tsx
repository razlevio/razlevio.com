import { Eye } from "lucide-react";
import { incrementPageViews } from "@/features/kv/actions";

export async function ViewCounter() {
  try {
    const { views } = await incrementPageViews();

    return (
      <div className="flex items-center gap-1 text-muted-foreground">
        <Eye size={14} />
        <span className="text-xs">
          {Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(views)}
        </span>
      </div>
    );
  } catch (error) {
    // Gracefully handle errors
    console.error("Failed to load view counter:", error);
    return null;
  }
}
