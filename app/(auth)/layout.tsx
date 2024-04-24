import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="flex-center bg-primary-50 bg-dotted-pattern min-h-screen w-full bg-cover bg-fixed bg-center">
        {children}
      </div>
    </ClerkProvider>
  );
};

export default Layout;
