"use client";

import { useEffect, useMemo, useState } from "react";

export default function DateTimeText() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setNow(new Date());
    }, 30_000);

    return () => window.clearInterval(timerId);
  }, []);

  const timeText = useMemo(
    () =>
      new Intl.DateTimeFormat("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now),
    [now],
  );

  const dateWithWeekdayText = useMemo(
    () =>
      new Intl.DateTimeFormat("ko-KR", {
        month: "long",
        day: "numeric",
        weekday: "long",
      }).format(now),
    [now],
  );

  return (
    <p
      className="flex items-center gap-3 text-base font-semibold xl:gap-2 xl:text-xs xl:font-normal"
      style={{ color: "var(--text-primary)" }}
    >
      <span className="order-1 xl:order-2">{timeText}</span>
      <span className="hidden order-2 md:inline-block xl:order-1">
        {dateWithWeekdayText}
      </span>
    </p>
  );
}
