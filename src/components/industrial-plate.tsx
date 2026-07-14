interface IndustrialPlateProps {
  icon: React.ReactNode;
  minHeight?: number;
  className?: string;
  order?: "first" | "last";
}

export function IndustrialPlate({ icon, minHeight = 260, className = "", order }: IndustrialPlateProps) {
  const orderClass = order === "last" ? "order-2" : "";
  return (
    <div
      className={`industrial-plate ${orderClass} ${className}`.trim()}
      style={{ minHeight }}
    >
      <div className="plate-icon">{icon}</div>
    </div>
  );
}
