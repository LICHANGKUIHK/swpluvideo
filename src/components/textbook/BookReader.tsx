"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import MarkdownWithMath from "./MarkdownWithMath"
import { buildBookPages, buildFixedPaperPages } from "@/lib/textbooks/book-pages"

type ChapterLink = { id: string; title: string; visibilityLocked?: boolean }
type Props = {
  source: string; title: string; chapterId: string; chapters: ChapterLink[]
  onChapter: (id: string) => void
  onProgress?: (percent: number) => void
  onNote?: () => void; onAI?: () => void
  paginatedOnly?: boolean
}

export default function BookReader({ source, title, chapterId, chapters, onChapter, onProgress, onNote, onAI, paginatedOnly = false }: Props) {
  const [pageLimit, setPageLimit] = useState(520)
  const pages = useMemo(() => paginatedOnly ? buildFixedPaperPages(source, pageLimit) : buildBookPages(source), [source, pageLimit, paginatedOnly])
  const [index, setIndex] = useState(0)
  const [spread, setSpread] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [notice, setNotice] = useState("")
  const root = useRef<HTMLDivElement>(null)
  const seen = useRef(new Set<number>())
  const step = spread ? 2 : 1
  const safeIndex = Math.max(0, Math.min(index, pages.length - 1))
  const position = pages.length ? Math.min(100, Math.round((safeIndex + Math.min(step, pages.length - safeIndex)) / pages.length * 100)) : 0
  const chapterIndex = chapters.findIndex(c => c.id === chapterId)
  const go = (n: number) => setIndex(Math.max(0, Math.min(pages.length - 1, n)))
  const toggleFullscreen = async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await root.current?.requestFullscreen() }
    catch { setNotice("当前浏览器不支持全屏，可继续在此阅读。") }
  }
  const printChapter = async () => {
    if (document.fullscreenElement) await document.exitFullscreen()
    window.setTimeout(() => window.print(), 50)
  }
  useEffect(() => { setIndex(0); seen.current.clear() }, [chapterId, source])
  useEffect(() => {
    if (!paginatedOnly) return
    const update = () => {
      const width = root.current?.clientWidth ?? window.innerWidth
      const doublePage = width >= 1280
      const paperWidth = doublePage ? (width - 120) / 2 : width - 95
      const paperHeight = document.fullscreenElement === root.current ? window.innerHeight - 260 : window.innerWidth <= 640 ? 420 : 560
      const estimate = Math.floor((paperWidth / 16) * (paperHeight / 31) * 0.9)
      const maximum = window.innerWidth <= 640 ? 260 : doublePage ? 570 : 900
      setSpread(doublePage)
      setPageLimit(Math.max(150, Math.min(maximum, estimate)))
    }
    update()
    const observer = new ResizeObserver(update)
    if (root.current) observer.observe(root.current)
    document.addEventListener("fullscreenchange", update)
    return () => { observer.disconnect(); document.removeEventListener("fullscreenchange", update) }
  }, [paginatedOnly])
  useEffect(() => {
    if (paginatedOnly) return
    const media = window.matchMedia("(min-width: 1280px)")
    const sync = () => setSpread(media.matches)
    sync(); media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [paginatedOnly])
  useEffect(() => {
    const sync = () => setFullscreen(document.fullscreenElement === root.current)
    document.addEventListener("fullscreenchange", sync)
    return () => document.removeEventListener("fullscreenchange", sync)
  }, [])
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || (e.target as HTMLElement)?.closest("input,textarea,select,[contenteditable=true]")) return
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault(); setIndex(n => Math.max(0, Math.min(pages.length - 1, n + (e.key === "ArrowRight" ? step : -step))))
      }
    }
    window.addEventListener("keydown", key)
    return () => window.removeEventListener("keydown", key)
  }, [pages.length, step])
  const markRead = (n: number) => {
    seen.current.add(n)
    onProgress?.(Math.round(seen.current.size / Math.max(1, pages.length) * 100))
  }
  useEffect(() => {
    if (!paginatedOnly) return
    const timer = window.setTimeout(() => {
      const overflow = [...(root.current?.querySelectorAll<HTMLElement>("[data-page-body]") ?? [])]
        .some((body) => body.scrollHeight > body.clientHeight + 4)
      if (overflow) setPageLimit((previous) => Math.max(90, Math.floor(previous * 0.78)))
    }, 120)
    return () => window.clearTimeout(timer)
  }, [paginatedOnly, pageLimit, safeIndex, spread, chapterId])
  useEffect(() => {
    const timer = setTimeout(() => {
      root.current?.querySelectorAll<HTMLElement>("[data-page-body]").forEach(el => {
        if (el.scrollHeight <= el.clientHeight + 16) markRead(Number(el.dataset.pageBody))
      })
    }, 2500)
    return () => clearTimeout(timer)
    // The parent callback only writes existing scroll-policy progress; a jump never credits unread pages.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeIndex, step, chapterId, source])

  return <div ref={root} className="review-book" data-testid="textbook-book-reader" data-layout={spread ? "spread" : "single"} data-paginated={paginatedOnly ? "true" : "false"} role="region" aria-label={`${title}书本阅读器`}>
    <div className="review-book-toolbar">
      <label>章节目录 <select aria-label="书本章节目录" value={chapterId} onChange={e => onChapter(e.target.value)}>
        {chapters.map(c => <option key={c.id} value={c.id}>{c.title}{c.visibilityLocked ? "（尚未开放）" : ""}</option>)}
      </select></label>
      <button disabled={chapterIndex <= 0} onClick={() => onChapter(chapters[chapterIndex - 1].id)}>上一章</button>
      <button disabled={chapterIndex < 0 || chapterIndex >= chapters.length - 1} onClick={() => onChapter(chapters[chapterIndex + 1].id)}>下一章</button>
      <span className="review-book-desktop-tools">
        {onNote && <button onClick={async () => { if (document.fullscreenElement) await document.exitFullscreen(); onNote() }}>章节笔记</button>}
        {onAI && <button onClick={async () => { if (document.fullscreenElement) await document.exitFullscreen(); onAI() }}>AI 学习助手</button>}
        <button onClick={toggleFullscreen}>{fullscreen ? "退出全屏" : "全屏阅读"}</button>
        <button onClick={printChapter}>打印 / PDF</button>
      </span>
      <details className="review-book-mobile-tools">
        <summary>阅读工具</summary>
        <div>
          {onNote && <button onClick={async () => { if (document.fullscreenElement) await document.exitFullscreen(); onNote() }}>章节笔记</button>}
          {onAI && <button onClick={async () => { if (document.fullscreenElement) await document.exitFullscreen(); onAI() }}>AI 学习助手</button>}
          <button onClick={toggleFullscreen}>{fullscreen ? "退出全屏" : "全屏阅读"}</button>
          <button onClick={printChapter}>打印 / PDF</button>
        </div>
      </details>
    </div>
    <div className="review-book-progress" aria-label={`本章阅读位置 ${position}%`}>
      <span style={{ width: `${position}%` }} />
    </div>
    <div className="review-book-reading-meta">
      <span>{spread ? "双页阅读" : "单页阅读"} · 固定浅色纸面{paginatedOnly ? " · 仅左右翻页" : ""}</span>
      <span>键盘 ← → 翻页</span>
    </div>
    {notice && <p role="status">{notice}</p>}
    <div className="review-book-spread">
      {pages.slice(safeIndex, safeIndex + step).map((page, offset) => <article className="review-book-page" data-testid="book-reader-page" key={`${chapterId}-${safeIndex + offset}`}>
        <header>{title}</header>
        <div className="review-book-body" data-page-body={safeIndex + offset} onScroll={e => {
          const el = e.currentTarget
          if (el.scrollTop + el.clientHeight >= el.scrollHeight - 16) markRead(safeIndex + offset)
        }}><MarkdownWithMath source={page} className="s-prose review-book-prose" /></div>
        <footer>第 {safeIndex + offset + 1} 页</footer>
      </article>)}
      {!pages.length && <p>本章暂无正文，请选择其他章节。</p>}
    </div>
    <div className="review-book-print-pages" aria-hidden="true">
      {pages.map((page, pageIndex) => <article className="review-book-print-page" key={`print-${chapterId}-${pageIndex}`}>
        <header>{title}</header>
        <MarkdownWithMath source={page} className="s-prose review-book-prose" />
        <footer>第 {pageIndex + 1} 页</footer>
      </article>)}
    </div>
    <form className="review-book-toolbar" onSubmit={e => {
      e.preventDefault()
      const page = new FormData(e.currentTarget).get("page")
      if (typeof page === "string" && /^\d+$/.test(page)) go(Number(page) - 1)
    }}>
      <button type="button" disabled={safeIndex === 0} onClick={() => go(safeIndex - step)}>上一页</button>
      <span aria-live="polite" data-testid="book-page-status">第 {pages.length ? safeIndex + 1 : 0}{spread && safeIndex + 1 < pages.length ? `–${safeIndex + 2}` : ""} / {pages.length} 页</span>
      <button type="button" disabled={safeIndex + step >= pages.length} onClick={() => go(safeIndex + step)}>下一页</button>
      <label>页码 <input key={safeIndex} name="page" aria-label="页码跳转" type="number" min="1" max={pages.length || 1} defaultValue={safeIndex + 1} required /></label>
      <button type="submit">跳转</button>
    </form>
  </div>
}
