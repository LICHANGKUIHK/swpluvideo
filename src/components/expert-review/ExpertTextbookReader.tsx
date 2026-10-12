"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import BookReader from "@/components/textbook/BookReader"

export type ExpertTextbookChapter = {
  id: string
  title: string
  source: string
  stepLabel: string
  stepNumbers: number[]
  studentTask: string
  evidence: string[]
}

export default function ExpertTextbookReader({ chapters }: { chapters: ExpertTextbookChapter[] }) {
  const [chapterId, setChapterId] = useState(chapters[0]?.id ?? "")
  const active = chapters.find((chapter) => chapter.id === chapterId) ?? chapters[0]

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("chapter")
    if (chapters.some((chapter) => chapter.id === requested)) setChapterId(requested!)
  }, [chapters])

  function changeChapter(id: string) {
    setChapterId(id)
    const url = new URL(window.location.href)
    url.searchParams.set("chapter", id)
    window.history.replaceState(window.history.state, "", url)
  }

  if (!active) {
    return <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">教材正文尚未生成。</p>
  }

  return (
    <>
      <section className="mt-7 rounded-3xl border border-sky-100 bg-white p-4 shadow-lg shadow-sky-100/60 sm:p-6">
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-black tracking-[.18em] text-sky-700">FULL TEXT READER</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">九章教材全文阅读</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">选择章节后可翻页、跳页、全屏阅读或打印为 PDF；专家只读，不记录进度。</p>
          </div>
          <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-sm font-black text-emerald-800">正文已装载 · {chapters.length}章</span>
        </div>
        <BookReader
          source={active.source}
          title={active.title}
          chapterId={active.id}
          chapters={chapters.map(({ id, title }) => ({ id, title }))}
          onChapter={changeChapter}
          paginatedOnly
        />
        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-sky-100 pt-4 text-sm">
          <strong className="mr-1 text-slate-900">本章对应实验</strong>
          {active.stepNumbers.map((number) => <Link key={number} href={`/expert-review/experiment/${number}`} className="rounded-full bg-sky-50 px-3 py-1 font-bold text-sky-800 no-underline hover:bg-sky-100">第{number}步 →</Link>)}
        </div>
      </section>

      <section className="mt-7 grid gap-4 lg:grid-cols-3">
        {chapters.map((chapter, index) => {
          const selected = chapter.id === active.id
          return (
            <article key={chapter.id} className={`rounded-2xl border bg-white p-5 shadow-sm ${selected ? "border-sky-400 ring-2 ring-sky-100" : "border-slate-200"}`}>
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sm font-black text-sky-800">{String(index + 1).padStart(2, "0")}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{chapter.stepLabel}</span>
              </div>
              <h3 className="mt-4 text-lg font-black text-slate-950">{chapter.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600"><strong>学生任务：</strong>{chapter.studentTask}</p>
              <div className="mt-3 rounded-xl bg-emerald-50 p-4">
                <p className="text-xs font-black text-emerald-800">形成证据</p>
                <p className="mt-2 text-xs leading-6 text-slate-700">{chapter.evidence.slice(0, 4).join("、")}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  changeChapter(chapter.id)
                  document.querySelector("[data-testid='textbook-book-reader']")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
                className={`mt-4 w-full rounded-xl px-4 py-3 text-sm font-black ${selected ? "bg-emerald-100 text-emerald-900" : "bg-sky-700 text-white hover:bg-sky-800"}`}
              >
                {selected ? "正在阅读" : "打开本章 →"}
              </button>
            </article>
          )
        })}
      </section>
    </>
  )
}
