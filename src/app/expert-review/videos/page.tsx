import { expertVideos, videoHref } from "@/lib/expert-review/video-resources"

export const metadata = { title: "项目视频｜专家评审中心" }

export default function ExpertReviewVideosPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8">
      <header className="rounded-3xl border border-[#ead7d1] bg-white p-7 shadow-sm lg:p-9">
        <p className="text-xs font-black tracking-[.18em] text-[#8f1d2b]">PROJECT VIDEOS</p>
        <h1 className="mt-3 text-4xl font-black text-slate-950">项目视频</h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">先看项目简介，再看教学引导；视频是快速导览，具体实验内容和申报依据仍可在本通道逐项核验。</p>
      </header>

      <section className="mt-6 grid gap-5 lg:grid-cols-2" aria-label="项目视频列表">
        {expertVideos.map((video, index) => {
          const href = videoHref(video.url)
          return (
            <article key={video.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-[#43131a] via-[#98212c] to-[#b97878]">
                <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-white">
                  <span className="text-sm font-black tracking-[.2em] text-white/70">VIDEO 0{index + 1}</span>
                  <span className="text-2xl font-black sm:text-3xl">{video.title}</span>
                  <span className="text-sm text-white/80">{href ? "点击下方播放器观看" : "最终视频链接待接入"}</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-black text-slate-950">{video.title}</h2>
                <p className="mt-2 min-h-12 text-sm leading-7 text-slate-600">{video.description}</p>
                {href ? (
                  <video className="mt-4 aspect-video w-full rounded-lg bg-black" controls preload="metadata" src={href} aria-label={video.title} />
                ) : (
                  <p className="mt-4 text-sm font-bold text-slate-500">视频链接接入后开放观看</p>
                )}
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}
