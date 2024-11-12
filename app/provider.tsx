"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
   const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Optional: return a loader, spinner, or null to skip rendering on SSR
    return null;
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
