import Link from "next/link"
import { notFound } from "next/navigation"
import { YUXINOU_CURRICULUM_UNITS } from "@/lib/yuxinou/curriculum-map"
import { YUXINOU_OFFICIAL_STEPS } from "@/lib/yuxinou/official-steps"

export function generateStaticParams() {
  return YUXINOU_OFFICIAL_STEPS.map((step) => ({ step: String(step.seq) }))
}

export default async function ExpertExperimentStepMirror({ params }: { params: Promise<{ step: string }> }) {
  const { step: rawStep } = await params
  const seq = Number(rawStep)
  const step = YUXINOU_OFFICIAL_STEPS.find((item) => item.seq === seq)
  if (!step) notFound()
  const previous = YUXINOU_OFFICIAL_STEPS.find((item) => item.seq === seq - 1)
  const next = YUXINOU_OFFICIAL_STEPS.find((item) => item.seq === seq + 1)
  const chapter = YUXINOU_CURRICULUM_UNITS.find((unit) => unit.steps.some((item) => item.number === seq))

  return <main className="mx-auto max-w-[1500px] px-4 py-6 lg:px-6">
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4">
      <p className="text-sm font-bold text-sky-950">专家只读步骤说明 · 不提交、不计分、不回传</p>
      <Link href="/expert-review/experiment" className="rounded-lg border border-sky-200 bg-white px-4 py-2 text-sm font-black text-sky-900 no-underline">返回26步目录</Link>
    </div>
    <div className="grid gap-5 lg:grid-cols-[230px_minmax(0,1fr)]">
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-32">
        <h2 className="px-3 py-2 font-black text-slate-950">实验步骤</h2>
        <nav aria-label="实验步骤导航" className="max-h-[68vh] space-y-1 overflow-auto pr-1">{YUXINOU_OFFICIAL_STEPS.map((item) => <Link key={item.seq} href={`/expert-review/experiment/${item.seq}`} aria-current={item.seq === seq ? "page" : undefined} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold no-underline ${item.seq === seq ? "bg-sky-100 text-sky-950" : "text-slate-600 hover:bg-slate-50"}`}><span className="w-6 shrink-0 text-center">{item.seq}</span><span className="truncate">{item.title}</span></Link>)}</nav>
      </aside>
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-black text-sky-700">第{seq}步 / 共26步 · {step.phase}</p>
        <h1 className="mt-2 text-3xl font-black text-slate-950">{step.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600"><span>建议{Math.round(step.expectTime / 60)}分钟</span><span>评价权重{step.maxScore}分</span>{chapter && <Link href={`/expert-review/textbook?chapter=${chapter.id}`} className="font-bold text-sky-800">对应教材：{chapter.title} →</Link>}</div>

        <section className="mt-6 rounded-2xl border border-sky-100 bg-sky-50 p-5"><h2 className="text-lg font-black text-sky-950">本步任务</h2><p className="mt-2 text-sm leading-8 text-slate-700">{step.objective}</p></section>
        <section className="mt-6"><h2 className="text-lg font-black text-slate-950">业务环节</h2><p className="mt-2 text-sm leading-8 text-slate-700">{step.detail}</p></section>
        <section className="mt-6 rounded-2xl border border-violet-100 bg-violet-50 p-5"><h2 className="text-lg font-black text-violet-950">AI教学设计</h2><p className="mt-2 text-sm leading-8 text-slate-700">{step.aiIntegration}</p></section>
        <section className="mt-6 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-slate-200 p-5"><h2 className="text-lg font-black text-slate-950">评价方式</h2><p className="mt-2 text-sm leading-7 text-slate-700">{step.assessmentModel}</p></div><div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><h2 className="text-lg font-black text-emerald-950">形成的证据</h2><ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">{step.evidence.map((item) => <li key={item}>• {item}</li>)}</ul></div></section>

        <div className="mt-7 flex flex-wrap justify-between gap-3">{previous ? <Link href={`/expert-review/experiment/${previous.seq}`} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-black text-slate-700 no-underline">← 上一步</Link> : <span />}{next ? <Link href={`/expert-review/experiment/${next.seq}`} className="rounded-xl bg-sky-700 px-4 py-3 text-sm font-black text-white no-underline">下一步 →</Link> : <Link href="/expert-review/evidence" className="rounded-xl bg-emerald-700 px-4 py-3 text-sm font-black text-white no-underline">查看教学证据 →</Link>}</div>
      </article>
    </div>
  </main>
}
