import AppGrid from "@/features/os/components/app-grid";
import Dock from "@/features/os/components/dock";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-1 items-center justify-center md:hidden">
        <AppGrid />
      </div>

      <div className="hidden flex-1 md:block" />

      <Dock />
    </>
  );
}
