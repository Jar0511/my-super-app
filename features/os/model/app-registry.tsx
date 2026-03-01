export type AppSurface = "home" | "dock";

export interface AppRegistryEntry {
  id: string;
  label: string;
  href: `/apps/${string}`;
  icon: React.ReactNode;
  color: string;
  surfaces: {
    home: boolean;
    dock: boolean;
  };
  enabled: boolean;
  order: number;
}

export const appRegistry: AppRegistryEntry[] = [
  {
    id: "music",
    label: "Music",
    href: "/apps/music",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
      </svg>
    ),
    surfaces: { home: true, dock: true },
    enabled: true,
    order: 10,
  },
  {
    id: "photos",
    label: "Photos",
    href: "/apps/photos",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
      </svg>
    ),
    surfaces: { home: true, dock: true },
    enabled: true,
    order: 20,
  },
  {
    id: "weather",
    label: "Weather",
    href: "/apps/weather",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
      </svg>
    ),
    surfaces: { home: true, dock: true },
    enabled: true,
    order: 30,
  },
  {
    id: "messages",
    label: "Messages",
    href: "/apps/messages",
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
      </svg>
    ),
    surfaces: { home: true, dock: true },
    enabled: true,
    order: 40,
  },
  {
    id: "notes",
    label: "Notes",
    href: "/apps/notes",
    color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
      </svg>
    ),
    surfaces: { home: true, dock: true },
    enabled: true,
    order: 50,
  },
  {
    id: "settings",
    label: "Settings",
    href: "/apps/settings",
    color: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
      </svg>
    ),
    surfaces: { home: true, dock: true },
    enabled: true,
    order: 60,
  },
  {
    id: "health",
    label: "Health",
    href: "/apps/health",
    color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    surfaces: { home: true, dock: true },
    enabled: true,
    order: 70,
  },
  {
    id: "calendar",
    label: "Calendar",
    href: "/apps/calendar",
    color: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
      </svg>
    ),
    surfaces: { home: true, dock: true },
    enabled: true,
    order: 80,
  },
];

export function getAppsBySurface(surface: AppSurface) {
  return appRegistry
    .filter((app) => app.enabled && app.surfaces[surface])
    .sort((a, b) => a.order - b.order);
}

export function getAppById(appId: string) {
  return appRegistry.find((app) => app.id === appId && app.enabled);
}

export type AppId = (typeof appRegistry)[number]["id"];
