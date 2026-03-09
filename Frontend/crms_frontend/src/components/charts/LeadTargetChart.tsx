import CardContainer from "../common/CardContainer";
import SectionTitle from "../common/SectionTitle";

type LeadTargetChartProps = {
  achieved: number;
  target: number;
};

export default function LeadTargetChart({
  achieved,
  target,
}: LeadTargetChartProps) {
  const percentage = Math.min((achieved / target) * 100, 100);

  return (
    <CardContainer className="chart-card">
      <SectionTitle title="LEAD GENERATION TARGET - THIS YEAR" />

      <div className="gauge-wrapper">
        <div className="gauge-track">
          <div
            className="gauge-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="gauge-values">
          <span>0</span>
          <span>Target: {target}</span>
        </div>

        <div className="gauge-center-text">
          <div className="gauge-achieved">{achieved}</div>
          <div className="gauge-remaining">Remaining : {target - achieved}</div>
        </div>
      </div>
    </CardContainer>
  );
}