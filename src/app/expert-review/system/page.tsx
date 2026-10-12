import Link from "next/link"

const MENU = [
  ["本页总览", "#overview"],
  ["数字教材", "/expert-review/textbook"],
  ["26步实验", "/expert-review/experiment"],
  ["双AI教学", "/expert-review/ai"],
  ["教学证据", "/expert-review/evidence"],
  ["申报对标", "/expert-review/requirements"],
] as const

const MODULES = [
  ["申报书导读", "按正式申报书九个部分核验项目定位、教学特色、技术架构、持续建设与知识产权", "/expert-review/application", "正式材料"],
  ["课程建设", "课程目标、九章内容、26步任务和评价指标一体化组织", "/expert-review/experiment", "9章 / 26步"],
  ["数字教材", "书本模式、章节导航、任务映射、先修关系和教师预览", "/expert-review/textbook", "九章全文"],
  ["虚拟仿真", "询盘、合同、备货、报关、铁路联运、结算与归档", "/expert-review/experiment", "100分评价"],
  ["考核评价", "操作、单证、AI裁决、实验报告和教师终评组成证据链", "/expert-review/evidence", "规则说明"],
  ["学情分析", "以脱敏汇总展示教学周期、覆盖专业和应用规模", "/expert-review/evidence", "只读快照"],
  ["双AI教学", "千问商务导师与DeepSeek合规复核协同，学生裁决、教师终评", "/expert-review/ai", "双模型骨干"],
  ["知识图谱", "贯通任务、单证、知识和能力目标，支持评审理解", "/expert-review/system#knowledge", "结构导览"],
  ["重庆申报对标", "逐项对应AI、知识图谱、虚拟仿真、课程重构与过程评价要求", "/expert-review/requirements", "证据矩阵"],
  ["账号与权限", "校内人员登录后管理账号、角色和访问边界；专家仅查看功能说明", "/expert-review/manage#accounts", "登录后可用"],
  ["治理保障", "材料脱敏、最小权限、知识产权、备份与回滚", "/expert-review/governance", "安全隔离"],
] as const

export default function ExpertSystemMirror() {
  return <main className="mx-auto grid max-w-[1500px] gap-5 px-4 py-6 lg:grid-cols-[230px_1fr] lg:px-6">
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-32"><div className="rounded-xl border border-sky-100 bg-sky-50 px-4 py-4"><span className="text-[11px] font-black tracking-[.16em] text-sky-700">专家只读</span><h2 className="mt-1 text-lg font-black text-slate-950">评审路线</h2><p className="mt-2 text-xs leading-5 text-slate-600">按需打开对应页面核验公开资料。</p></div><nav className="mt-3 space-y-1">{MENU.map(([label,href],index) => <Link key={href} href={href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold no-underline ${index === 0 ? "bg-sky-50 text-sky-800" : "text-slate-600 hover:bg-slate-50"}`}><span className="grid h-6 w-6 place-items-center rounded-md bg-slate-100 text-[10px] text-slate-500">{String(index+1).padStart(2,"0")}</span>{label}</Link>)}</nav><Link href="/expert-review/manage" className="mt-4 block rounded-lg border border-sky-200 bg-white px-3 py-2 text-center text-xs font-black text-sky-900 no-underline">校内管理登录 →</Link></aside>
    <div className="space-y-5">
      <section id="overview" className="rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-6"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-black tracking-[.18em] text-sky-700">项目总览</p><h1 className="mt-2 text-3xl font-black text-slate-950">课程与后台能力全景</h1><p className="mt-2 text-sm leading-7 text-slate-600">这里是供专家了解功能与证据的只读导览，不连接真实用户管理、成绩写入或平台回传。</p></div><span className="w-fit rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-800">免登录 · 只读</span></div></section>
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{[["9", "教材章节", "课程资源"], ["26", "实验步骤", "业务流程"], ["100", "评价总分", "考核结构"], ["2", "教学周期", "脱敏汇总"]].map(([value,label,note]) => <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="text-xs font-bold text-slate-500">{note}</span><strong className="mt-2 block text-3xl font-black text-sky-800">{value}</strong><span className="text-sm font-bold text-slate-700">{label}</span></article>)}</section>
      <section id="modules" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-end justify-between gap-4"><div><p className="text-xs font-black tracking-[.16em] text-sky-700">PLATFORM MODULES</p><h2 className="mt-2 text-2xl font-black text-slate-950">后台功能模块</h2></div><span className="text-xs text-slate-500">点击进入对应只读证据页</span></div><div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">{MODULES.map(([title,desc,href,badge]) => <Link key={title} href={href} className="rounded-xl border border-slate-200 bg-slate-50 p-4 no-underline hover:border-sky-300 hover:bg-sky-50"><div className="flex items-start justify-between gap-2"><h3 className="font-black text-slate-900">{title}</h3><span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-sky-800">{badge}</span></div><p className="mt-3 text-xs leading-6 text-slate-600">{desc}</p><strong className="mt-3 block text-xs text-sky-800">查看模块 →</strong></Link>)}</div></section>
      <section id="knowledge" className="grid gap-4 lg:grid-cols-[1.05fr_.95fr]"><article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-black tracking-[.16em] text-sky-700">知识图谱结构</p><h2 className="mt-2 text-2xl font-black text-slate-950">任务—单证—知识—能力</h2><div className="mt-5 grid grid-cols-2 gap-3">{[["业务任务","市场、合同、报关、运输、结算"],["单证数据","报价、发票、箱单、报关单、运单"],["课程知识","国际贸易、海关、联运、法律、数据"],["能力目标","决策、协同、合规、处置、复盘"]].map(([title,text],index)=><div key={title} className="rounded-xl border border-sky-100 bg-sky-50 p-4"><span className="text-xs font-black text-sky-700">0{index+1}</span><h3 className="mt-2 font-black text-slate-900">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{text}</p></div>)}</div></article><article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-black tracking-[.16em] text-emerald-700">资料边界</p><h2 className="mt-2 text-2xl font-black text-slate-950">专家可见边界</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">{["可看：课程结构、教材正文、实验设计、评价规则", "可看：脱敏汇总和证据来源说明", "不可看：真实学生姓名、联系方式、个人成绩", "不可操作：用户、材料、成绩、配置和平台回传"].map(item=><li key={item} className="rounded-lg bg-emerald-50 px-4 py-3">✓ {item}</li>)}</ul></article></section>
    </div>
  </main>
}
