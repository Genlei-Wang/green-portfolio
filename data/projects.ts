export interface Project {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  longDescription: string;
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  image: string;
  tags: string[];
  features: string[];
  category: string;
  status: string;
  impact: string;
  year: string;
  githubRepo?: string;
}

export const projects: Project[] = [
  {
    id: "dark-mode-switcher",
    name: "网页暗黑主题插件",
    shortName: "Dark Mode",
    description: "把加载异常的白屏网页一键变成可读的暗黑模式。",
    longDescription:
      "访问 Google Labs 页面时，背景动画加载失败导致页面大片发白、文字几乎不可见。这个插件把真实痛点转成浏览器工具：一键切换暗黑主题，让文字、背景和基础层级重新可读。",
    githubUrl: "https://github.com/Genlei-Wang/WebColorChange",
    image: "/images/dark-mode-switcher.png",
    tags: ["Chrome Extension", "暗黑模式", "可读性"],
    category: "浏览器插件",
    status: "已完成",
    impact: "解决白屏不可读问题",
    year: "2026",
    features: [
      "一键切换暗黑主题",
      "自动处理文字与背景对比",
      "面向异常页面的可读性修复",
      "从个人痛点快速落地"
    ],
    githubRepo: "WebColorChange"
  },
  {
    id: "web-note-plugin",
    name: "网页随时记笔记插件",
    shortName: "Web Notes",
    description: "浏览网页时随手记录，并支持通过 API 同步到 flomo。",
    longDescription:
      "面向碎片化阅读和调研场景，不切换应用也能记录想法、保留网页上下文，并把内容同步到 flomo。项目也做过小红书视频传播，并 @ 了 flomo 的少楠。",
    githubUrl: "https://github.com/Genlei-Wang/web-note-extention--",
    image: "/images/web-note-plugin.png",
    tags: ["Chrome Extension", "flomo API", "内容沉淀"],
    category: "浏览器插件",
    status: "已发布内容",
    impact: "网页灵感直接进入知识库",
    year: "2026",
    features: [
      "网页内快速记录",
      "保留当前页面上下文",
      "支持 API 同步 flomo",
      "围绕自媒体做项目传播"
    ],
    githubRepo: "web-note-extention--"
  },
  {
    id: "green-portfolio",
    name: "个人主页",
    shortName: "Portfolio",
    description: "用于介绍作品、沉淀复盘、发布自媒体内容的个人 IP 阵地。",
    longDescription:
      "当前项目本身。目标是把独立 vibe coding 的项目、产品思考、复盘和公开链接集中展示，作为对外介绍自己的长期入口，并部署到 Vercel。",
    githubUrl: "https://github.com/Genlei-Wang/green-portfolio",
    image: "/images/green-portfolio.png",
    tags: ["Next.js", "Vercel", "个人 IP"],
    category: "个人网站",
    status: "迭代中",
    impact: "个人作品与内容中枢",
    year: "2026",
    features: [
      "项目作品集展示",
      "产品复盘入口",
      "自媒体资料承接",
      "支持后续补充部署与视频链接"
    ],
    githubRepo: "green-portfolio"
  },
  {
    id: "christmas-tree",
    name: "圣诞树",
    shortName: "Xmas Tree",
    description: "给家里人的节日小礼物，也作为轻量互动网页发布到 Vercel。",
    longDescription:
      "一个偏娱乐和情感表达的小项目，用网页承载节日氛围，部署在 Vercel，并在小红书发布过内容。",
    githubUrl: "https://github.com/Genlei-Wang/christmas-tree",
    image: "/images/christmas-tree.png",
    tags: ["互动网页", "Vercel", "小红书"],
    category: "创意网页",
    status: "已发布",
    impact: "把技术变成节日礼物",
    year: "2025",
    features: [
      "节日主题互动体验",
      "Vercel 部署",
      "面向家人的情感表达",
      "小红书内容发布"
    ],
    githubRepo: "christmas-tree"
  },
  {
    id: "boss-agent",
    name: "Boss直聘 Agent 插件",
    shortName: "HR Agent",
    description: "企业内部 HR 正在使用的招聘 Agent 插件，已分析 1900 份简历。",
    longDescription:
      "从 0 到 1 落地的企业内部工具。面向 HR 与 HRBP 的真实招聘流程，让 AI 辅助分析 Boss 直聘简历；目前内部 HR 正在使用，HRBP 一个月已让 AI 分析 1900 份简历，也发布过介绍视频。",
    githubUrl: "https://github.com/Genlei-Wang/HR_Agent_Boss",
    image: "/images/boss-agent.png",
    tags: ["AI Agent", "招聘", "企业内用"],
    category: "AI 工作流",
    status: "企业内使用",
    impact: "1 个月分析 1900 份简历",
    year: "2026",
    features: [
      "招聘场景从 0 到 1 落地",
      "辅助 HR 分析简历",
      "真实业务流程内使用",
      "已发布项目介绍视频"
    ],
    githubRepo: "HR_Agent_Boss"
  },
  {
    id: "multi-ai-query",
    name: "同时问多个 AI LLM 插件",
    shortName: "Multi LLM",
    description: "一次补充关键信息，同时让多个模型参与发散调研和头脑风暴。",
    longDescription:
      "做 AI 产品规划时，Gemini、ChatGPT、Claude 等模型给出的报告视角不同。这个插件把重复复制 prompt、补充上下文、等待回答的过程自动化，让多模型并行参与调研与发散。",
    githubUrl: "https://github.com/Genlei-Wang/MultiLLM-Connector",
    image: "/images/multi-ai-query.png",
    tags: ["AI 工具", "浏览器插件", "调研自动化"],
    category: "AI 效率工具",
    status: "工具可用",
    impact: "多模型并行输出",
    year: "2026",
    features: [
      "同时向多个 AI 平台提问",
      "一次性补充关键上下文",
      "适合产品规划与调研",
      "减少重复复制粘贴"
    ],
    githubRepo: "MultiLLM-Connector"
  },
  {
    id: "daily-report",
    name: "日报通",
    shortName: "AutoDaily",
    description: "给银行职员使用的 Windows 自动日报软件，每天早上节省 10 分钟。",
    longDescription:
      "为银行职员开发的桌面自动化工具，自动操作日报流程，并把日报结果通过邮件发送到手机。目前 1 人持续使用，每天早上节省约 10 分钟，可以多睡 10 分钟。",
    githubUrl: "https://github.com/Genlei-Wang/AutoDaily",
    image: "/images/daily-report.png",
    tags: ["Windows 应用", "RPA", "邮件自动化"],
    category: "桌面软件",
    status: "真实用户使用",
    impact: "每天节省 10 分钟",
    year: "2026",
    features: [
      "自动完成日报操作",
      "结果自动邮件发送到手机",
      "面向非技术用户",
      "每天稳定节省时间"
    ],
    githubRepo: "AutoDaily"
  },
  {
    id: "icebreaker-games",
    name: "破冰游戏汇总",
    shortName: "Icebreakers",
    description: "围绕产品组高频玩法整理的破冰游戏工具，目前先做了海龟汤。",
    longDescription:
      "产品组经常玩海龟汤等破冰游戏，因此先把最高频的玩法做成可沉淀、可复用的网页工具，后续可以扩展更多游戏类型。",
    githubUrl: "https://github.com/Genlei-Wang/ice-breaker-collection",
    image: "/images/icebreaker-games.png",
    tags: ["团队协作", "游戏工具", "海龟汤"],
    category: "团队工具",
    status: "MVP",
    impact: "先覆盖产品组高频玩法",
    year: "2026",
    features: [
      "海龟汤题目汇总",
      "适合团队破冰",
      "可持续扩展玩法",
      "面向内部真实场景"
    ],
    githubRepo: "ice-breaker-collection"
  },
  {
    id: "high-eq-rewriter",
    name: "高情商嘴替",
    shortName: "EQ Writer",
    description: "微信小程序，把难开口的话改写成更得体的表达。",
    longDescription:
      "一个类似 Hermes 架构的微信小程序项目，面向社交、职场和沟通场景，帮助用户把原始表达改写得更高情商、更清晰、更容易被接受。",
    githubUrl: "https://github.com/Genlei-Wang/High-EQ-Responder",
    image: "/images/high-eq-rewriter.png",
    tags: ["微信小程序", "AI 改写", "沟通表达"],
    category: "AI 小程序",
    status: "建设中",
    impact: "降低沟通表达成本",
    year: "2026",
    features: [
      "多场景表达改写",
      "面向微信小程序端",
      "参考 Hermes 架构思路",
      "适合社交与职场沟通"
    ],
    githubRepo: "High-EQ-Responder"
  }
];
