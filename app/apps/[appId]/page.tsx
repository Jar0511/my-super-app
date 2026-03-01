import { notFound } from "next/navigation";
import { renderScreenByAppId } from "@/features/apps/resolve-screen";
import AppShell from "@/features/apps/shared/components/app-shell";
import { getAppById } from "@/features/os/model/app-registry";

interface AppPageProps {
  params: Promise<{ appId: string }>;
}

export default async function AppPage({ params }: AppPageProps) {
  const { appId } = await params;
  const app = getAppById(appId);

  if (!app) {
    notFound();
  }

  return (
    <AppShell title={app.label}>
      {renderScreenByAppId(app.id)}
    </AppShell>
  );
}
