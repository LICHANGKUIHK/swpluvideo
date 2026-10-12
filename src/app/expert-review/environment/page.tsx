export const metadata = { title: "网络与排队｜渝新欧专家评审" }

export default function EnvironmentPage() {
  return <main className="mx-auto max-w-[1200px] px-5 py-10">
    <section className="rounded-3xl border border-sky-200 bg-white p-7 shadow-sm">
      <p className="text-xs font-black tracking-[.18em] text-sky-700">LIVE SERVICE</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">网络与排队状态</h1>
      <p className="mt-4 text-base leading-8 text-slate-700">排队人数和实际网速须由运行中的教学系统实时测量。请在项目正式页面查看实时状态。</p>
      <a href="https://sw.kmep.cn/expert-review/environment" className="mt-6 inline-block rounded-xl bg-sky-700 px-5 py-3 font-black text-white no-underline">打开实时检测 →</a>
    </section>
  </main>
}
