"use client";

import { useEffect } from "react";
import { Fabric } from "@fluentui/react";
import { initializeIcons } from "@fluentui/font-icons-mdl2";

export function FluentProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initializeIcons();
  }, []);

  return <Fabric>{children}</Fabric>;
}
