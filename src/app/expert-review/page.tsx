import Link from "next/link"
import evidence from "../../../content/review-v2/historical-two-cycle-evidence.json"

const PRIMARY_SECTIONS = [
  ["系统全景", "课程、教材、实验与评价如何连成一体", "/expert-review/system"],
  ["数字教材", "打开九章书本式教材，核验教学内容", "/expert-review/textbook"],
  ["26步实验", "沿出口业务流程查看任务与评价设计", "/expert-review/experiment"],
  ["双AI重构", "看千问、DeepSeek与学生裁决如何协同", "/expert-review/ai"],
] as const

const MORE_SECTIONS = [
  ["申报书导读", "项目定位与课程特色", "/expert-review/application"],
  ["项目视频", "项目简介与教学引导", "/expert-review/videos"],
  ["教学证据", "五轮使用与应用汇总", "/expert-review/evidence"],
  ["申报对标", "重庆申报要点与材料索引", "/expert-review/requirements"],
  ["治理保障", "权限、数据与AI使用边界", "/expert-review/governance"],
  ["网络与排队", "只读查看容量并检测本机网速", "/expert-review/environment"],
] as const

const REVIEW_JOURNEY = [
  ["项目概况", "/expert-review/system"], ["26步实验", "/expert-review/experiment"],
  ["书本教材", "/expert-review/textbook"], ["知识图谱", "/expert-review/system#knowledge"],
  ["双AI教学", "/expert-review/ai"], ["学习证据", "/expert-review/evidence"],
  ["教学成效", "/expert-review/evidence"], ["知识产权", "/expert-review/governance"],
  ["申报与运行", "/expert-review/requirements"],
] as const

const ROUTE_STOPS = ["重庆", "阿拉山口", "多斯特克", "布列斯特", "马拉舍维奇", "杜伊斯堡"] as const

export default function PublicExpertReviewHome() {
  return <main className="er-home">
    <section className="er-hero">
      <div className="er-container er-hero-grid">
        <div className="er-hero-copy">
          <p className="er-eyebrow">西南政法大学 · 虚拟仿真实验教学课程</p>
          <h1>渝新欧国际铁路联运<br />货物出口虚拟仿真实验</h1>
          <p className="er-hero-subtitle">专家评审通道 <span>免登录 · 只读</span></p>
          <p className="er-hero-intro">从项目全景进入，直接阅读九章数字教材与26步实验。资料按主题组织，可逐页核验。</p>
          <div className="er-hero-actions">
            <Link href="/expert-review/system" className="er-button er-button-primary">开始评审 <span aria-hidden="true">↗</span></Link>
            <Link href="/expert-review/textbook" className="er-button er-button-secondary">阅读数字教材</Link>
            <Link href="/expert-review/environment" className="er-button er-button-secondary">网速与排队</Link>
          </div>
          <p className="er-hero-caveat">这里展示公开只读资料，不操作真实账号、成绩或平台回传。</p>
        </div>
        <div className="er-hero-visual">
          <img src="/yuxinou/yuxinou-ai-course-hero-v3.png" alt="渝新欧国际铁路联运出口业务示意图" />
          <div className="er-visual-caption"><span>国际贸易</span><i aria-hidden="true" /><span>铁路联运</span><i aria-hidden="true" /><span>涉外法治</span></div>
        </div>
      </div>
      <div className="er-container er-metrics" aria-label="项目概况">
        <div><strong>9</strong><span>教材章节</span></div>
        <div><strong>26</strong><span>实验步骤</span></div>
        <div><strong>2</strong><span>教学AI</span></div>
        <div><strong>{evidence.offeringRounds.length}</strong><span>五轮使用</span></div>
      </div>
    </section>

    <section className="er-container er-review-content">
      <div className="er-section-heading"><div><p className="er-eyebrow">REVIEW PATH</p><h2>评审入口</h2></div><p>先看全景，再按需核验教材、实验和课程创新。</p></div>
      <div className="er-primary-grid">
        {PRIMARY_SECTIONS.map(([title, description, href], index) => <Link key={href} href={href} className="er-primary-card">
          <span className="er-card-number">0{index + 1}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <span className="er-card-arrow" aria-hidden="true">↗</span>
        </Link>)}
      </div>

      <section className="er-journey" aria-labelledby="er-journey-title">
        <div className="er-journey-intro"><p className="er-eyebrow">ONE REVIEW ENTRANCE</p><h2 id="er-journey-title">九项评审材料，一处查看</h2><p>原项目首页与旧评审首页的核心内容已归入本通道；按顺序查看，也可以直接进入关注的材料。</p></div>
        <ol className="er-journey-list">{REVIEW_JOURNEY.map(([title, href], index) => <li key={title}><Link href={href}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><span aria-hidden="true">↗</span></Link></li>)}</ol>
      </section>

      <section className="er-route" aria-label="渝新欧联运线路"><div><p className="er-eyebrow">RAIL FREIGHT ROUTE</p><h2>一笔出口业务贯穿全程</h2></div><ol>{ROUTE_STOPS.map((stop, index) => <li key={stop}><span>{String(index + 1).padStart(2, "0")}</span><strong>{stop}</strong></li>)}</ol></section>

      <div className="er-more-wrap">
        <div className="er-more-heading"><h2>申报材料与保障</h2><p>需要进一步核对时打开对应页面。</p></div>
        <div className="er-more-grid">
          {MORE_SECTIONS.map(([title, description, href]) => <Link key={href} href={href} className="er-more-link"><span><strong>{title}</strong><small>{description}</small></span><span aria-hidden="true">→</span></Link>)}
        </div>
      </div>

      <div className="er-management-note"><div><strong>校内管理工作台</strong><p>与专家评审共用入口；账号、教材管理和成绩等操作须登录授权。需要真实试用的专家按平台要求取得受限账号。</p></div><Link href="/expert-review/manage">管理与真实试用 <span aria-hidden="true">→</span></Link></div>
    </section>
  </main>
}
