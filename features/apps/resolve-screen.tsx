import type { AppId } from "@/features/os/model/app-registry";
import CalendarScreen from "@/features/apps/calendar/screen";
import HealthScreen from "@/features/apps/health/screen";
import MessagesScreen from "@/features/apps/messages/screen";
import MusicScreen from "@/features/apps/music/screen";
import NotesScreen from "@/features/apps/notes/screen";
import PhotosScreen from "@/features/apps/photos/screen";
import SettingsScreen from "@/features/apps/settings/screen";
import WeatherScreen from "@/features/apps/weather/screen";

export function renderScreenByAppId(appId: AppId) {
  switch (appId) {
    case "music":
      return <MusicScreen />;
    case "photos":
      return <PhotosScreen />;
    case "weather":
      return <WeatherScreen />;
    case "messages":
      return <MessagesScreen />;
    case "notes":
      return <NotesScreen />;
    case "settings":
      return <SettingsScreen />;
    case "health":
      return <HealthScreen />;
    case "calendar":
      return <CalendarScreen />;
    default:
      return null;
  }
}
