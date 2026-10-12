export type YuxinouTeachingPhase = {
  key: string
  title: string
  applicationSection: "3-5实验教学过程与实验方法" | "3-8面向学生要求"
  learningFocus: string
  teacherAction: string
  studentAction: string
  aiAndDataUse: string
  interactionMode: string
  evidenceOutput: string[]
  linkedSteps: number[]
}

export type YuxinouTeachingMethod = {
  key: string
  title: string
  methodType: string
  chongqingAlignment: string
  softwareImplementation: string
  assessmentEvidence: string[]
}

export type YuxinouStudentRequirementProfile = {
  key: string
  learnerGroup: string
  suitableMajorsOrRoles: string[]
  suggestedYearOrLevel: string
  prerequisiteKnowledge: string[]
  requiredAbilities: string[]
  platformSupport: string[]
  challengeExtension: string
}

export const YUXINOU_TEACHING_PHASES: YuxinouTeachingPhase[] = [
  {
    key: "pre-class-diagnosis",
    title: "课前诊断与任务导入",
    applicationSection: "3-5实验教学过程与实验方法",
    learningFocus: "理解渝新欧、中欧班列、跨境电商9710、DAP交付和出口合规的基本情境。",
    teacherAction: "发布数字教材章节、知识图谱节点、预习题和真实案例提示，明确本次实验的业务角色、证据字段和评价标准。",
    studentAction: "完成教材预习、题库自测、知识图谱检索和案例初判，形成个人疑问清单。",
    aiAndDataUse: "KMEP记录章节学习、题库、自测和知识图谱点击；智能体只做概念澄清和风险提示。",
    interactionMode: "教师导学 + 学生自主学习 + AI提示边界确认。",
    evidenceOutput: ["yuxinou.quiz", "yuxinou.knowledge_graph", "教材阅读进度", "预习诊断记录"],
    linkedSteps: [1, 2, 3],
  },
  {
    key: "scenario-project-execution",
    title: "项目式业务链操作",
    applicationSection: "3-5实验教学过程与实验方法",
    learningFocus: "围绕同一笔铁路联运出口业务完成主体合规、交易证据、商品上架、HS归类、报关和运输组织。",
    teacherAction: "按业务链设置阶段性检查点，提示学生关注贸易、物流、法律、结算和数据证据之间的因果关系。",
    studentAction: "在sim中完成26步核心操作，提交关键字段、单证和业务判断。",
    aiAndDataUse: "任务型智能体按步骤提供业务/合规/复盘提示，学生必须裁决AI建议并说明理由。",
    interactionMode: "项目式学习 + 角色扮演 + 实践式操作。",
    evidenceOutput: ["yuxinou.step", "TradeHub询盘/报价/订单", "AI裁决记录", "单证字段证据"],
    linkedSteps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
  {
    key: "risk-red-team",
    title: "合规风险红队复核",
    applicationSection: "3-5实验教学过程与实验方法",
    learningFocus: "识别AI建议、HS归类、出口管制、制裁筛查、单证一致性和运输责任中的错误或不确定性。",
    teacherAction: "组织学生对AI建议、同伴方案和典型错误案例进行反证，强调法律责任和证据支撑。",
    studentAction: "对HS编码、交易金额、报关要素、DAP责任和SMGS/CIM分段责任进行交叉核验。",
    aiAndDataUse: "DeepSeek侧重合规复核，Qwen侧重商务可行性；系统记录学生采纳、部分采纳或不采纳的裁决。",
    interactionMode: "研究型学习 + 问题式学习 + AI红队审查。",
    evidenceOutput: ["yuxinou.ai_adjudication", "风险预警字段", "更正理由", "教师关注点"],
    linkedSteps: [7, 8, 9, 10, 11, 12, 13, 14],
  },
  {
    key: "collaborative-peer-review",
    title: "同伴互评与协作讨论",
    applicationSection: "3-5实验教学过程与实验方法",
    learningFocus: "通过审查他人报告证据，训练跨学科表达、风险识别和证据质询能力。",
    teacherAction: "提供互评Rubric，引导学生围绕报告完整性、决策合理性、合规风险意识提出具体反馈。",
    studentAction: "评价同伴实验报告，指出证据缺口、逻辑矛盾和可改进的业务决策。",
    aiAndDataUse: "互评结果写入LearningEvent，供教师终评和EduResearch分析使用。",
    interactionMode: "生生互动 + 协作式学习 + 同伴证据审查。",
    evidenceOutput: ["yuxinou.peer_review", "讨论帖", "互评评分", "互评评语"],
    linkedSteps: [15, 16, 17, 18, 19, 20],
  },
  {
    key: "settlement-profit-review",
    title: "结算、利润与履约复盘",
    applicationSection: "3-5实验教学过程与实验方法",
    learningFocus: "把国际结算、汇率、退税、运费、滞期、赔偿和利润核算放入同一张复盘表。",
    teacherAction: "组织学生解释利润波动来源，区分总额法/净额法、远期锁汇、退税节奏和铁路责任边界。",
    studentAction: "完成结算记录、利润敏感性分析、证据引用和最终报告撰写。",
    aiAndDataUse: "AI可提示核算口径和风险点，但最终利润判断、证据引用和结论由学生完成。",
    interactionMode: "案例推演 + 定量核算 + 证据化复盘。",
    evidenceOutput: ["yuxinou.report", "结算记录", "利润敏感性表", "证据引用清单"],
    linkedSteps: [21, 22, 23, 24, 25, 26],
  },
  {
    key: "teacher-review-improvement",
    title: "教师终评与持续改进",
    applicationSection: "3-5实验教学过程与实验方法",
    learningFocus: "形成AI初评、同伴互评、教师终评和课程持续改进的闭环。",
    teacherAction: "依据六维Rubric复核学生报告、过程证据、AI裁决和同伴反馈，给出最终成绩与改进建议。",
    studentAction: "查看反馈，回应补强处方，进入知识图谱、题库、案例或教材对应位置进行二次学习。",
    aiAndDataUse: "EduResearch汇总过程事件，用于下一轮教材、题库、智能体提示词和课堂追问优化。",
    interactionMode: "师生互动 + 过程评价 + 持续改进。",
    evidenceOutput: ["yuxinou.teacher_review", "yuxinou.prescription_response", "EduResearch指标", "CQ证据包"],
    linkedSteps: [1, 7, 13, 19, 26],
  },
]

export const YUXINOU_TEACHING_METHODS: YuxinouTeachingMethod[] = [
  {
    key: "scenario-project",
    title: "情境项目式教学法",
    methodType: "项目式学习",
    chongqingAlignment: "对应学生中心、项目式和实践式学习要求。",
    softwareImplementation: "以渝新欧铁路联运出口订单为主线，把26步实验组织为一个连续项目。",
    assessmentEvidence: ["yuxinou.step", "TradeHub证据", "实验报告"],
  },
  {
    key: "interdisciplinary-case",
    title: "跨学科案例推演法",
    methodType: "案例教学",
    chongqingAlignment: "对应跨学科融合课程、复杂问题解决能力和专业前沿融入要求。",
    softwareImplementation: "案例库覆盖电子商务、国际贸易、国际结算、国际贸易法、海关法、商品学、物流和数据要素。",
    assessmentEvidence: ["yuxinou.case_challenge", "案例反思", "教师终评"],
  },
  {
    key: "ai-adjudication",
    title: "AI建议裁决法",
    methodType: "人工智能辅助教学",
    chongqingAlignment: "对应人工智能深度融入教学和防止AI代做的治理要求。",
    softwareImplementation: "每个任务智能体只提供建议，学生必须裁决并写理由，考试模式禁用AI。",
    assessmentEvidence: ["yuxinou.ai_adjudication", "裁决理由", "教师复核"],
  },
  {
    key: "evidence-based-assessment",
    title: "证据链评价法",
    methodType: "多元评价",
    chongqingAlignment: "对应过程可回溯、材料完整、可借鉴可监督要求。",
    softwareImplementation: "过程事件、单证、TradeHub、报告、互评、AI初评和教师终评共同进入证据包。",
    assessmentEvidence: ["LearningEvent", "CQ evidence package", "reportEvidence"],
  },
  {
    key: "peer-review",
    title: "同伴证据审查法",
    methodType: "协作式学习",
    chongqingAlignment: "对应生生互动和协作式学习要求。",
    softwareImplementation: "同伴互评要求学生审查报告完整性、决策合理性、合规与风险意识。",
    assessmentEvidence: ["yuxinou.peer_review", "互评Rubric", "互评评语"],
  },
  {
    key: "eduresearch-improvement",
    title: "学习分析持续改进法",
    methodType: "研究型教学",
    chongqingAlignment: "对应教学反馈及时、教学效果显著和持续改进要求。",
    softwareImplementation: "EduResearch把AI裁决、数据要素、题库、互评和教师终评转化为教学研究指标。",
    assessmentEvidence: ["EduResearch dashboard", "两轮教学周期证据", "改进动作"],
  },
]

export const YUXINOU_STUDENT_REQUIREMENT_PROFILES: YuxinouStudentRequirementProfile[] = [
  {
    key: "undergraduate-core",
    learnerGroup: "本科专业核心课程学生",
    suitableMajorsOrRoles: ["电子商务", "国际经济与贸易", "法学", "物流管理", "商务英语", "数字经济"],
    suggestedYearOrLevel: "本科二、三年级及以上，已学习国际贸易、电子商务或法律基础课程者优先。",
    prerequisiteKnowledge: ["国际贸易术语", "跨境电商平台基本流程", "合同与证据基础", "商品归类基础", "基础财务计算"],
    requiredAbilities: ["阅读和填制业务单证", "识别合规风险", "进行成本利润核算", "解释AI建议并独立裁决", "撰写证据化实验报告"],
    platformSupport: ["数字教材", "知识图谱", "任务智能体", "题库自测", "教师终评"],
    challengeExtension: "要求形成跨学科报告，能够同时解释贸易、物流、法律、结算和数据证据之间的关系。",
  },
  {
    key: "law-and-compliance-transfer",
    learnerGroup: "法学、海关合规与涉外法治方向学生",
    suitableMajorsOrRoles: ["法学", "国际法", "海关管理", "知识产权", "数据法学"],
    suggestedYearOrLevel: "本科三年级及以上或研究生入门阶段。",
    prerequisiteKnowledge: ["国际贸易法", "合同法基础", "电子证据", "海关监管", "数据合规"],
    requiredAbilities: ["判断责任边界", "审查AI与单证风险", "区分运输责任和贸易责任", "提出合规整改意见"],
    platformSupport: ["合规风险红队", "AI裁决", "SMGS/CIM责任案例", "教师Rubric"],
    challengeExtension: "从法律责任、证据效力和监管合规角度重写实验报告中的风险复盘部分。",
  },
  {
    key: "business-data-analyst",
    learnerGroup: "数字贸易与数据分析方向学生",
    suitableMajorsOrRoles: ["数字经济", "大数据管理与应用", "电子商务", "信息管理"],
    suggestedYearOrLevel: "本科二年级及以上，具备表格分析和基础统计能力。",
    prerequisiteKnowledge: ["数据要素", "业务流程建模", "基础统计", "平台运营指标", "AI工具使用规范"],
    requiredAbilities: ["构建商流/物流/单证流/资金流/合规流/学习过程数据映射", "解释完整度分", "发现数据断点"],
    platformSupport: ["数据要素审计", "TradeHub证据链", "EduResearch", "CQ证据包"],
    challengeExtension: "把一次实验转换为可审计的数据资产说明，解释每类数据如何支撑经营决策和监管合规。",
  },
  {
    key: "social-learner",
    learnerGroup: "社会学习者与跨境电商从业人员",
    suitableMajorsOrRoles: ["跨境电商运营", "外贸业务员", "报关/关务人员", "国际物流专员", "企业合规人员"],
    suggestedYearOrLevel: "具有外贸、电商、物流、关务、财务或法务岗位经验者均可学习。",
    prerequisiteKnowledge: ["基本外贸流程", "平台订单处理", "商品信息整理", "基础成本核算"],
    requiredAbilities: ["完成9710交易证据准备", "理解铁路联运履约节点", "识别申报风险", "把实验结果迁移到岗位操作清单"],
    platformSupport: ["社会培训路径", "案例挑战库", "岗位能力画像", "数字教材", "题库与考试系统"],
    challengeExtension: "面向真实岗位输出一份跨境电商铁路出口作业SOP、风险清单和证据归档清单。",
  },
]

export function getYuxinouTeachingProcessBlueprint() {
  const linkedSteps = new Set(YUXINOU_TEACHING_PHASES.flatMap((phase) => phase.linkedSteps))
  return {
    version: "teaching-process-blueprint-yuxinou-2026-06-12",
    requirement: "对应申报书3-5“实验教学过程与实验方法”和3-8“面向学生要求”。",
    benchmarkClaim: "高于基本要求：把教学过程、教学方法、分层学习者要求、AI边界、互动方式和证据输出全部结构化，并随KMEP readiness和重庆平台证据包导出。",
    phaseCount: YUXINOU_TEACHING_PHASES.length,
    methodCount: YUXINOU_TEACHING_METHODS.length,
    profileCount: YUXINOU_STUDENT_REQUIREMENT_PROFILES.length,
    linkedStepCount: linkedSteps.size,
    phases: YUXINOU_TEACHING_PHASES,
    methods: YUXINOU_TEACHING_METHODS,
    studentRequirementProfiles: YUXINOU_STUDENT_REQUIREMENT_PROFILES,
    applicationText: [
      "实验教学采用课前诊断、项目式业务链操作、合规风险红队复核、同伴互评、结算利润复盘、教师终评与持续改进六段式流程。",
      "面向电子商务、国际贸易、法学、物流、商务英语、数字经济等本科专业，同时可扩展到跨境电商运营、关务、国际物流和企业合规等社会学习者岗位培训。",
      "学生需具备国际贸易术语、跨境电商平台流程、合同与证据、商品归类和基础财务计算等知识基础，并在实验中形成证据化报告和可迁移岗位能力。",
    ],
  }
}
