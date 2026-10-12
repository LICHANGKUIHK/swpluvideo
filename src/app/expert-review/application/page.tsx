import Link from "next/link"

const APPLICATION_SECTIONS = [
  ["1", "基本情况", "专业核心课、综合设计型虚拟仿真实验；5次开设、累计743名本校学生。"],
  ["2", "教学服务团队", "高校教师与行业人员协同，体现法贸融合、技术支持与产教融合。"],
  ["3", "实验描述", "围绕一笔9710汽车制动盘出口业务，组织9章教材与26步连续任务。"],
  ["4", "实验教学特色", "高阶非线性、法贸融合、双AI红队、证据链评价与开放共享。"],
  ["5", "在线支持与服务", "教材、视频、教案、题库、考试系统及教学和技术支持。"],
  ["6", "网络与安全要求", "浏览器跨平台运行、带宽自检、排队提示、移动端资源访问与安全治理。"],
  ["7", "技术架构与研发", "KMEP与SIM双站协同、Docker、PostgreSQL、Three.js、双AI与重庆平台接口。"],
  ["8", "五年持续建设", "按学期复盘、学年迭代，持续更新教材、AI智能体、红队题库、图谱和安全合规。"],
  ["9", "知识产权", "软件著作权、课程资源权属、政治与学术审查及第三方权益保护。"],
] as const

const APPLICATION_FIGURES = [
  "知识图谱", "人工智能辅助决策", "KMEP与SIM双站协同", "AI双引擎裁决机制", "26步实验流程",
  "多元过程评价体系", "高阶性·创新性·挑战度", "八大学科群融合", "教学周期PDCA闭环",
]

export default function ApplicationGuidePage() {
  return <main className="mx-auto max-w-[1450px] px-5 py-10 lg:px-8">
    <header className="rounded-3xl border border-sky-100 bg-white p-7 shadow-sm lg:p-9"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-sky-800">2026年重庆市一流本科课程申报书</span><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-800">虚拟仿真实验教学课程</span></div><h1 className="mt-4 text-4xl font-black text-slate-950">渝新欧项目申报书导读</h1><p className="mt-4 max-w-5xl text-base leading-8 text-slate-600">依据9月2日申报书整理公开核验要点，具体以学校正式提交版为准。本页不公开申报书中的个人邮箱、出生年月或签章原件；页脚项目联络方式由项目方另行公开。</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{[["0204","专业类代码"],["5次","已开设期次"],["743人","本校学生"],["580人","外校学生"],["360人","社会学习者"]].map(([value,label]) => <div key={label} className="rounded-xl border border-sky-100 bg-sky-50 p-4"><strong className="block text-2xl font-black text-sky-800">{value}</strong><span className="text-xs font-bold text-slate-600">{label}</span></div>)}</div></header>

    <section id="project-team" className="mt-7 rounded-3xl border border-sky-200 bg-white p-6 shadow-sm"><p className="text-xs font-black tracking-[.16em] text-sky-700">申报书基本信息 · 公开版</p><h2 className="mt-2 text-2xl font-black text-slate-950">项目负责人及教学团队</h2><p className="mt-3 text-base leading-8 text-slate-700">申报书载明的项目负责人为<strong>高昊</strong>；主要团队成员包括吴明娥、姜国强。团队围绕国际贸易、跨境电商、铁路联运、法律规则与数字化学习评价协同建设本实验。</p><p className="mt-2 text-sm leading-7 text-slate-600">本校累计开设5次：2024年5月72人、10月81人；2025年5月303人、10月82人；2026年5月205人，合计743人。该口径来自申报书，原始名单与成绩不在免登录区公开。</p></section>

    <section className="mt-7 grid gap-5 lg:grid-cols-[1.05fr_.95fr]"><article className="rounded-3xl border border-violet-200 bg-violet-50 p-6"><p className="text-xs font-black tracking-[.16em] text-violet-700">申报特色</p><h2 className="mt-2 text-2xl font-black text-violet-950">申报书中的双AI设计</h2><p className="mt-3 text-sm leading-8 text-violet-900">申报书以千问与DeepSeek作为双引擎任务型智能体骨干：千问侧重商务可行性、平台运营、询盘谈判与经营复盘；DeepSeek侧重监管适配、HS归类、报关单证、联运责任与合规风险。26步均可配置任务智能体和可辨识红队错误，学生必须作出采纳、部分采纳或不采纳裁决。</p><div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-sky-100 px-3 py-2 text-sm font-black text-sky-900">千问 Qwen · 商务导师</span><span className="rounded-full bg-violet-100 px-3 py-2 text-sm font-black text-violet-900">DeepSeek · 合规审查员</span><span className="rounded-full bg-white px-3 py-2 text-sm font-black text-slate-800">考试模式按步禁用AI</span></div><Link href="/expert-review/ai" className="mt-5 inline-block rounded-xl bg-violet-700 px-5 py-3 font-black text-white no-underline">查看双AI教学设计 →</Link></article><article className="rounded-3xl border border-sky-200 bg-sky-50 p-6"><p className="text-xs font-black tracking-[.16em] text-sky-700">平台依托</p><h2 className="mt-2 text-2xl font-black text-sky-950">平台与实验室依托</h2><p className="mt-3 text-sm leading-8 text-sky-900">项目依托“数字贸易与金融创新人才培养产教融合虚实一体化实践教学平台”（渝教高函〔2026〕39号）和重庆市高校重点实验室“区域金融安全数智化监测与法治化治理实验室”，形成法贸融合、数智赋能与产教协同的建设基础。</p><p className="mt-3 text-sm leading-8 text-sky-900">课程资源已通过重庆市高校虚拟仿真实验教学共享平台开放，并获北方工业大学、潍坊科技学院应用证明。</p></article></section>

    <section className="mt-7"><p className="text-xs font-black tracking-[.18em] text-sky-700">APPLICATION STRUCTURE</p><h2 className="mt-2 text-3xl font-black text-slate-950">申报书九个部分</h2><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{APPLICATION_SECTIONS.map(([no,title,desc]) => <article key={no} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="text-xs font-black text-sky-700">SECTION {no}</span><h3 className="mt-2 text-lg font-black text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p></article>)}</div></section>

    <section className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-slate-950">申报书重点图示主题</h2><p className="mt-2 text-sm leading-7 text-slate-600">以下为导读索引，正式图号和原图以申报书为准。</p><div className="mt-5 flex flex-wrap gap-2">{APPLICATION_FIGURES.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700">{item}</span>)}</div></section>

    <section className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[["实验描述","/expert-review/experiment"],["双AI重构","/expert-review/ai"],["教学与共享证据","/expert-review/evidence"],["重庆要求对标","/expert-review/requirements"]].map(([title,href]) => <Link key={href} href={href} className="rounded-2xl border border-sky-200 bg-white p-5 text-center font-black text-sky-900 no-underline shadow-sm hover:bg-sky-50">{title} →</Link>)}</section>

    <section className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-5"><h2 className="text-lg font-black text-amber-950">原文与证明材料</h2><p className="mt-2 text-sm leading-7 text-amber-900">申报书要点已在本页公开。项目方确认签章版及证明附件已完成，将由校内统一提供；原 Word 含个人联系方式、出生信息等内容，不放入免登录区。</p></section>
  </main>
}
