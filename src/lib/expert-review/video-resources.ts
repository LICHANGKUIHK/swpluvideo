import videos from "../../../content/review-v2/expert-videos.json"

export const expertVideos = videos

function publicHttpsUrl(value: string): URL | null {
  try {
    const url = new URL(value)
    return url.protocol === "https:" ? url : null
  } catch {
    return null
  }
}

export function videoHref(value: string): string | null {
  return publicHttpsUrl(value)?.toString() ?? null
}

export const expertVideosReady = expertVideos.length === 2 && expertVideos.every((video) => videoHref(video.url) !== null)
