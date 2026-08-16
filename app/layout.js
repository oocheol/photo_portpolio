import "./globals.css";

export const metadata = {
  title: "photoprotfolio — water",
  description:
    "photoprotfolio presents water, a visual study from a printed photo book.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
