export interface TrustBarMetric {
  value: number;
  suffix: string;
  label: string;
}

export interface TrustBarData {
  metrics: TrustBarMetric[];
}

export const defaultTrustBar: TrustBarData = {
  metrics: [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 6, suffix: "", label: "Core Services" },
  ],
};
