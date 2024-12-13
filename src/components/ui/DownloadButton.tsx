import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { UAParser } from "ua-parser-js";

export function DownloadButton() {
  const downloadUrl = useMemo(() => {
    const baseUrl = "";
    const parser = new UAParser();
    const cpu = parser.getCPU();
    const os = parser.getOS();
    const isArm = cpu.architecture === "arm64";

    if (os.name === "macOS") {
      return `${baseUrl}/download/Better.Screenshot${
        isArm ? "-arm64" : ""
      }.dmg`;
    } else if (os.name === "Windows") {
      return `${baseUrl}/download/Better.Screenshot.Setup.exe`;
    }

    return "";
  }, []);

  return (
    <a
      href={downloadUrl}
      className="group bg-blue-600 hover:bg-blue-500 text-light text-base px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 whitespace-nowrap no-underline cursor-pointer"
    >
      Download Free
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
