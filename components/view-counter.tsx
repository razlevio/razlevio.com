"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { incrementPageViews } from "@/actions/increment-views";
import { getPageViews } from "@/actions/get-views";

export function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const initializeViews = async () => {
      // First get the current count
      const { views: currentViews } = await getPageViews();
      // Then increment it
      const { views: newViews } = await incrementPageViews();
      setViews(newViews);
    };
    initializeViews();
  }, []);

  if (views === null) return null; // Don't render anything while loading

  return (
    <div className="flex items-center gap-1 text-muted-foreground">
      <Eye size={14} />
      <span className="text-xs">{views.toLocaleString()} viewers</span>
    </div>
  );
}
