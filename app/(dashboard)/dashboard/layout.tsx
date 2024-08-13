import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is the dashboard page",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
