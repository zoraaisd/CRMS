import type { ReactNode } from "react";

type CardContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function CardContainer({
  children,
  className = "",
}: CardContainerProps) {
  return <div className={`card-container ${className}`}>{children}</div>;
}