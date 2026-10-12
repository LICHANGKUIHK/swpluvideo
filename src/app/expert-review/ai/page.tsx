import Link from "next/link"
import {
  YUXINOU_TEACHER_AI_CAPABILITY_DIMENSIONS,
  YUXINOU_TEACHER_CLASSROOM_FLOW,
  YUXINOU_TEACHER_AI_GUARDRAILS,
} from "@/lib/yuxinou/teacher-ai-capability"
import { YUXINOU_TEACHING_PHASES } from "@/lib/yuxinou/teaching-process-blueprint"

const AI_MODELS = [
  {
    name: "通义千问 Qwen",
    role: "商务导师",
    color: "sky",
    focus: "商务可行性、平台运营、询盘报价、谈判策略、装箱订舱、结算复盘与报告表达",
    scenarios: ["商品上架预审", "B2B询盘与谈判", "流程导学", "运输和结算建议", "报告表达优化"],
    evidence: "建议内容、学生采纳/部分采纳/不采纳选择及理由进入过程证据链。",
  },
  {
    name: "DeepSeek",
    role: "合规审查员",
    color: "violet",
    focus: "9710监管适配、HS归类、报关要素、出口管制、欧盟准入、单证一致性与联运责任",
    scenarios: ["HS编码复核", "报关单证预审", "风险矩阵解释", "SMGS/CIM责任审查", "教师复核线索"],
    evidence: "风险建议、错误识别、学生反驳依据及教师复核重点形成可回溯记录。",
  },
] as const

const DISCIPLINES = ["电子商务", "国际贸易", "国际物流", "海关合规", "涉外法律", "财务核算", "数据治理", "人工智能素养"]

export default function PublicAiReconstructionPage() {
  return <main className="mx-auto max-w-[1450px] px-5 py-10 lg:px-8">
    <header className="rounded-3xl border border-violet-100 bg-gradient-to-br from-white via-violet-50 to-sky-50 p-7 shadow-sm lg:p-10">
      <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-black tracking-[.16em] text-violet-900">课程教学双AI</span><span className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-bold text-sky-900">重庆市2026申报重点</span></div>
      <h1 className="mt-4 text-4xl font-black text-slate-950">双AI驱动的课程体系重构</h1>
      <p className="mt-4 max-w-5xl text-base leading-8 text-slate-700">千问侧重商务建议，DeepSeek侧重合规复核；学生对建议作出证据化裁决，教师保留最终评价权。九章教材、26步实验、知识图谱和过程评价因此连成一条教学任务链。</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-4">{[["2","教学AI模型"],["1+26","任务智能体"],["8","学科方向"],["6","教学阶段"]].map(([value,label]) => <div key={label} className="rounded-xl border border-violet-100 bg-white/80 p-4"><strong className="text-3xl font-black text-violet-800">{value}</strong><span className="ml-2 text-sm text-slate-600">{label}</span></div>)}</div>
    </header>

    <section className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-5 text-sm leading-7 text-sky-950"><strong>关于 AI：</strong>本页介绍学生实验中的千问与 DeepSeek 教学设计。公开代码镜像只展示教学设计，不调用在线模型或学生数据。</section>

    <section className="mt-7"><div><p className="text-xs font-black tracking-[.18em] text-violet-700">TWO AI BACKBONES</p><h2 className="mt-2 text-3xl font-black text-slate-950">两个AI明确分工、交叉质询</h2><p className="mt-2 max-w-4xl text-sm leading-7 text-slate-600">两种建议可以发生冲突，学生不能照单全收，必须基于业务证据与规则依据作出最终裁决。</p></div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">{AI_MODELS.map((model,index) => <article key={model.name} className={`rounded-3xl border bg-white p-6 shadow-sm ${index === 0 ? "border-sky-200" : "border-violet-200"}`}><div className="flex items-start justify-between gap-4"><div><p className={`text-xs font-black tracking-[.16em] ${index === 0 ? "text-sky-700" : "text-violet-700"}`}>AI {index+1}</p><h3 className="mt-2 text-2xl font-black text-slate-950">{model.name}</h3></div><span className={`rounded-full px-3 py-1 text-sm font-black ${index === 0 ? "bg-sky-100 text-sky-900" : "bg-violet-100 text-violet-900"}`}>{model.role}</span></div><p className="mt-4 text-sm leading-7 text-slate-700">{model.focus}</p><ul className="mt-4 grid gap-2 sm:grid-cols-2">{model.scenarios.map(item => <li key={item} className="rounded-lg bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">{item}</li>)}</ul><p className="mt-4 border-l-2 border-emerald-500 pl-4 text-sm leading-7 text-slate-600"><strong className="text-emerald-800">证据：</strong>{model.evidence}</p></article>)}</div>
    </section>

    <section className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-black tracking-[.18em] text-sky-700">CURRICULUM RECONSTRUCTION</p><h2 className="mt-2 text-3xl font-black text-slate-950">AI重构的是课程关系，不是替代学科</h2><p className="mt-3 max-w-5xl text-sm leading-8 text-slate-700">以一笔渝新欧汽车零部件出口业务为主线，将八个学科方向放入同一复杂问题场景。知识不再按课程孤立讲授，而是围绕“决策—操作—审查—证据—复盘”被调用和评价。</p><div className="mt-5 flex flex-wrap gap-2">{DISCIPLINES.map((item,index) => <span key={item} className={`rounded-full px-4 py-2 text-sm font-black ${index % 2 === 0 ? "bg-sky-50 text-sky-900" : "bg-violet-50 text-violet-900"}`}>{item}</span>)}</div><div className="mt-6 grid gap-3 md:grid-cols-3">{YUXINOU_TEACHING_PHASES.map((phase,index) => <article key={phase.key} className="rounded-2xl border border-slate-200 p-4"><span className="text-xs font-black text-sky-700">{String(index+1).padStart(2,"0")}</span><h3 className="mt-2 font-black text-slate-950">{phase.title}</h3><p className="mt-2 text-xs leading-6 text-slate-600">{phase.interactionMode}</p></article>)}</div></section>

    <section className="mt-7"><p className="text-xs font-black tracking-[.18em] text-sky-700">TEACHER AI CAPABILITY</p><h2 className="mt-2 text-3xl font-black text-slate-950">课程、教材、教师教学能力一体化</h2><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{YUXINOU_TEACHER_AI_CAPABILITY_DIMENSIONS.map((item,index) => <article key={item.key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="text-xs font-black text-violet-700">能力 {index+1}</span><h3 className="mt-2 text-lg font-black text-slate-950">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.capability}</p><p className="mt-3 rounded-xl bg-sky-50 p-3 text-xs leading-6 text-sky-900">申报价值：{item.applicationValue}</p></article>)}</div></section>

    <section className="mt-7 grid gap-5 lg:grid-cols-[1.2fr_.8fr]"><article className="rounded-3xl border border-slate-200 bg-white p-6"><h2 className="text-2xl font-black text-slate-950">教师教学闭环</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{YUXINOU_TEACHER_CLASSROOM_FLOW.map(item => <div key={item.phase} className="rounded-xl bg-slate-50 p-4"><span className="text-xs font-black text-sky-700">{item.phase}</span><h3 className="mt-1 font-black text-slate-900">{item.title}</h3><p className="mt-2 text-xs leading-6 text-slate-600">{item.actions.join(" · ")}</p></div>)}</div></article><article className="rounded-3xl border border-amber-200 bg-amber-50 p-6"><h2 className="text-2xl font-black text-amber-950">AI治理边界</h2><ul className="mt-4 space-y-3">{YUXINOU_TEACHER_AI_GUARDRAILS.map(item => <li key={item} className="text-sm leading-7 text-amber-900">• {item}</li>)}</ul></article></section>

    <div className="mt-7 flex flex-wrap gap-3"><Link href="/expert-review/experiment" className="rounded-xl bg-sky-700 px-5 py-3 font-black text-white no-underline">查看26步实验镜像 →</Link><Link href="/expert-review/requirements" className="rounded-xl border border-sky-200 bg-white px-5 py-3 font-black text-sky-900 no-underline">查看重庆申报对标</Link></div>
  </main>
}
