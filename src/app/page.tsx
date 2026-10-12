import Link from "next/link"

export default function Home() {
  return <main className="grid min-h-screen place-items-center bg-[#f8f7f4] p-6">
    <div className="max-w-2xl rounded-3xl border border-[#ead7d1] bg-white p-8 shadow-sm">
      <p className="text-sm font-bold tracking-widest text-[#8f1d2b]">西南政法大学 · 专家评审</p>
      <h1 className="mt-4 text-3xl font-black text-slate-950">渝新欧国际铁路联运货物出口虚拟仿真实验</h1>
      <p className="mt-4 leading-8 text-slate-600">公开、只读的项目评审资料。</p>
      <Link href="/expert-review" className="mt-6 inline-block rounded-lg bg-[#8f1d2b] px-5 py-3 font-bold text-white no-underline">进入专家评审 →</Link>
    </div>
  </main>
}
