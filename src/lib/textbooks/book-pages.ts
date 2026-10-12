/** Adapted from D:/kmep book reader: preserve Markdown blocks, without new data models. */
export function buildBookPages(source: string, limit = 1600, breakOnHeading = true): string[] {
  const pages: string[] = []
  let page: string[] = []
  let size = 0
  let fence = false
  let block: string[] = []
  const blocks: string[] = []
  for (const line of source.trim().split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) fence = !fence
    if (!fence && !line.trim()) {
      if (block.length) blocks.push(block.join("\n"))
      block = []
    } else block.push(line)
  }
  if (block.length) blocks.push(block.join("\n"))
  for (const item of blocks) {
    if (size && (size + item.length > limit || (breakOnHeading && /^#{1,2}\s/.test(item)))) {
      pages.push(page.join("\n\n")); page = []; size = 0
    }
    page.push(item); size += item.length
  }
  if (page.length) pages.push(page.join("\n\n"))
  return pages
}

/** Smaller, block-aware pages for the expert flipbook. No page should require inner scrolling. */
export function buildFixedPaperPages(source: string, limit: number): string[] {
  const target = Math.max(90, Math.floor(limit))
  const chunkLimit = Math.max(90, Math.floor(target * 0.6))
  const blocks = source.trim().split(/\n\s*\n/)
  const expanded = blocks.flatMap((block) => {
    if (block.length <= chunkLimit || /^\s*(```|~~~)/.test(block)) return [block]
    const lines = block.split("\n")
    const pieces = lines.length > 1 ? lines : [block]
    return pieces.flatMap((piece) => {
      if (piece.length <= chunkLimit) return [piece]
      const sentences: string[] = []
      let sentenceStart = 0
      let insideStrong = false
      for (let i = 0; i < piece.length; i += 1) {
        if (piece.startsWith("**", i)) { insideStrong = !insideStrong; i += 1; continue }
        if (!insideStrong && "。！？；;".includes(piece[i])) {
          sentences.push(piece.slice(sentenceStart, i + 1))
          sentenceStart = i + 1
        }
      }
      if (sentenceStart < piece.length) sentences.push(piece.slice(sentenceStart))
      const output: string[] = []
      let current = ""
      for (const sentence of sentences) {
        if (current && current.length + sentence.length > chunkLimit) {
          output.push(current)
          current = ""
        }
        if (sentence.length > chunkLimit) {
          let rest = sentence
          while (rest.length > chunkLimit) {
            const comma = Math.max(rest.lastIndexOf("，", chunkLimit), rest.lastIndexOf(",", chunkLimit))
            let cut = comma >= chunkLimit / 2 ? comma + 1 : chunkLimit
            if (((rest.slice(0, cut).match(/\*\*/g) ?? []).length % 2) !== 0) {
              const opening = rest.lastIndexOf("**", cut)
              const closing = rest.indexOf("**", cut)
              if (opening >= chunkLimit / 2) cut = opening
              else if (closing >= 0 && closing < chunkLimit * 1.5) cut = closing + 2
            }
            if (cut < 1) cut = chunkLimit
            output.push(rest.slice(0, cut))
            rest = rest.slice(cut)
          }
          current = rest
        } else {
          current += sentence
        }
      }
      if (current) output.push(current)
      return output
    })
  })
  return buildBookPages(expanded.filter(Boolean).join("\n\n"), target, false)
}
