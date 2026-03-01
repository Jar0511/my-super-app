import Link from "next/link";
import AppIcon from "@/features/os/components/app-icon";
import { getAppsBySurface } from "@/features/os/model/app-registry";

export default function AppGrid() {
  const apps = getAppsBySurface("home");

  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-6 px-8">
      {apps.map((app) => (
        <Link key={app.id} href={app.href} aria-label={app.label}>
          <AppIcon color={app.color} label={app.label} icon={app.icon} />
        </Link>
      ))}
    </div>
  );
}
