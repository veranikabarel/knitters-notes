const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section>
      <nav></nav>
      {children}
    </section>
  );
};

export default DashboardLayout;
