import Link from "next/link"

const REQUIREMENTS = [
  ["教育数字化战略", "KMEP统一承载数字教材、实验、双AI、知识图谱、学习进度、过程证据与报告归档", "已显性体现", "/expert-review/system"],
  ["人工智能、知识图谱、虚拟仿真", "千问商务导师、DeepSeek合规复核、任务型智能体、知识图谱和26步实验形成闭环", "已显性体现", "/expert-review/ai"],
  ["系统重构课程体系", "9章教材、26步任务、八大学科方向、岗位能力和评价证据重构为同一任务链", "已显性体现", "/expert-review/ai"],
  ["课程、教材、教师能力一体化", "教材服务学生学习，课程地图服务任务组织，教师工作台与EduResearch服务复核和改进", "已显性体现", "/expert-review/ai"],
  ["专业核心、跨学科、产教融合、新形态数字课程", "融合电商、国贸、物流、海关、法律、财务、数据和AI，使用重庆中欧班列与汽配出口产业场景", "已显性体现", "/expert-review/ai"],
  ["高阶性、创新性、挑战度", "设置反事实论证、AI冲突裁决、字段级合规解释、异常处置、责任链和利润敏感性分析", "已显性体现", "/expert-review/experiment"],
  ["学生中心与复杂问题解决", "学生承担选择、核算、证据说明和责任判断；AI仅提供线索，教师保留最终裁量", "已显性体现", "/expert-review/experiment"],
  ["研究型、项目式、实践式学习", "以同一笔9710铁路联运出口业务贯穿26步，产出合同、单证、风险、清关和复盘材料", "已显性体现", "/expert-review/experiment"],
  ["师生互动、生生互动与因材施教", "申报书已写明任务追问、同伴互评、教师终评、知识图谱补强和EduResearch诊断；课堂原始记录以学校档案核验", "申报书已载明", "/expert-review/evidence"],
  ["多元评价、过程可回溯", "步骤事件、单证、AI裁决、同伴互评、章节自测、报告初评和教师终评进入证据链", "已显性体现", "/expert-review/evidence"],
  ["至少2个教学周期与改革成效", "申报书载明教学周期、开设次数、应用规模和持续改进机制；项目方确认分学期成绩等原始材料已完成，脱敏材料将另行提供", "项目方确认完成", "/expert-review/evidence"],
  ["重庆虚拟仿真共享平台数据对接", "申报书写明平台对接架构及登录、进度、成绩、报告接口；项目方确认正式联调和回执已完成，材料将另行提供", "项目方确认完成", "/expert-review/governance"],
  ["慕课西部行2.0与开放共享", "申报书写明课程资源开放、跨校应用及持续共享安排；具体推广和使用证明以正式材料核验", "申报书已载明", "/expert-review/application"],
  ["团队条件与近4年授课经历", "申报书写明团队构成、负责人及成员教学研究和授课情况；教务、师德师风等原始证明以学校材料核验", "申报书已载明", "/expert-review/application"],
  ["内容政治、学术、知识产权审查", "申报书列明内容治理及审查要求；项目方确认政治、学术和知识产权审查意见已完成，签章材料将另行提供", "项目方确认完成", "/expert-review/governance"],
  ["开放共享和持续建设不少于5年", "申报书第8部分载明五年开放服务计划、按学期复盘和按学年迭代安排", "申报书已载明", "/expert-review/application"],
] as const

const SUPPORT_PLATFORMS = [
  "数字贸易与金融创新人才培养产教融合虚实一体化实践教学平台",
  "重庆市高校重点实验室——区域金融安全数智化监测与法治化治理实验室",
] as const

function statusClass(status: string) {
  if (status === "已显性体现") return "bg-emerald-50 text-emerald-800 border-emerald-200"
  if (status === "项目方确认完成") return "bg-emerald-50 text-emerald-800 border-emerald-200"
  if (status === "申报书已载明") return "bg-sky-50 text-sky-900 border-sky-200"
  if (status.includes("待") || status.includes("需")) return "bg-amber-50 text-amber-900 border-amber-200"
  return "bg-sky-50 text-sky-900 border-sky-200"
}

export default function ChongqingRequirementsPage() {
  return <main className="mx-auto max-w-[1500px] px-5 py-10 lg:px-8">
    <header className="rounded-3xl border border-sky-100 bg-white p-7 shadow-sm lg:p-9"><div className="flex flex-wrap items-center gap-2"><p className="text-xs font-black tracking-[.18em] text-sky-700">CHONGQING 2026 CROSSWALK</p><span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-sky-800">渝教高函〔2026〕34号</span><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-black text-violet-800">西政校教发〔2026〕106号</span></div><h1 className="mt-3 text-4xl font-black text-slate-950">重庆市一流本科课程申报要求对标</h1><p className="mt-4 max-w-5xl text-base leading-8 text-slate-600">对照通知、申报书和可查看的系统页面，展示项目如何回应各项要求。申报书中的说明与签章附件、原始记录、平台回执属于不同核验层级，本页不以公开展示替代正式材料核验。</p></header>

    <section className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_.8fr]"><article className="rounded-2xl border border-violet-200 bg-violet-50 p-6"><p className="text-xs font-black tracking-[.16em] text-violet-700">CORE POSITIONING</p><h2 className="mt-2 text-2xl font-black text-violet-950">四重课程定位</h2><p className="mt-3 text-sm leading-7 text-violet-900">虚拟仿真实验教学课程、新形态数字化课程、跨学科融合课程、产教融合协同育人课程。以重庆内陆开放、中欧班列、跨境电商B2B和涉外法治为主线。</p></article><article className="rounded-2xl border border-sky-200 bg-sky-50 p-6"><p className="text-xs font-black tracking-[.16em] text-sky-700">PLATFORM SUPPORT</p><h2 className="mt-2 text-2xl font-black text-sky-950">两项平台依托</h2><ul className="mt-3 space-y-2">{SUPPORT_PLATFORMS.map(item => <li key={item} className="text-sm leading-7 text-sky-900">• {item}</li>)}</ul><p className="mt-3 text-xs leading-6 text-sky-800">平台依托见申报书导读；批复和实验室证明以正式材料核验。</p></article></section>

    <section className="mt-7"><div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-black tracking-[.18em] text-sky-700">申报要求对照</p><h2 className="mt-2 text-3xl font-black text-slate-950">要求—落实—依据</h2></div><p className="max-w-xl text-sm leading-7 text-slate-600">“已显性体现”表示系统页面可查看；“申报书已载明”表示申报文字已有说明；“项目方确认完成”表示项目方确认材料已完成，正式材料由校内另行提供。</p></div><div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="hidden grid-cols-[1fr_2fr_auto_auto] gap-4 border-b border-slate-200 bg-sky-50 px-5 py-3 text-xs font-black text-sky-950 lg:grid"><span>申报要求</span><span>项目落实与依据</span><span>依据层级</span><span>入口</span></div>{REQUIREMENTS.map(([requirement,evidence,status,href]) => <article key={requirement} className="grid gap-3 border-t border-slate-100 p-5 first:border-t-0 lg:grid-cols-[1fr_2fr_auto_auto] lg:items-center lg:gap-4"><h3 className="font-black text-slate-950">{requirement}</h3><p className="text-sm leading-7 text-slate-600">{evidence}</p><span className={`w-fit rounded-full border px-3 py-1 text-xs font-black ${statusClass(status)}`}>{status}</span><Link href={href} className="text-sm font-black text-sky-800 no-underline">查看 →</Link></article>)}</div></section>

    <section className="mt-7 rounded-3xl border border-sky-200 bg-sky-50 p-6"><h2 className="text-2xl font-black text-sky-950">正式材料说明</h2><p className="mt-2 text-sm leading-7 text-sky-900">下列主题已在申报书中说明；项目方确认相关材料已完成，将由校内统一提供正式材料。涉及个人信息、签章或第三方回执的原件不在免登录页面公开。</p><ol className="mt-4 grid gap-3 text-sm leading-7 text-sky-900 md:grid-cols-2"><li>1. 教学周期、课程班、成绩、问卷与持续改进记录</li><li>2. 重庆共享平台正式联调及数据回传回执</li><li>3. 团队授课、师德师风及负责人资格证明</li><li>4. 课程内容政治审查、学术性评价和知识产权审查意见</li><li>5. 五年持续建设、开放共享及两项依托平台证明</li></ol></section>
  </main>
}
