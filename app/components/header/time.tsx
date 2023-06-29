'use client';

import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Munich time, updated every second
  const munichTime = time.toLocaleTimeString("en-GB", { timeZone: "Europe/Berlin" });

  // Set emoji based on time of day
  const emoji = (time.getHours() >= 4 && time.getHours() <= 20) ? "🌞" : "🌙";

  return <span>{emoji} {munichTime}</span>;
}