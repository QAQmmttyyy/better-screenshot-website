import { FeatureCard } from "./features/FeatureCard";
import { FEATURES } from "../utils/constants";

export default function Features() {
  return (
    <div className="py-16 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
