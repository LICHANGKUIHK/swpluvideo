export const metadata = { title: "管理与真实试用｜渝新欧专家评审" }

export default function ManagementPage() {
  return <main className="mx-auto max-w-[1200px] px-5 py-10">
    <section className="rounded-3xl border border-sky-200 bg-white p-7 shadow-sm">
      <p className="text-xs font-black tracking-[.18em] text-sky-700">AUTHORIZED ACCESS</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">校内管理与真实试用</h1>
      <p className="mt-4 text-base leading-8 text-slate-700">公开仓库只展示专家评审资料。账号登录、教学管理及保存实验记录在正式系统中完成，须使用授权账号。</p>
      <a href="https://sw.kmep.cn/expert-review/manage" className="mt-6 inline-block rounded-xl bg-sky-700 px-5 py-3 font-black text-white no-underline">打开正式系统 →</a>
    </section>
  </main>
}
