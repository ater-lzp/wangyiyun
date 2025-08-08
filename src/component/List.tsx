import React from "react";

export default function List({
  className,
  children,
  row,
  col,
}: {
  children?: React.ReactNode;
  className?: string;
  row: number;
  col: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
