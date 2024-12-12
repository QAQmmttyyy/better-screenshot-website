import { ArrowRight } from "lucide-react";

export function DownloadButton() {
  return (
    <button className="group bg-blue-600 hover:bg-blue-500 text-light text-base px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 whitespace-nowrap">
      Download Free
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
