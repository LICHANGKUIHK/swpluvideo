export const YUXINOU_TEXTBOOK_ID = "course_yuxinou_digital_textbook"
export const YUXINOU_TOTAL_STEPS = 26

export type YuxinouCurriculumStep = {
  number: number
  name: string
  phase: string
}

export type YuxinouCurriculumUnit = {
  id: string
  chapterId: string
  title: string
  steps: YuxinouCurriculumStep[]
  objectives: string[]
  aiIntegration: string
  evidence: string[]
  practiceMode: string
  examMode: string
  studentTask: string
}

const steps = [
  { number: 1, name: "出口模式与运输方式决策", phase: "决策前置" },
  { number: 2, name: "理论学习（12讲）", phase: "知识准备" },
  { number: 3, name: "企业注册与9710主体资质链", phase: "合规准备" },
  { number: 4, name: "9710首单可行性分析与市场调研", phase: "市场分析" },
  { number: 5, name: "跨境电商平台入驻", phase: "平台规则" },
  { number: 6, name: "商品准入合规审计", phase: "准入审计" },
  { number: 7, name: "跨境电商四维选品决策", phase: "选品逻辑" },
  { number: 8, name: "HS归类与电商上架合规", phase: "上新合规" },
  { number: 9, name: "商务谈判与合同条款博弈", phase: "交易博弈" },
  { number: 10, name: "工厂下单与生产协调", phase: "供应链" },
  { number: 11, name: "集装箱装箱操作", phase: "物流实操" },
  { number: 12, name: "国内短驳进站与场站交接", phase: "集疏运" },
  { number: 13, name: "9710制动盘报关申报", phase: "单证实操" },
  { number: 14, name: "报关风险预评估", phase: "风险管控" },
  { number: 15, name: "火车发货与班次选择", phase: "运输决策" },
  { number: 16, name: "国际运输追踪", phase: "状态监控" },
  { number: 17, name: "在途风险管理", phase: "应急决策" },
  { number: 18, name: "阿拉山口换装", phase: "技术节点" },
  { number: 19, name: "轨距差异与口岸制度", phase: "制度教学" },
  { number: 20, name: "布列斯特换装", phase: "技术节点" },
  { number: 21, name: "马拉舍维奇运单交接", phase: "单证衔接" },
  { number: 22, name: "单证衔接与清关前审计", phase: "单证审计" },
  { number: 23, name: "欧洲清关与收货验收", phase: "目的国清关" },
  { number: 24, name: "付款结算", phase: "财务闭环" },
  { number: 25, name: "利润核算与实验报告", phase: "结果闭环" },
  { number: 26, name: "多方案对照与复盘推演", phase: "决策升维" },
] satisfies YuxinouCurriculumStep[]

function pickSteps(numbers: number[]) {
  return numbers.map((number) => {
    const step = steps.find((item) => item.number === number)
    if (!step) throw new Error(`Missing Yuxinou curriculum step ${number}`)
    return step
  })
}

export const YUXINOU_CURRICULUM_UNITS = [
  {
    id: "01-guide",
    chapterId: "chap_yuxinou_01_guide",
    title: "第一章 导学与智能化实验规则",
    steps: pickSteps([1, 2]),
    objectives: ["理解9710出口、中欧班列与虚拟仿真实验角色", "区分练习模式和考试模式的学习边界"],
    aiIntegration: "AI用于导学、术语解释、实验前测与路线选择提示；考试模式关闭过程提示。",
    evidence: ["教材阅读进度", "进入实验模式", "导学测验与模式选择记录"],
    practiceMode: "允许查看导学提示、AI术语解释和路线决策建议。",
    examMode: "只保留身份、时间、模式选择和最终决策留痕。",
    studentTask: "写出选择9710跨境电商B2B直接出口和渝新欧班列的核心理由。",
  },
  {
    id: "02-setup",
    chapterId: "chap_yuxinou_02_setup",
    title: "第二章 企业主体、市场判断与平台入驻",
    steps: pickSteps([3, 4, 5]),
    objectives: ["完成出口主体注册、9710主体资质链和平台入驻判断", "用德国B2B汽配需求、Duisburg企业买方画像和BMW E90/E91制动盘商品事实说明首单场景合理性", "区分市场主体登记、海关收发货人备案、电子口岸/单一窗口、跨境电商企业海关备案和外汇真实性审核的功能边界", "区分9710、9610、9810和0110监管模式，说明平台交易数据如何贯通询盘、报价、订单、上架、报关和铁路履约"],
    aiIntegration: "千问侧重商业可行性、材料清单和平台规则建议，DeepSeek侧重企业资质链、旧法规口径纠错、9710监管适配、外汇真实性、平台数据要素、店铺商标边界、汽配商品合规和风险提示。",
    evidence: ["企业注册表单", "主体资质链字段", "旧备案口径纠错", "单一窗口/海关备案证据", "9710资料链", "账户与外汇真实性证据", "德国企业买方画像", "制动盘商品学与认证补证", "9710监管模式排除论证", "DAP铁路履约分析", "报价利润模型", "数据要素覆盖", "可行性分析结论", "平台入驻选择记录", "平台适配审计", "9710交易承诺", "商品上架前置字段", "AI平台审查记录"],
    practiceMode: "展示主体资质链、旧规则纠错、账户外汇真实性、德国B2B汽配市场判断、9710首单可行性、平台入驻、监管模式适配、数据要素沉淀和商品上架前置字段的AI纠错建议。",
    examMode: "记录学生独立提交的主体资质链、市场和平台判断，不展示过程建议。",
    studentTask: "先完成德国企业买方、制动盘商品事实、9710监管方式、DAP杜伊斯堡铁路履约、报价利润和数据证据链的首单可行性分析，再比较平台入驻前后需要准备的主体资质、单一窗口/海关资料、账户外汇证据、商品资料和交易承诺，并说明为什么本案应以9710 B2B直接出口交易舱作为主证据来源，而不能用B2C零售、海外仓或独立站展示替代。",
  },
  {
    id: "03-compliance",
    chapterId: "chap_yuxinou_03_compliance",
    title: "第三章 商品合规、选品与上架预审",
    steps: pickSteps([6, 7, 8]),
    objectives: ["掌握HS归类、出口管制、制裁筛查、欧盟准入和商品描述合规要求", "完成商品准入审计、利润-合规-履约-数据四维选品、HS归类三步法、英文标题红队和上架资料预审"],
    aiIntegration: "双模型对商品准入、订单收益、履约风险、HS编码、认证要素、平台标题和欧盟准入进行交叉评议，并混入可辨识错误建议，学生必须说明裁决理由。",
    evidence: ["商品准入审计", "四维选品理由", "出口管制与制裁筛查记录", "HS归类选择与理由", "标题合规裁决", "AI预审建议与学生裁决"],
    practiceMode: "开放商品合规提示、选品维度提示、HS风险解释、AI错误建议纠偏、标题红队和上架资料预评分。",
    examMode: "关闭提示，仅记录准入裁决、四维选品理由、HS归类理由、最终上架资料、风险分和学生裁决理由。",
    studentTask: "围绕BMW E90制动盘案例，完成准入审计、四维选品决策、HS归类三步法和标题合规红队，并列出至少3项必须补充的认证、筛查或标签证据。",
  },
  {
    id: "04-trade",
    chapterId: "chap_yuxinou_04_trade",
    title: "第四章 商务谈判、工厂下单与装箱协同",
    steps: pickSteps([9, 10, 11]),
    objectives: ["理解B2B谈判、Incoterms 2020、付款结构、迟延责任、质量索赔、采购订单、生产排期、质检证据、包装唛头、交期、装箱载重、重心偏载和箱封证据约束", "形成从合同条款到采购订单、生产批次、装箱单、报关单、短驳交接和清关单证的一致性意识"],
    aiIntegration: "AI用于提出商务让步、合同风险、生产执行和装箱加固建议，并混入DDP包税、到货后裸赊、跳过验货、压缩工序、忽视偏载、事后补拍封志等可辨识错误；学生必须完成合同条款选择、生产执行裁决、装箱安全判断、AI建议裁决和风险备忘录。",
    evidence: ["合同条款选择", "AI谈判建议裁决", "合同风险备忘录", "采购订单执行计划", "生产排期倒排", "质检与认证证据", "包装唛头指令", "AI生产建议裁决", "验箱记录", "装箱方案与重量体积校验", "重心偏移判断", "铁路加固方式", "AI装箱建议裁决", "箱封号与装箱单数据"],
    practiceMode: "提供合同条款专家提示、生产排期和质检包装提示、AI错误建议参考裁决、订单字段、装箱载重、重心偏载、固定方式和箱封证据的即时反馈。",
    examMode: "隐藏专家提示和参考裁决，只记录学生合同条款组合、生产执行计划、AI裁决理由、订单、装箱方案、箱封证据和装箱成熟度，供教师复核。",
    studentTask: "解释为什么DAP、付款、迟延责任、质量索赔、批次追溯、质检证据、包装唛头、装箱重心、封志照片和固定方式会影响后续短驳、报关、欧洲清关和结算复盘。",
  },
  {
    id: "05-customs",
    chapterId: "chap_yuxinou_05_customs",
    title: "第五章 国内集疏运、报关申报与风险预评",
    steps: pickSteps([12, 13, 14]),
    objectives: ["掌握国内短驳、团结村场站预约、截关窗口、9710制动盘报关申报、申报要素一致性审计和风险预评流程", "识别箱封号、毛净重体积、制动盘商品名称、8708.30归类方向、申报价值、币制、9710监管方式、费用责任、ECE R90/E-mark/REACH补证和许可证件等关键风险"],
    aiIntegration: "千问用于提示短驳进站、场站预约、DAP国内段费用和异常应对，DeepSeek用于报关字段、9710平台证据、制动盘8708.30归类方向、申报价值逻辑、箱封号一致性和风险预评；AI会混入低价慢线路、事后改重量、9710改报0110、按税率把制动盘归入钢铁制品/普通机械件、以后序报关单覆盖前序箱封证据、低报价值和CE替代ECE R90等可辨识错误，学生必须裁决。",
    evidence: ["国内短驳方案", "团结村场站预约", "箱封号/重量体积交接", "DAP国内段成本", "报关单要素", "制动盘商品名称与HS方向", "申报要素一致性审计", "监管方式/平台订单匹配", "8708.30归类依据", "申报价值与币制逻辑", "欧盟认证补证提示", "AI报关建议裁决", "申报风险备忘录", "动态风险矩阵", "风险预评与修正说明", "整改指令", "AI物流与报关建议裁决"],
    practiceMode: "开放短驳路线、截关窗口、箱封号交接、报关字段校验、申报成熟度、动态风险矩阵、AI错误建议裁决、风险项解释和修正建议。",
    examMode: "记录学生独立提交的国内短驳方案、进站备忘录、报关申报、申报成熟度、AI裁决理由、申报风险备忘录、动态风险矩阵、风险预评结果、整改指令和修正说明。",
    studentTask: "围绕BMW E90/E91适配制动盘，说明为什么箱号、封志、毛净重、体积、8708.30归类方向、商品描述、申报价值、币制、9710监管方式、欧盟认证补证和DAP国内段成本必须在短驳、报关、订舱、清关和结算之间保持一致。",
  },
  {
    id: "06-railway",
    chapterId: "chap_yuxinou_06_railway",
    title: "第六章 班列订舱、火车发货与在途风险管理",
    steps: pickSteps([15, 16, 17]),
    objectives: ["完成前序证据放行审计、班次截关缓冲、箱型适配、铁路订舱和国际运输跟踪", "把ETA、DAP交付缓冲、SMGS/CIM换单前置、客户通知触发条件和证据回传纳入在途追踪", "识别天气、口岸拥堵、查验、货损保险、制裁筛查和汇率等在途风险，并说明成本、时效、合规、金融和违约责任影响"],
    aiIntegration: "AI读取9710交易舱、报关申报、风险预评、国内短驳、装箱和铁路订舱证据，生成放行缺口提示、低价晚发、卡航替代、平衡订舱、在途追踪准备度和风险处置建议；学生必须裁决AI建议并写明成本、时效、DAP责任、客户通知和证据链理由。",
    evidence: ["班次缓冲测算", "箱型适配", "前序证据放行审计", "货代放行指令", "运费与违约期望损失", "AI订舱建议裁决", "订舱执行备忘录", "订舱追踪准备度", "运输节点状态", "在途风险处置记录", "客户通知触发判断"],
    practiceMode: "展示订舱方案比较、箱型适配、前序放行审计、AI建议裁决、风险情景和应急方案建议。",
    examMode: "隐藏AI建议，记录学生独立选择的订舱方案、放行指令、备忘录、在途处置方案、理由和结果。",
    studentTask: "以DAP杜伊斯堡最晚交付日为约束，先核验9710交易舱、报关、风险预评、短驳和装箱证据是否可放行，再为重庆至杜伊斯堡班列选择班次和箱型，写出货代放行指令与订舱备忘录；发车后根据订舱追踪准备度、ETA、口岸节点和风险事件，完成成本、时效、合规、保险、金融汇率和客户通知的综合处置判断。",
  },
  {
    id: "07-gauge",
    chapterId: "chap_yuxinou_07_gauge",
    title: "第七章 口岸换装、轨距制度与运单交接",
    steps: pickSteps([18, 19, 20, 21]),
    objectives: ["理解标准轨、宽轨和口岸换装的物理原因", "掌握阿拉山口、布列斯特和马拉舍维奇的节点职能", "能够用封志、箱况、换装时间和场站批注说明责任分段", "能够区分铁路运单交接、合同DAP义务和承运人分段责任"],
    aiIntegration: "知识图谱展示线路节点、轨距制度、换装动作和单证转换关系；AI会混入换轨误称、漏采封志、CIM签发后前段责任消灭、全程追责和提前承认全额赔偿等错误建议，学生必须裁决并说明理由。",
    evidence: ["换装节点解释", "概念辨析答案", "口岸证据字段", "AI概念错误裁决", "SMGS/CIM运单交接说明", "阻断性交接冲突", "AI法律建议裁决", "责任边界备忘录", "客户通知文本"],
    practiceMode: "允许查看线路知识图谱、节点说明、口岸证据提示、AI错误建议、单证转换提示和责任分段反馈。",
    examMode: "记录学生对换装、轨距制度、口岸证据、运单交接责任、客户通知和减损边界的独立说明，隐藏AI裁决训练。",
    studentTask: "区分换装、换轨、换转向架，选择阿拉山口与布列斯特口岸应采集的证据字段；在马拉舍维奇识别SMGS/CIM阻断性交接问题，裁决AI法律建议，并写出责任边界备忘录和英文客户通知。",
  },
  {
    id: "08-docs-clearance",
    chapterId: "chap_yuxinou_08_docs_clearance",
    title: "第八章 单证衔接、欧洲清关与收货验收",
    steps: pickSteps([22, 23]),
    objectives: ["掌握铁路运单、商业发票、装箱单、报关单、清关草稿和认证文件的衔接逻辑", "能够处理欧洲清关前改单、USD发票折算EUR完税价格、500/498数量差异、进口税费边界、ECE R90/E-mark与REACH批次补证、收货验收争议和索赔证据保留"],
    aiIntegration: "AI提示单证缺漏、字段冲突、USD/EUR折算、税费边界和验收风险，并混入忽视币种折算、CE图片替代ECE R90、DAP下卖方完全不配合等可辨识错误；学生最终裁决并形成清关验收备忘录。",
    evidence: ["单证链审计", "清关冲突识别", "USD/EUR折算依据", "进口完税价格", "500/498数量差异", "进口税费估算", "DAP责任边界说明", "AI清关建议裁决", "收货验收处置", "清关验收备忘录"],
    practiceMode: "开放单证冲突提示、欧盟清关风险解释、USD/EUR完税价格折算、进口税费估算、AI错误建议裁决和验收争议处置反馈。",
    examMode: "记录学生独立提交的单证包、清关前补证策略、税费责任判断、验收结论和备忘录。",
    studentTask: "针对欧洲清关代理来函，识别必须改单或补证的实质冲突，把USD 23,400发票折算为EUR完税价格，判断500件订单与498件清关草稿差异，估算进口税费，说明DAP责任边界，并写出收货验收争议处理备忘录。",
  },
  {
    id: "09-closing",
    chapterId: "chap_yuxinou_09_closing",
    title: "第九章 付款结算、实验报告与复盘推演",
    steps: pickSteps([24, 25, 26]),
    objectives: ["完成USD 23,400订单的付款结算、7,020美元预付款与16,380美元尾款拆分、成本利润核算、总额法/净额法交叉验算、USD/CNY汇率与退税影响解释和实验报告", "通过多方案经营复盘提升学生在交期、利润、资金占用、违约责任、客户承诺和证据链之间的综合决策能力"],
    aiIntegration: "AI报告初评按商业决策、通关合规、物流管控、财务核算、知识掌握和综合表现给出建议；第24步AI会混入DAP进口税费误归属、退税收入化和16,380美元尾款不锁汇等可辨识结算错误，第26步AI会生成只看利润、盲目空运、忽视尾款敞口等可辨识复盘错误建议，学生必须完成裁决并形成经营复盘备忘录。",
    evidence: ["TradeHub订单金额一致性", "结算与利润表", "预付款与尾款拆分", "出口退税测算", "总额法/净额法交叉验算", "AI结算建议裁决", "AI报告初评", "教师终评", "USD 23,400订单经营复盘", "方案成本时效表", "资金占用与违约金测算", "情景压力测试", "AI复盘建议裁决", "下轮运输策略备忘录"],
    practiceMode: "提供报告结构建议、成本核算提示、退税现金流提示、总额法/净额法交叉验算、USD/CNY汇率敞口、资金占用与违约金测算、运输策略压力测试和AI复盘建议裁决反馈。",
    examMode: "记录正式结算表、利润交叉验算、实验报告、AI初评摘要和教师终评结果。",
    studentTask: "完成同一订单的付款结算和利润交叉验算，说明7,020美元预付款、16,380美元尾款和USD/CNY 7.20→7.08汇率情境下的锁汇取舍，裁决AI结算建议，再对比铁路、海运、空运和卡航四种方案，在首单交期、口岸延误、客户停线和低毛利情境下给出条件化运输策略，并写出不少于100字的经营复盘备忘录。",
  },
] satisfies YuxinouCurriculumUnit[]

export function getYuxinouCurriculumStats() {
  const stepCount = new Set(YUXINOU_CURRICULUM_UNITS.flatMap((unit) => unit.steps.map((step) => step.number))).size
  const evidenceCount = YUXINOU_CURRICULUM_UNITS.reduce((sum, unit) => sum + unit.evidence.length, 0)

  return {
    chapterCount: YUXINOU_CURRICULUM_UNITS.length,
    stepCount,
    evidenceCount,
    aiNodeCount: YUXINOU_CURRICULUM_UNITS.length,
  }
}
