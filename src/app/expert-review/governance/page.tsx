const REVIEW_BOUNDARIES = [
  ["专家免登录", "公开区只提供项目导览、教材全文、实验步骤说明和脱敏汇总，不授予管理权限。"],
  ["个人数据", "公开页面不查询真实学生名单、个人成绩和联系方式；涉及个人信息的原始证明以学校正式提交材料或脱敏档案核验。"],
  ["实验与成绩", "26步页面是只读导览，不提交实验、不计分、不回传重庆平台。真实操作须按平台要求登录。"],
  ["AI评审助手", "正式系统中的助手只依据公开资料辅助答疑并列出来源，不作评审结论；本代码镜像不接入该服务。"],
] as const

export default function ExpertGovernanceMirror() {
  return <main className="mx-auto max-w-[1400px] px-5 py-10 lg:px-8">
    <header className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-7">
      <h1 className="text-4xl font-black text-slate-950">评审权限与运行边界</h1>
      <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">专家能看什么、不能做什么，在这里说明。</p>
    </header>
    <section className="mt-6 grid gap-4 md:grid-cols-2">
      {REVIEW_BOUNDARIES.map(([title, description]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-black text-slate-950">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      </article>)}
    </section>
  </main>
}
