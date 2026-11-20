import { navigationItems } from "@/data/navigation";

function buildNavigationIndex() {
  return navigationItems.flatMap((page) => {
    if (page.id === "search") return [];

    const pageEntry = {
      id: `page-${page.id}`,
      type: "Page",
      title: page.label,
      description: `Accéder à la page ${page.label}`,
      keywords: [page.id],
      href: page.href,
    };

    const navigationEntries = (page.subItems || []).map((item, index) => ({
      id: `navigation-${page.id}-${index}`,
      type: "Navigation",
      title: item.label,
      description: `Navigation : ${page.label}`,
      keywords: [],
      href: item.href,
    }));

    const anchorEntries = (page.anchors || []).map((anchor) => ({
      id: `anchor-${page.id}-${anchor.id}`,
      type: "Section",
      title: anchor.label,
      description: `Section de ${page.label}`,
      keywords: anchor.keywords || [],
      href: `${page.href}#${anchor.id}`,
    }));

    return [pageEntry, ...navigationEntries, ...anchorEntries];
  });
}

export const searchableContent = [...buildNavigationIndex()];
