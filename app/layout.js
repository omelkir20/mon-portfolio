import './globals.css';

export const metadata = { title: "Omelkhir Rebei - Portfolio" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}