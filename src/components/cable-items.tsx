import Image from "next/image";
import Link from "next/link";
import type { ProductoSubItem } from "@/data/productos";

interface CableItemsProps {
  productoSlug: string;
  items: ProductoSubItem[];
}

export function CableItems({ productoSlug, items }: CableItemsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4 items-start">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/productos/${productoSlug}/${item.slug}`}
          className="cable-card block"
        >
          <div className="cable-card-img">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="cable-card-body">
            <h4>{item.name}</h4>
            <p className="cable-desc open">{item.summary}</p>
            <span className="cable-toggle">
              Ver detalle <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
