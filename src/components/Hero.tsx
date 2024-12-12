import { HeroTitle } from "./hero/HeroTitle";
import { HeroVideo } from "./hero/HeroVideo";
import { DownloadButton } from "./ui/DownloadButton";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center my-16">
          <HeroTitle />

          <p className="max-w-2xl mx-auto text-xl text-light/70 mb-10">
            The ultimate screenshot tool that revolutionizes how you capture,
            edit, and manage screenshots.
          </p>

          <div className="flex justify-center">
            <DownloadButton />
          </div>
        </div>

        <HeroVideo />
      </div>
    </div>
  );
}
