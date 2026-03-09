import CardContainer from "./CardContainer";

type MetricCardProps = {
  title: string;
  value: string;
  growth?: string;
  footer?: string;
};

export default function MetricCard({
  title,
  value,
  growth,
  footer,
}: MetricCardProps) {
  return (
    <CardContainer className="metric-card">
      <div className="metric-title">{title}</div>

      <div className="metric-value-row">
        <span className="metric-value">{value}</span>
        {growth && <span className="metric-growth">▲ {growth}</span>}
      </div>

      {footer && <div className="metric-footer">{footer}</div>}
    </CardContainer>
  );
}