import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Green Wang - AI 产品经理与 Vibe Coding Builder",
  description:
    "Green Wang 的个人主页，展示 AI 产品、浏览器插件、RPA 自动化、招聘 Agent、微信小程序和个人 IP 项目复盘。",
  keywords: ["AI产品经理", "Vibe Coding", "B端产品", "浏览器插件", "自动化工具", "个人主页"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
