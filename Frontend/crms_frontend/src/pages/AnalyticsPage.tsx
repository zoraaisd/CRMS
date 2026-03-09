import DashboardLayout from "../components/layout/DashboardLayout";
import PageHeader from "../components/common/PageHeader";
import MetricCard from "../components/common/MetricCard";
import LeadTargetChart from "../components/charts/LeadTargetChart";
import RevenueTargetChart from "../components/charts/RevenueTargetChart";

import {
  leadTargetData,
  metrics,
  revenueTargetData,
} from "../data/dashboardData";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <PageHeader title="Analytics" />

      <section className="metrics-grid">
        {metrics.map((item) => (
          <MetricCard
            key={item.title}
            title={item.title}
            value={item.value}
            growth={item.growth}
            footer={item.footer}
          />
        ))}
      </section>

      <section className="charts-grid">
        <LeadTargetChart
          achieved={leadTargetData.achieved}
          target={leadTargetData.target}
        />
        <RevenueTargetChart data={revenueTargetData} />
      </section>
    </DashboardLayout>
  );
}