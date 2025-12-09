export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  liveUrl?: string;
  image: string;
  tags: string[];
  features: string[];
  githubRepo?: string; // GitHub仓库名，用于API调用
}

export const projects: Project[] = [
  {
    id: "web-note-plugin",
    name: "网页笔记插件",
    description: "快速记录网页上的想法和灵感",
    longDescription: "一款浏览器插件，让您在工作浏览网页时，能够快速记录突然冒出的有价值想法。无需切换应用，一键保存，提高工作效率。",
    githubUrl: "",
    image: "/images/web-note-plugin.png",
    tags: ["浏览器插件", "Chrome Extension", "笔记工具"],
    features: [
      "一键快速记录",
      "自动保存网页上下文",
      "支持标签分类",
      "数据本地存储"
    ],
    githubRepo: ""
  },
  {
    id: "dark-mode-switcher",
    name: "网页背景颜色切换插件",
    description: "解决网页加载问题，一键切换暗黑模式",
    longDescription: "针对某些网站（如Google Labs）背景动画加载失败导致界面纯白、文字看不清的问题，开发了这款插件。一键切换暗黑模式，保护眼睛，提升浏览体验。",
    githubUrl: "",
    image: "/images/dark-mode-switcher.png",
    tags: ["浏览器插件", "暗黑模式", "用户体验"],
    features: [
      "一键切换暗黑模式",
      "自动检测页面加载状态",
      "自定义颜色方案",
      "支持所有网站"
    ],
    githubRepo: ""
  },
  {
    id: "multi-ai-query",
    name: "同时问多AI插件",
    description: "一次输入，同时向多个AI提问",
    longDescription: "在需要AI输出PRD参考时，同样的prompt想同时问ChatGPT、Gemini、DeepSeek等多个AI平台。手动复制粘贴效率低下，于是开发了这款插件，通过录制各网页输入框和发送按钮，实现一次性向所有AI平台发送查询。",
    githubUrl: "",
    image: "/images/multi-ai-query.png",
    tags: ["浏览器插件", "自动化", "AI工具", "效率提升"],
    features: [
      "同时向多个AI平台提问",
      "自动录制网页元素",
      "一键批量发送",
      "支持主流AI平台"
    ],
    githubRepo: ""
  },
  {
    id: "screen-automation",
    name: "电脑屏幕操作自动化工具",
    description: "录制、回放、定时运行的Windows桌面软件",
    longDescription: "为银行职员开发的自动化工具，解决每天5-30分钟的重复性日报工作。通过录制屏幕操作（点击、登录、下载表格、处理数据），自动计算并发送到部门群。相比TinyTask和System Scheduler，这款软件仅50KB，界面简洁，支持录制和定时运行，更适合非技术用户。",
    githubUrl: "https://github.com/Genlei-Wang/AutoDaily",
    image: "/images/screen-automation.png",
    tags: ["Windows应用", "自动化", "RPA", "桌面软件"],
    features: [
      "屏幕操作录制",
      "定时自动运行",
      "轻量级（50KB）",
      "简洁易用的界面",
      "支持复杂操作流程"
    ],
    githubRepo: ""
  }
];

