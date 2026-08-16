import "./globals.css";

export const metadata = {
  title: "photo_portpolio — visual stories",
  description:
    "A fluid photography portfolio carousel for visual stories, portraits and quiet landscapes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
