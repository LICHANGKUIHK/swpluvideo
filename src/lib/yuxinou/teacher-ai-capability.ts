export const YUXINOU_TEACHER_AI_CAPABILITY_DIMENSIONS = [
  {
    key: "course-reconstruction",
    title: "课程重构与跨学科设计能力",
    capability: "能把9章数字教材、26步虚拟仿真实验、八大学科群、核心学科方向和岗位能力要求重构为同一套教学任务链。",
    classroomUse: "备课时先确定本节对应的业务任务、学科群、知识图谱节点、智能体边界和学生证据字段，而不是只安排知识讲授。",
    platformEvidence: "课程地图、学科融合总览、资源中心和教材章节均可作为备课依据。",
    applicationValue: "支撑重庆市要求的课程、教材、教师教学能力一体化推进。",
  },
  {
    key: "agent-orchestration",
    title: "任务型智能体调度与追问能力",
    capability: "能根据学生所处步骤选择HS编码、报关申报、合同履约、铁路联运、结算复盘等任务智能体，并设计追问让学生解释判断依据。",
    classroomUse: "课堂中要求学生先给出方案，再使用AI智能体提出反证、风险提示或替代方案，最后由学生作出采纳、部分采纳或不采纳裁决。",
    platformEvidence: "AI建议裁决、智能体徽标、学生理由和LearningEvent共同进入证据链。",
    applicationValue: "把AI从答案生成器转化为教学追问、证据复核和学生主体判断训练工具。",
  },
  {
    key: "evidence-based-assessment",
    title: "证据化过程评价与Rubric复核能力",
    capability: "能依据学生步骤留痕、TradeHub交易证据、AI初评、同伴互评和报告证据包开展终评。",
    classroomUse: "评价时不只看最终报告，而是检查学生是否能用RFQ、报价、报关、班列、结算和AI裁决理由支撑结论。",
    platformEvidence: "教师工作台、证据链页面、教师终评API和CQ成绩接口共同保存评价证据。",
    applicationValue: "支撑过程可回溯、材料完整、可监督的多元化评价。",
  },
  {
    key: "learning-analytics",
    title: "学习分析与因材施教诊断能力",
    capability: "能读取学生步骤完成度、数据要素完整度、AI裁决质量、章节自测和报告维度得分，识别学习困难点。",
    classroomUse: "课后按学生或小组生成诊断清单，把共性问题转化为下一轮案例、讲评、补充任务或题库改进。",
    platformEvidence: "学生进度、题库结果、数据要素审计、教师终评和应用成效证据包提供诊断数据。",
    applicationValue: "回应重庆市关于因材施教、教学反馈及时和持续改进的要求。",
  },
  {
    key: "ai-governance",
    title: "AI治理、学术诚信与数据安全能力",
    capability: "能区分AI辅助、学生独立判断和教师最终责任，落实考试模式禁用AI、数据最小化、脱敏展示和内容审查要求。",
    classroomUse: "明确AI只能给出线索和风险提示，学生必须裁决并说明理由；教师终评不得被AI分数直接替代。",
    platformEvidence: "考试模式403、AI裁决理由、脱敏账号、CQ接口无密钥泄露和课程治理制度共同证明治理边界。",
    applicationValue: "支撑内容规范、技术水平、学术诚信和知识产权安全。",
  },
  {
    key: "education-research",
    title: "教学研究与持续改进能力",
    capability: "能把匿名化学习事件、教师终评、课堂观察和学生作品转化为教学研究问题和持续改进证据。",
    classroomUse: "围绕AI裁决质量、跨学科证据引用、报关一致性错误率和利润复盘能力设计两轮教学周期比较。",
    platformEvidence: "EduResearch口径、两轮教学周期证据包、应用成效材料和教师复核记录共同支撑教学论文与课程改进。",
    applicationValue: "把课程建设从一次性申报材料提升为可研究、可复制、可推广的人工智能+教育实践。",
  },
] as const

export const YUXINOU_TEACHER_CLASSROOM_FLOW = [
  {
    phase: "课前",
    title: "基于教材、知识图谱和学情数据备课",
    actions: ["选择对应章节与实验步骤", "确认学科群和知识点", "查看上一轮常见错误", "设定AI使用边界"],
    evidence: "课程地图、数字教材、知识图谱、题库与历史LearningEvent。",
  },
  {
    phase: "课中",
    title: "以任务驱动组织学生解决复杂问题",
    actions: ["学生先独立提出方案", "任务智能体提出风险线索", "小组互评证据充分性", "教师追问法律与商业后果"],
    evidence: "步骤提交、AI裁决理由、同伴互评、讨论区和课堂讲评记录。",
  },
  {
    phase: "课后",
    title: "用证据链完成评价、反馈和补救",
    actions: ["查看学生证据包", "依据Rubric终评", "标注典型错误", "布置差异化补充任务"],
    evidence: "教师工作台、学生报告、AI初评、教师终评事件和CQ成绩接口。",
  },
  {
    phase: "改进",
    title: "面向下一轮教学周期持续迭代",
    actions: ["汇总薄弱学科方向", "更新教材案例和题库", "优化智能体提示词", "沉淀教学研究数据"],
    evidence: "应用成效证据包、资源上架清单、验收脚本和教学研究材料。",
  },
] as const

export const YUXINOU_TEACHER_AI_GUARDRAILS = [
  "AI不替学生完成答案，学生必须作出采纳、部分采纳或不采纳裁决并说明理由。",
  "AI不替教师作出最终成绩，教师终评以Rubric、过程证据和报告质量为依据。",
  "考试模式禁用AI问答和提示，系统保留考试会话、页面规则和报告锁定证据。",
  "课堂展示与申报材料使用脱敏数据，不暴露真实手机号、密钥、商业合同和个人隐私。",
  "教师应把AI错误、学生纠错和模型局限作为高质量教学证据，而不是掩盖AI不确定性。",
] as const
