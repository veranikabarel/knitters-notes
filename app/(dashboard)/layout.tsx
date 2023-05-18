import { theme } from '@/theme/theme';
import { ThemeProvider } from "@mui/material/styles";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <section>
        <nav></nav>
        {children}
      </section>
    </ThemeProvider>
  );
};

export default DashboardLayout;
