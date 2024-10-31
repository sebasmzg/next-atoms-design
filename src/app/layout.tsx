import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/themeProvider";
import { ModalProvider } from "@/context/modalContext";
import { Modal } from "@/components/molecules/Modal";
import { Dashboard } from "@/components/templates/Dashboard";


export const metadata: Metadata = {
  title: {
    default: "Admin Panel",
    template: "%s | Admin Panel",
  },
  description: "Company and vacancy management",
};

export default function RootLayout({
  dashboard
}: Readonly<{
  dashboard: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ModalProvider>
        <body>
          <Dashboard>{dashboard}</Dashboard>
        </body>
        <Modal />
        </ModalProvider>
      </ThemeProvider>
    </html>
  );
}
