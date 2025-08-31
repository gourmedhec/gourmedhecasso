import "./globals.css";
import ClientLayout from "@/client-layout";
import TopBar from "@/components/TopBar/TopBar";

export const metadata = {
  title: "Gourm'Edhec | Association",
  description: "Gourm'Edhec est l'association culinaire de l'EDHEC Business School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ClientLayout>
          <TopBar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
