import Link from "next/link";

export interface CatalogSideNavItem {
  href: string;
  label: string;
}

interface CatalogSideNavProps {
  title: string;
  items: CatalogSideNavItem[];
  activeHref: string;
}

export function CatalogSideNav({ title, items, activeHref }: CatalogSideNavProps) {
  return (
    <aside className="side-nav">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} scroll={false} className={item.href === activeHref ? "active" : ""}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
