import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "TodoLine | Todos in one place!",
  description: "Manage your daily tasks with Techryzer Todos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950 w-full px-5 md:px-10">
        <nav className="text-center py-5 select-none border-b border-gray-800 text-4xl text-white font-bold uppercase">
          TodoLine
        </nav>
        {children}
      </body>
    </html>
  );
}
