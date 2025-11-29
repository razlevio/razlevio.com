import { StaggerContainer } from "@/components/stagger-container";
import { StaggerItem } from "@/components/stagger-item";
import { ServiceCard } from "@/features/profile/components/stack/service-card";
import { STACK } from "@/features/profile/data/stack";
import type { Stack as StackType } from "@/features/profile/types/stack";
import { extractDomain, getBrandfetchLogoUrl } from "@/lib/utils";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";

const CATEGORY_LABELS: Record<StackType["category"], string> = {
  development: "Development",
  ai: "AI",
  productivity: "Productivity",
  design: "Design",
  finance: "Finance",
  other: "Other",
};

const CATEGORY_ORDER: StackType["category"][] = [
  "development",
  "ai",
  "productivity",
  "design",
  "finance",
  "other",
];

function groupByCategory(stack: StackType[]) {
  return stack.reduce(
    (acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    },
    {} as Record<StackType["category"], StackType[]>
  );
}

export function Stack() {
  const grouped = groupByCategory(STACK);
  const totalCount = STACK.length;

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>
          Stack
          <sup className="ml-1 select-none font-mono text-muted-foreground text-sm">
            ({totalCount})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-8">
        {CATEGORY_ORDER.map((category) => {
          const items = grouped[category];
          if (!items || items.length === 0) {
            return null;
          }

          return (
            <div key={category}>
              <h3 className="mb-4 font-sans font-semibold text-base tracking-tight">
                {CATEGORY_LABELS[category]}
                <sup className="ml-1 select-none font-mono text-muted-foreground text-xs">
                  ({items.length})
                </sup>
              </h3>
              <StaggerContainer delay={0.1}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {items.map((item) => {
                    // Generate Brandfetch logo URL if referenceLink is available
                    const domain = item.referenceLink
                      ? extractDomain(item.referenceLink)
                      : null;
                    const brandfetchLogoUrl = domain
                      ? getBrandfetchLogoUrl(domain, {
                          width: 128,
                          height: 128,
                          format: "webp",
                          type: "icon",
                        })
                      : null;

                    return (
                      <StaggerItem key={item.title}>
                        <ServiceCard
                          {...item}
                          brandfetchLogoUrl={brandfetchLogoUrl}
                        />
                      </StaggerItem>
                    );
                  })}
                </div>
              </StaggerContainer>
            </div>
          );
        })}
      </PanelContent>
    </Panel>
  );
}
