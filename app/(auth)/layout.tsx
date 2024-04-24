const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center bg-primary-50 bg-dotted-pattern min-h-screen w-full bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default Layout;
