"use client"

import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import "katex/dist/katex.min.css"

type Props = {
  source: string
  className?: string
  components?: Partial<Components>
}

/** Markdown + LaTeX（$…$ / $$…$$），与 react-markdown v10 兼容 */
export default function MarkdownWithMath({ source, className, components }: Props) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={components}
      >
        {source}
      </ReactMarkdown>
    </div>
  )
}
