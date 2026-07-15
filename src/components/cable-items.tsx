"use client";

import { useState } from "react";
import Image from "next/image";

interface CableItem {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface CableItemsProps {
  items: CableItem[];
}

export function CableItems({ items }: CableItemsProps) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const [broken, setBroken] = useState<Record<number, boolean>>({});

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4 items-start">
      {items.map((item, index) => {
        const isOpen = open.has(index);
        return (
          <div key={item.name} className="cable-card">
            <div className="cable-card-img">
              {broken[index] ? (
                <span>{item.name}</span>
              ) : (
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  style={{ objectFit: "cover" }}
                  onError={() => setBroken((prev) => ({ ...prev, [index]: true }))}
                />
              )}
            </div>
            <div className="cable-card-body">
              <h4>{item.name}</h4>
              <button
                type="button"
                className="cable-toggle"
                aria-expanded={isOpen}
                onClick={() => {
                  setOpen((prev) => {
                    const next = new Set(prev);
                    next.has(index) ? next.delete(index) : next.add(index);
                    return next;
                  });
                }}
              >
                Ver detalle <span aria-hidden="true">{isOpen ? "▴" : "▾"}</span>
              </button>
              {isOpen && <p className="cable-desc open">{item.description}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
