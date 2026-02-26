interface AppIconProps {
  color: string;
  label?: string;
  icon?: React.ReactNode;
}

export default function AppIcon({ color, label, icon }: AppIconProps) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="flex items-center justify-center transition-transform duration-150 ease-out hover:scale-105 active:scale-95"
        style={{
          width: 60,
          height: 60,
          borderRadius: "22%",
          background: color,
          boxShadow:
            "0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.25), inset 0 -2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {icon && (
          <span className="text-white/90 drop-shadow-sm">{icon}</span>
        )}
      </div>
      {label && (
        <span
          className="w-16 truncate text-center text-[11px] font-medium dark:text-slate-200"
          style={{ color: "var(--text-primary)" }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
