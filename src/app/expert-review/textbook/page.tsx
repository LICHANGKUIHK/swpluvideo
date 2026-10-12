import fs from "node:fs"
import path from "node:path"
import ExpertTextbookReader, { type ExpertTextbookChapter } from "@/components/expert-review/ExpertTextbookReader"
import { YUXINOU_CURRICULUM_UNITS } from "@/lib/yuxinou/curriculum-map"

const CHAPTER_FILES = [
  "01-guide-final1.0.md", "02-setup-final1.0.md", "03-compliance-final1.0.md",
  "04-trade-final1.0.md", "05-customs-final1.0.md", "06-railway-final1.0.md",
  "07-gauge-final1.0.md", "08-docs-clearance-final1.0.md", "09-closing-final1.0.md",
] as const

function readExpertTextbook(): ExpertTextbookChapter[] {
  const root = path.join(process.cwd(), "content", "textbook_final")
  return YUXINOU_CURRICULUM_UNITS.map((unit, index) => ({
    id: unit.id,
    title: unit.title,
    source: fs.readFileSync(path.join(root, CHAPTER_FILES[index]), "utf8"),
    stepLabel: `${unit.steps.length}个实验步骤`,
    stepNumbers: unit.steps.map((step) => step.number),
    studentTask: unit.studentTask,
    evidence: unit.evidence,
  }))
}

export default function ExpertTextbookMirror() {
  const chapters = readExpertTextbook()
  return <main className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8"><header className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-7"><p className="text-xs font-black tracking-[.18em] text-sky-700">DIGITAL TEXTBOOK · READ ONLY</p><h1 className="mt-3 text-4xl font-black text-slate-950">书本式数字教材</h1><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">九章教材围绕同一票制动盘出口德国业务展开，与26步实验逐项对应。专家无需登录即可打开全部正文，核验章节结构、任务映射、AI使用边界和评价证据。</p></header><ExpertTextbookReader chapters={chapters} /><p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-950"><strong>评审说明：</strong>本页为公开只读镜像，不记录阅读进度和笔记；正式学生教材中的章节权限、进度、自测和互动功能仍在登录后使用。</p></main>
}
