export type MetricItem = {
  title: string;
  value: string;
  growth?: string;
  footer?: string;
};

export const metrics: MetricItem[] = [
  {
    title: "LEADS THIS MONTH",
    value: "10",
    growth: "100%",
    footer: "Last Month Relative: 0",
  },
  {
    title: "REVENUE THIS MONTH",
    value: "Rs. 35,000.00",
    growth: "100%",
    footer: "Last Month Relative: 0",
  },
  {
    title: "DEALS IN PIPELINE",
    value: "8",
    footer: "",
  },
  {
    title: "ACCOUNTS THIS MONTH",
    value: "10",
    growth: "100%",
    footer: "Last Month Relative: 0",
  },
];

export const revenueTargetData = [
  {
    name: "Entire Org",
    achieved: 700000,
    target: 1000000,
  },
];

export const leadTargetData = {
  achieved: 10,
  target: 1000,
};