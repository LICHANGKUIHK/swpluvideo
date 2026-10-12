import Link from "next/link"
import { YUXINOU_OFFICIAL_STEPS } from "@/lib/yuxinou/official-steps"

export default function ExpertExperimentMirror() {
  const totalMinutes = Math.round(YUXINOU_OFFICIAL_STEPS.reduce((sum, step) => sum + step.expectTime, 0) / 60)
  const totalScore = YUXINOU_OFFICIAL_STEPS.reduce((sum, step) => sum + step.maxScore, 0)
  return <main className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8">
    <header className="rounded-3xl border border-sky-100 bg-white p-7 shadow-sm">
      <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-black text-violet-800">专家只读 · 不计分</span>
      <h1 className="mt-4 text-4xl font-black text-slate-950">26步实验导览</h1>
      <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">按真实出口业务顺序查看任务目标、AI教学设计、评价方式与形成的证据。这是只读步骤说明，不是可提交的正式实验。</p>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <Link href="/expert-review/experiment/1" className="rounded-xl bg-sky-700 px-5 py-3 font-black text-white no-underline">从第1步开始 →</Link>
        <span className="text-sm text-slate-600">共26步 · {totalScore}分评价结构 · 约{totalMinutes}分钟</span>
      </div>
    </header>
    <section className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3" aria-label="26步实验目录">
      {YUXINOU_OFFICIAL_STEPS.map((step) => <Link href={`/expert-review/experiment/${step.seq}`} key={step.seq} className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm hover:border-sky-300 hover:shadow-md">
        <div className="flex items-center justify-between gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-sky-700 text-sm font-black text-white">{step.seq}</span><span className="text-xs font-bold text-slate-500">{step.phase} · {Math.round(step.expectTime / 60)}分钟</span></div>
        <h2 className="mt-4 text-lg font-black text-slate-950">{step.title}</h2>
        <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600">{step.objective}</p>
        <span className="mt-4 block text-sm font-black text-sky-800">查看本步说明 →</span>
      </Link>)}
    </section>
    <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-950">评审导览不保存操作、不产生正式成绩，也不会向重庆平台回传。需要真实操作时，请按平台要求使用审核后的账号。</p>
  </main>
}
