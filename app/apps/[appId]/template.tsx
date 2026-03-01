interface AppTemplateProps {
  children: React.ReactNode;
}

export default function AppTemplate({ children }: AppTemplateProps) {
  return (
    <div className="app-open-enter" style={{ animationDuration: "var(--app-open-duration)" }}>
      {children}
    </div>
  );
}
