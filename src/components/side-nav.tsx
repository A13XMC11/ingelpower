"use client";

import { useEffect, useState } from "react";

export interface SideNavItem {
  href: string;
  label: string;
}

interface SideNavProps {
  title: string;
  items: SideNavItem[];
}

export function SideNav({ title, items }: SideNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const blocks = items
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!blocks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    blocks.forEach((b) => observer.observe(b));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="side-nav">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className={activeId === item.href.replace("#", "") ? "active" : ""}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
