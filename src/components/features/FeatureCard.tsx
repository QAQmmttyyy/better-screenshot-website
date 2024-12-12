import { IconType } from "../types";

interface FeatureCardProps {
  feature: {
    icon: IconType;
    title: string;
    description: string;
  };
  index: number;
}

const ACCENT_COLORS: Record<number, string> = {
  0: "text-blue-500",
  1: "text-teal-500",
  2: "text-amber-500",
  3: "text-purple-500",
};

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div className="group p-8 rounded-2xl bg-light/5 hover:bg-light/10 transition-all duration-300 border border-light/5">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-xl bg-light/5 group-hover:bg-light/10 transition-colors">
          <Icon
            className={`w-6 h-6 ${ACCENT_COLORS[index]} group-hover:scale-110 transition-transform duration-300`}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-light mb-2">
            {feature.title}
          </h3>
          <p className="text-light/70">{feature.description}</p>
        </div>
      </div>
    </div>
  );
}
