
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Budget & Forecast",
  description: "Actual vs forecast vs budget for project resourcing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
