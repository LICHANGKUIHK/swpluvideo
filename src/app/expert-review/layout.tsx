import Link from "next/link"
import ExpertReviewNav from "@/components/expert-review/ExpertReviewNav"
import "./expert-review.css"

export const metadata = {
  title: "专家评审中心｜渝新欧虚拟仿真实验",
  robots: { index: false, follow: false, noarchive: true },
}

export default function ExpertReviewLayout({ children }: { children: React.ReactNode }) {
  return <div id="expert-review-shell" className="expert-review-shell min-h-screen text-slate-800">
    <header className="er-header">
      <div className="er-container er-header-main">
        <Link href="/expert-review" className="er-brand" aria-label="西南政法大学渝新欧专家评审首页">
          <img src="/yuxinou/swupl-wordmark-official.png" alt="西南政法大学校徽与手写校名" />
          <span className="er-brand-project">渝新欧国际铁路联运<br />货物出口虚拟仿真实验</span>
        </Link>
        <div className="er-header-status"><span aria-hidden="true" />专家评审通道 <small>公开资料 · 免登录</small></div>
      </div>
      <ExpertReviewNav />
    </header>
    {children}
    <footer className="er-footer">
      <div className="er-container">
        <div className="er-footer-project">
          <span>西南政法大学 · 渝新欧国际铁路联运货物出口虚拟仿真实验项目</span>
        </div>
        <div className="er-footer-support">
          <a href="tel:15213225020">项目负责人：高昊｜电话：15213225020</a>
          <a href="tel:13718447297">技术支持电话：13718447297</a>
          <span>技术支持微信：wtobook</span>
        </div>
        <small className="er-footer-icp">
          技术平台备案：<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备2021134170号-7</a>
        </small>
      </div>
    </footer>
  </div>
}
