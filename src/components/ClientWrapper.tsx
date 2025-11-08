'use client';

import { useEffect, useState } from 'react';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  useEffect(() => {
    // Use requestIdleCallback for non-critical hydration
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          // Hydration complete - could be used for analytics or other side effects
        }, { timeout: 1 });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          // Hydration complete - could be used for analytics or other side effects
        }, 0);
      }
    }
  }, []);

  // Return children immediately - no blocking render
  // This prevents unnecessary re-renders and improves performance
  return <>{children}</>;
}
