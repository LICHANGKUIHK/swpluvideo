export type YuxinouOfficialScoreType = "操作成绩" | "实验报告" | "预习成绩" | "教师评价报告"

export type YuxinouOfficialStep = {
  seq: number
  title: string
  phase: string
  path: string
  textbookChapter: string
  expectTime: number
  maxScore: number
  aiIntegration: string
  evidence: string[]
  objective: string
  assessmentModel: string
  scoreTypes: YuxinouOfficialScoreType[]
  detail: string
}

type StepSeed = [string, string, string, string, string, string[]]

const OFFICIAL_MAX_SCORES = [
  4, 3, 4, 4, 3, 4, 4, 4, 5, 3, 4, 3, 5, 4, 3, 3, 4, 3, 3, 3, 4, 4, 4, 4, 5, 6,
] as const

const OFFICIAL_EXPECT_MINUTES = [
  8, 8, 10, 12, 8, 12, 10, 12, 15, 10, 12, 8, 15, 12, 8, 8, 10, 8, 8, 8, 10, 12, 12, 12,
  15, 20,
] as const

function officialMaxScore(seq: number) {
  return OFFICIAL_MAX_SCORES[seq - 1] ?? 0
}

function officialExpectTime(seq: number) {
  return (OFFICIAL_EXPECT_MINUTES[seq - 1] ?? 0) * 60
}

const STEP_SEEDS: StepSeed[] = [
  ["出口模式与运输方式决策", "决策前置", "/decision/mode", "第一章 导学与智能化实验规则", "AI提示监管差异和运输方案取舍", ["出口模式选择", "运输方式选择", "学生裁决理由"]],
  ["理论学习", "知识准备", "/learn", "第一章 导学与智能化实验规则", "AI伴学解释术语、补充案例和自测反馈", ["理论学习记录", "知识点进度", "问答记录"]],
  ["企业注册与主体合规", "合规准备", "/enterprise/registration", "第二章 企业主体、市场判断与平台入驻", "DeepSeek提示市场主体、海关备案、电子口岸/单一窗口、跨境电商企业备案、外汇真实性和旧规则纠错风险，千问生成材料清单", ["注册表单", "主体资质链字段", "旧备案口径纠错", "单一窗口/海关备案证据", "9710资料链", "账户与外汇真实性证据", "合规建议采纳"]],
  ["9710首单可行性分析与市场调研", "市场分析", "/enterprise/feasibility", "第二章 企业主体、市场判断与平台入驻", "AI从德国B2B汽配需求、制动盘商品适配、9710与DAP铁路履约、报价利润、资金占用、数据要素和风险补证维度评分，学生独立修订结论", ["市场数据选择", "德国企业买方画像", "制动盘商品学与认证补证", "9710监管模式排除论证", "DAP铁路履约分析", "报价利润模型", "数据要素覆盖", "可行性结论", "修订记录"]],
  ["跨境电商平台入驻", "平台规则", "/enterprise/platform", "第二章 企业主体、市场判断与平台入驻", "AI从9710监管模式、询盘报价订单留痕、汽配商品标题与商标边界、数据要素沉淀、铁路整箱履约和DAP交付证据角度审查平台入驻方案", ["平台选择", "平台适配审计", "店铺资料", "9710交易承诺", "商品上架前置字段", "AI平台审查记录", "入驻结果"]],
  ["商品准入合规审计", "准入审计", "/compliance/check", "第三章 商品合规、选品与上架预审", "AI提示商品准入风险并混入可辨识错误建议，学生完成准入裁决和补证说明", ["准入审计裁决", "出口管制与制裁筛查证据", "欧盟认证与REACH补证项", "AI建议裁决", "最终准入结论"]],
  ["跨境电商四维选品决策", "选品逻辑", "/aliexpress/orders", "第三章 商品合规、选品与上架预审", "AI比较订单收益、合规和履约风险并混入单点最优错误建议，学生完成四维选品理由和AI建议裁决", ["选品记录", "四维选品分", "订单筛选理由", "AI建议裁决", "询盘报价订单证据", "商品适配结论"]],
  ["HS归类与电商上架合规", "上新合规", "/aliexpress/listing", "第三章 商品合规、选品与上架预审", "AI提示HS归类和标题合规风险并混入可辨识错误建议，学生完成归类理由、标题红队和AI建议裁决", ["商品上架资料", "HS归类选择", "归类理由", "标题合规裁决", "AI建议裁决", "9710平台证据"]],
  ["商务谈判与合同条款博弈", "交易博弈", "/negotiation", "第四章 商务谈判、工厂下单与装箱协同", "AI提出商务让步与合同风险建议并混入可辨识错误，学生完成条款选择和裁决留痕", ["合同条款选择", "付款结构", "迟延责任条款", "质量索赔条款", "AI谈判建议裁决", "合同风险备忘录"]],
  ["工厂下单与生产协调", "供应链", "/production", "第四章 商务谈判、工厂下单与装箱协同", "AI提出生产执行建议并混入跳过验货、压缩工序等可辨识错误，学生完成供应商、排期、质检、包装和单证裁决", ["采购订单执行计划", "供应商选择理由", "生产排期倒排", "质检与认证证据", "包装唛头指令", "AI生产建议裁决", "生产协调备忘录"]],
  ["集装箱装箱操作", "物流实操", "/container", "第四章 商务谈判、工厂下单与装箱协同", "AI审核装箱方案并混入偏载、事后补拍封志等可辨识错误，学生完成装箱安全判断、加固方案和AI建议裁决", ["验箱记录", "装箱方案", "重量体积校验", "重心偏移判断", "铁路加固方式", "AI装箱建议裁决", "箱封号与装箱单数据"]],
  ["国内短驳进站与场站交接", "集疏运", "/domestic-logistics", "第五章 国内集疏运、报关申报与风险预评", "AI提示短驳路线、团结村场站预约、截关窗口、费用责任和异常应对，并要求学生裁决低价慢线路、事后改重量等错误建议", ["国内短驳方案", "场站预约", "箱封号/重量体积交接", "DAP国内段成本", "异常应对", "AI物流建议裁决", "进站备忘录"]],
  ["9710制动盘报关申报", "单证实操", "/customs", "第五章 国内集疏运、报关申报与风险预评", "AI审核报关单并混入9710改报0110、按税率把制动盘归入钢铁制品/普通机械件、以后序报关单覆盖前序箱封证据等可辨识错误，学生完成制动盘申报要素一致性审计、8708.30归类依据裁决、欧盟认证补证提示和申报风险备忘录，并进入风险预评", ["报关单字段", "制动盘商品名称与HS方向", "申报要素一致性审计", "监管方式/平台订单匹配", "8708.30归类依据", "申报价值与币制逻辑", "欧盟认证补证提示", "箱封号一致性", "AI报关建议裁决", "申报风险备忘录", "提交时间"]],
  ["报关风险预评估", "风险管控", "/customs/risk-preview", "第五章 国内集疏运、报关申报与风险预评", "DeepSeek基于9710平台证据、HS上架、报关申报、短驳交接和商品准入审计生成动态风险矩阵，并混入AI错误建议，学生完成裁决、证据反驳和整改指令", ["风险级别", "动态风险矩阵", "高中风险数量", "AI错误识别", "裁决理由", "整改指令", "最终处理意见"]],
  ["火车发货与班次选择", "运输决策", "/railway", "第六章 班列订舱、火车发货与在途风险管理", "AI读取9710交易舱、报关申报、风险预评、国内短驳和装箱证据，提示订舱放行缺口；学生完成班次缓冲、箱型适配、违约期望损失、货代放行指令和订舱备忘录裁决", ["班次缓冲测算", "箱型适配", "前序证据放行审计", "货代放行指令", "运费与违约期望损失", "AI订舱建议裁决", "订舱执行备忘录"]],
  ["国际运输追踪", "状态监控", "/tracking", "第六章 班列订舱、火车发货与在途风险管理", "AI读取第15步订舱放行证据、报关风险预评和DAP交付缓冲，解释线路节点、ETA、换装/换单前置条件和客户通知触发条件", ["运输节点状态", "订舱追踪准备度", "班次/ETA/DAP缓冲", "前序放行审计", "异常记录", "客户通知触发判断"]],
  ["在途风险管理", "应急决策", "/tracking", "第六章 班列订舱、火车发货与在途风险管理", "AI生成天气、查验、口岸拥堵、货损、制裁筛查和汇率波动等风险情景，学生比较成本、时效、合规、保险、客户通知和DAP责任边界后裁决", ["风险事件", "处置方案", "成本/时效/合规影响", "客户通知或减损理由", "AI风险建议裁决", "风险处置得分"]],
  ["阿拉山口换装", "技术节点", "/tracking", "第七章 口岸换装、轨距制度与运单交接", "知识图谱解释轨距、换装和监管节点关系", ["换装节点", "封志核验", "口岸记录"]],
  ["轨距差异与口岸制度", "制度教学", "/railway/gauge-explain", "第七章 口岸换装、轨距制度与运单交接", "AI混入换轨、漏封志、提前承认赔偿等错误建议，学生裁决后写责任边界备忘录", ["概念辨析答案", "口岸证据字段", "AI概念错误裁决", "责任边界备忘录", "学习完成记录"]],
  ["布列斯特换装", "技术节点", "/tracking", "第七章 口岸换装、轨距制度与运单交接", "AI说明第二次换装与责任变化", ["换装节点", "完成状态", "异常处理记录"]],
  ["马拉舍维奇运单交接", "单证衔接", "/tracking", "第七章 口岸换装、轨距制度与运单交接", "AI混入CIM责任消灭、全程追责和直接承认赔偿等法律错误，学生裁决后完成责任备忘录和客户通知", ["运单交接", "阻断性交接冲突", "AI法律建议裁决", "责任转换判断", "缓冲期计算", "责任边界备忘录", "客户通知文本"]],
  ["单证衔接与清关前审计", "单证审计", "/document/transition", "第八章 单证衔接、欧洲清关与收货验收", "AI提示单证缺漏和冲突字段，学生独立识别实质冲突、选择清关前改单策略并写出补证说明", ["单证包", "冲突字段清单", "清关提交决策", "改单/补证说明", "单证链审计分"]],
  ["欧洲清关与收货验收", "目的国清关", "/clearance", "第八章 单证衔接、欧洲清关与收货验收", "AI提示欧洲清关、USD发票折算EUR完税价格、500/498数量差异、税费和验收风险，学生裁决错误建议并形成清关验收备忘录", ["清关冲突识别", "USD/EUR折算依据", "进口完税价格", "500/498数量差异", "进口税费估算", "DAP责任边界说明", "AI清关建议裁决", "收货验收处置", "清关验收备忘录"]],
  ["付款结算", "财务闭环", "/settlement", "第九章 付款结算、实验报告与复盘推演", "AI解释USD 23,400订单、T/T 7,020美元预付款与16,380美元尾款、退税、资金占用、DAP边界、总额法/净额法和USD/CNY 7.20→7.08锁汇，并混入可辨识结算错误，学生独立核算、交叉验算并裁决", ["TradeHub订单金额一致性", "结算表", "预付款与尾款拆分", "退税测算", "总额法/净额法交叉验算", "AI结算建议裁决", "锁汇裁决", "资金占用判断", "利润率结果"]],
  ["利润核算与实验报告", "结果闭环", "/report", "第九章 付款结算、实验报告与复盘推演", "AI按六维Rubric生成报告初评，汇总结算利润表和第26步复盘状态，并提示教师复核点", ["实验报告", "AI初评摘要", "结算与利润表", "第26步复盘状态", "教师终评依据"]],
  ["多方案对照与复盘推演", "决策升维", "/analysis/compare", "第九章 付款结算、实验报告与复盘推演", "AI辅助生成USD 23,400订单运输复盘建议并混入只看利润、盲目空运、忽视16,380美元尾款敞口等可辨识错误；学生用成本、时效、资金占用、违约金、证据链、汇率风险和客户承诺完成裁决", ["USD 23,400订单经营复盘", "方案成本时效表", "资金占用与违约金测算", "情景压力测试", "AI复盘建议裁决", "下轮运输策略备忘录", "经营复盘综合得分"]],
]

export const YUXINOU_OFFICIAL_STEPS: YuxinouOfficialStep[] = STEP_SEEDS.map(([title, phase, path, textbookChapter, aiIntegration, evidence], index) => ({
  seq: index + 1,
  title,
  phase,
  path,
  textbookChapter,
  expectTime: officialExpectTime(index + 1),
  maxScore: officialMaxScore(index + 1),
  aiIntegration,
  evidence,
  objective: officialObjective(title, phase, evidence),
  assessmentModel: officialAssessmentModel(index + 1),
  scoreTypes: officialScoreTypes(index + 1),
  detail: officialDetail(title, path, textbookChapter, aiIntegration, evidence),
}))

export function getYuxinouOfficialStep(seq: number) {
  return YUXINOU_OFFICIAL_STEPS.find((step) => step.seq === seq) ?? null
}

function officialObjective(title: string, phase: string, evidence: string[]) {
  return `${phase}：完成“${title}”的实质性交互操作，形成${evidence.join("、")}等可回溯证据，并能说明关键判断依据。`
}

function officialAssessmentModel(seq: number) {
  if (seq === 2) {
    return "预习完成20% + 知识点自测30% + 术语解释与案例迁移30% + 学习反思20%"
  }
  if (seq === 25 || seq === 26) {
    return "过程证据30% + 财务核算/方案复盘40% + 跨学科综合论证20% + 教师终评10%"
  }
  if ([1, 4, 6, 9, 14, 17, 19, 21].includes(seq)) {
    return "操作留痕35% + 风险识别25% + AI建议裁决20% + 修正说明20%"
  }
  return "操作留痕40% + 证据完整30% + AI建议裁决/采纳说明20% + 反思修正10%"
}

function officialScoreTypes(seq: number): YuxinouOfficialScoreType[] {
  if (seq === 2) return ["预习成绩", "操作成绩"]
  if (seq === 25 || seq === 26) return ["实验报告", "教师评价报告"]
  if ([1, 4, 6, 9, 14, 17, 19, 21].includes(seq)) return ["操作成绩", "教师评价报告"]
  return ["操作成绩", "实验报告"]
}

function officialDetail(title: string, path: string, textbookChapter: string, aiIntegration: string, evidence: string[]) {
  return `学生在 ${path} 页面完成“${title}”，先读取《${textbookChapter}》对应知识，再使用AI进行提示、预审或反思；系统保留${evidence.join("、")}，用于学生自评、教师复核和重庆平台申报材料追溯。`
}

export function getYuxinouOfficialStepAssessmentMatrix() {
  const totalScore = YUXINOU_OFFICIAL_STEPS.reduce((sum, step) => sum + step.maxScore, 0)
  const totalExpectedMinutes = YUXINOU_OFFICIAL_STEPS.reduce((sum, step) => sum + step.expectTime / 60, 0)
  const scoreTypeCoverage = Array.from(new Set(YUXINOU_OFFICIAL_STEPS.flatMap((step) => step.scoreTypes)))

  return {
    requirement: "重庆市一流本科课程申报书3-6：不少于10步学生交互性操作步骤，逐步说明步骤目标、合理用时、目标达成度赋分模型、步骤满分和成绩类型。",
    benchmarkClaim: "本项目以26步全流程实质性交互覆盖出口模式决策、跨境电商经营、报关申报、铁路联运、单证衔接、结算复盘等核心任务，超过申报书最低步数要求。",
    totalSteps: YUXINOU_OFFICIAL_STEPS.length,
    totalScore,
    totalExpectedMinutes,
    scoreTypeCoverage,
    steps: YUXINOU_OFFICIAL_STEPS,
  }
}
