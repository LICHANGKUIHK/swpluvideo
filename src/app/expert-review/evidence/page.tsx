import evidence from "../../../../content/review-v2/historical-two-cycle-evidence.json"

const assessmentItems = [
  ["操作成绩", "关键步骤、单证字段与业务决策"],
  ["实验报告", "完整业务分析、风险复盘和经营结果"],
  ["预习成绩", "教材阅读、自测和知识准备"],
  ["教师评价", "依据过程证据进行最终复核"],
] as const

export default function ExpertEvidenceMirror() {
  const metrics = [
    [String(evidence.offeringRounds.length), "五轮使用"],
    [String(evidence.onCampusServed), "本校累计服务"],
    [String(evidence.externalServed), "外校累计服务"],
    [String(evidence.socialLearners), "社会学习者"],
    [String(evidence.majorCount), "覆盖专业"],
  ] as const

  return (
    <main className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8">
      <header className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-7">
        <p className="text-xs font-black tracking-[.18em] text-sky-700">TEACHING EVIDENCE · SANITIZED SNAPSHOT</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">教学应用与评价证据</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
          五轮使用的时间与人数按正式申报书展示。部分成绩表仅供校内核对，本页不公开学生名单或个人成绩。
        </p>
      </header>

      <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map(([value, label]) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <strong className="block text-3xl font-black text-sky-800">{value}</strong>
            <span className="mt-1 block text-sm font-bold text-slate-700">{label}</span>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black text-slate-950">全过程评价结构</h2>
          <div className="mt-5 space-y-3">
            {assessmentItems.map(([title, description], index) => (
              <div key={title} className="flex gap-3 rounded-xl bg-slate-50 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-700 text-xs font-black text-white">{index + 1}</span>
                <div><h3 className="font-black text-slate-900">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{description}</p></div>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black text-slate-950">五轮使用</h2>
          <div className="mt-5 space-y-3">
            {evidence.offeringRounds.map((round, index) => (
              <div key={round.id} className="flex items-center justify-between gap-3 rounded-xl border border-sky-100 bg-sky-50 p-4">
                <div><span className="text-xs font-bold text-sky-700">第{index + 1}轮</span><h3 className="mt-1 font-black text-sky-950">{round.label}</h3></div>
                <strong className="text-xl text-sky-900">{round.students}人</strong>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-600">五轮合计{evidence.onCampusServed}人。覆盖专业：{evidence.majors.join("、")}。</p>
        </article>
      </section>

      <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-black text-amber-950">证据使用边界</h2>
        <p className="mt-2 text-sm leading-7 text-amber-900">
          五轮使用数据来自{evidence.sourceLabel}。申报书另载教学周期{evidence.teachingCycleCount}个，两项指标分别展示，不将部分成绩表推算为全部人数；本页不公开个人数据。
        </p>
      </section>
    </main>
  )
}
