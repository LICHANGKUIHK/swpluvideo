"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_ITEMS = [
  ["评审总览", "/expert-review"],
  ["系统全景", "/expert-review/system"],
  ["申报书", "/expert-review/application"],
  ["项目视频", "/expert-review/videos"],
  ["数字教材", "/expert-review/textbook"],
  ["26步实验", "/expert-review/experiment"],
  ["双AI重构", "/expert-review/ai"],
  ["教学证据", "/expert-review/evidence"],
  ["申报对标", "/expert-review/requirements"],
  ["治理保障", "/expert-review/governance"],
  ["环境检测", "/expert-review/environment"],
] as const

export default function ExpertReviewNav() {
  const pathname = usePathname()
  return <div className="er-nav-shell"><nav aria-label="专家评审导航" className="er-container er-nav">
    {NAV_ITEMS.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href || (href === "/expert-review/experiment" && pathname.startsWith(`${href}/`)) ? "page" : undefined} className="er-nav-link">{label}</Link>)}
    <Link href="/expert-review/manage" aria-current={pathname === "/expert-review/manage" ? "page" : undefined} className="er-nav-manage">管理登录 <span aria-hidden="true">↗</span></Link>
  </nav></div>
}
