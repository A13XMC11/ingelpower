import Image from "next/image";

interface IndustrialPlateProps {
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  minHeight?: number;
  className?: string;
  order?: "first" | "last";
}

export function IndustrialPlate({
  icon,
  image,
  imageAlt = "",
  minHeight = 260,
  className = "",
  order,
}: IndustrialPlateProps) {
  const orderClass = order === "last" ? "order-2" : "";
  return (
    <div
      className={`industrial-plate ${orderClass} ${className}`.trim()}
      style={{ minHeight }}
    >
      {image ? (
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      ) : null}
      {icon ? <div className="plate-icon">{icon}</div> : null}
    </div>
  );
}
