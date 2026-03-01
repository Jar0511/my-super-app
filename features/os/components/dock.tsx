import Link from "next/link";
import AppIcon from "@/features/os/components/app-icon";
import { getAppsBySurface } from "@/features/os/model/app-registry";

export default function Dock() {
  const apps = getAppsBySurface("dock");

  return (
    <div className="hidden px-4 pb-3 md:flex md:justify-center xl:pb-2">
      <div
        className="flex items-center gap-3 rounded-[28px] px-4 py-2.5 backdrop-blur-2xl transition-colors duration-300 xl:gap-2.5 xl:rounded-3xl xl:px-3.5 xl:py-2"
        style={{
          background: "var(--dock-bg)",
          borderTop: "1px solid var(--dock-border)",
          boxShadow: `0 -2px 20px var(--dock-shadow), inset 0 1px 0 var(--dock-border)`,
        }}
      >
        {apps.map((app) => (
          <Link key={app.id} href={app.href} aria-label={app.label}>
            <AppIcon color={app.color} icon={app.icon} />
          </Link>
        ))}
      </div>
    </div>
  );
}
