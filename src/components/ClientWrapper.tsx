'use client';

import { useEffect, useState } from 'react';

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const [_mounted, set_mounted] = useState(false);

  useEffect(() => {
    set_mounted(true);
  }, []);

  if (!_mounted) {
    // Return a placeholder that matches the server-rendered content
    return (
      <div className="min-h-screen flex flex-col bg-white text-black transition-all duration-300">
        {children}
      </div>
    );
  }

  return <>{children}</>;
}
