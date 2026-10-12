import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "西南政法大学渝新欧国际铁路联运货物出口虚拟仿真实验｜专家评审",
  description: "西南政法大学渝新欧国际铁路联运货物出口虚拟仿真实验项目公开评审资料",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-CN" data-theme="light"><body>{children}</body></html>
}
