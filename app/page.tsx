"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Play,
} from "lucide-react";
import ActionModalButton from "@/components/ActionModalButton";
import { projects } from "@/data/projects";

const sectionVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const metrics = [
  { value: "4年", label: "SaaS、AI 产品经验" },
  { value: "213", label: "家企业参与 AI 产品内测" },
  { value: "1w+", label: "付费企业完成流程架构迁移" },
  { value: "9", label: "个 vibe coding 项目" },
];

const workItems = [
  {
    company: "影刀",
    role: "AI 产品经理",
    time: "2025.02 - 至今",
    summary:
      "负责企业级 AI Agent 网页自动化搭建工具 0-1，推动 Chat + Workflow 混合交互与 Multi-Agent 架构演进。",
    result: "213 家企业内测，跑通 10+ 高频商业场景；HR Agent 日均处理简历 200+/人。",
  },
  {
    company: "帆软 - 简道云",
    role: "产品经理",
    time: "2022.06 - 2024.10",
    summary:
      "负责国内 Top1 零代码平台流程模块年度规划与迭代，主导 BPMN 架构重构和付费企业迁移。",
    result: "完成 1w+ 付费企业全量迁移；待办打开速度提升 95.4%，多个平台需求创造 100w+ 营收。",
  },
  {
    company: "美团",
    role: "机器学习平台产品经理（实习）",
    time: "2021.06 - 2021.09",
    summary:
      "参与机器学习平台可视化建模与资源队列体验优化，面向算法与研发团队提升训练效率。",
    result: "资源选择失败率降低 90%，分维度训练能力在算法团队落地。",
  },
];

const educationItems = [
  {
    school: "浙江大学",
    degree: "硕士 · 电气信息技术（保研）",
    time: "2019.09 - 2022.06",
    detail: "GPA 前 10%，获研究与创新奖学金、优秀研究生干部等。",
  },
  {
    school: "浙江大学",
    degree: "本科 · 自动化",
    time: "2015.09 - 2019.06",
    detail: "GPA 4.1/5.0，获国家励志奖学金、校优秀学生干部等。",
  },
];

const projectAccents = [
  "bg-[#ff6b7a]",
  "bg-[#2f81f7]",
  "bg-[#ffd23f]",
  "bg-[#8bd3c7]",
  "bg-[#ff9f68]",
  "bg-[#a9d977]",
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100svh-122px)] scroll-mt-32 items-center gap-10 px-4 pb-16 pt-12 sm:px-6 md:pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 xl:max-w-7xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="max-w-3xl"
      >
        <h1 className="hero-title max-w-[760px] font-black leading-[1.1] text-ink">
          我是{" "}
          <span className="inline-block bg-[#ff6b7a] px-2.5 text-white sm:px-4">
            王格林
          </span>
          ，
          <br />
          一个 SaaS、AI
          <br />
          产品经理
        </h1>

        <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-ink/70 sm:text-lg">
          4 年 SaaS、AI 产品经验，浙江大学本硕。做过零代码平台核心模块、企业级 AI Agent，也持续用 vibe coding 独立开发真实可用的小产品。
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <ActionModalButton
            type="email"
            value="wanggenlei2022@163.com"
            modalTitle="联系邮箱"
            className="min-w-[220px] justify-center"
          />
          <Link
            href="#projects"
            className="inline-flex h-14 min-w-[220px] items-center justify-center gap-3 rounded-xl border-[3px] border-ink bg-white px-7 text-base font-black text-ink shadow-paper transition-transform hover:-translate-y-0.5 sm:h-16 sm:text-lg"
          >
            <BriefcaseBusiness className="h-5 w-5" />
            查看项目
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 0.8, y: 16 }}
        animate={{ opacity: 1, rotate: -0.6, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[410px]"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border-4 border-ink bg-[#d7edf3] shadow-paper-lg">
          <Image
            src="/images/personal-avatar.png"
            alt="王格林个人头像"
            fill
            priority
            sizes="(min-width: 1024px) 410px, (min-width: 640px) 360px, 320px"
            className="object-cover object-[52%_43%]"
          />
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="flex min-h-[calc(100svh-112px)] scroll-mt-24 items-center bg-paper px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="关于我" />
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="flex h-full flex-col justify-between rounded-[28px] border-[3px] border-ink bg-white p-7 shadow-paper sm:p-8"
          >
            <p className="text-xl font-black leading-9 text-ink sm:text-2xl sm:leading-10">
              我关注 AI 产品从 0 到 1 的定义、验证和落地，也熟悉复杂 SaaS 模块的架构重构与规模化迁移。
            </p>
            <p className="mt-6 text-base font-semibold leading-8 text-ink/68 sm:text-lg">
              过去在帆软负责零代码平台流程模块，在影刀负责企业级 AI Agent 网页自动化工具；业余持续用 Cursor、Supabase 等工具把自己的想法做成产品。
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border-[3px] border-ink bg-white p-5 shadow-paper"
              >
                <p className="text-4xl font-black text-ink">{item.value}</p>
                <p className="mt-2 text-base font-bold text-ink/62">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-[calc(100svh-112px)] scroll-mt-24 px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Vibe coding 项目" />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.04 }}
              className="group flex min-h-[320px] flex-col rounded-2xl border-[3px] border-ink bg-white p-6 shadow-paper transition-transform hover:-translate-y-1 hover:shadow-paper-lg"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-ink ${projectAccents[index % projectAccents.length]} text-lg font-black text-ink`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-black leading-tight text-ink">{project.name}</h3>
              <p className="mt-4 text-base font-semibold leading-7 text-ink/68">
                {project.description}
              </p>
              <p className="mt-4 text-sm font-black text-ink/55">{project.impact}</p>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
                {project.githubUrl ? (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border-[3px] border-ink bg-ink px-4 text-sm font-black text-paper shadow-paper transition-transform hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex items-center gap-2 rounded-xl border-[3px] border-ink bg-ink/10 px-4 py-2.5 text-sm font-black text-ink/50"
                  >
                    <Github className="h-4 w-4" />
                    GitHub 待补充
                  </span>
                )}

                {project.videoUrl ? (
                  <Link
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border-[3px] border-ink bg-white px-4 py-2.5 text-sm font-black text-ink"
                  >
                    <Play className="h-4 w-4" />
                    视频
                  </Link>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-[calc(100svh-112px)] scroll-mt-24 bg-paper px-4 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="教育和工作经历" />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {workItems.map((item, index) => (
              <motion.article
                key={item.company}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border-[3px] border-ink bg-white p-6 shadow-paper"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-ink">{item.company}</h3>
                    <p className="mt-1 text-base font-black text-ink/55">{item.role}</p>
                  </div>
                  <p className="text-sm font-black text-ink/45">{item.time}</p>
                </div>
                <p className="mt-5 text-base font-semibold leading-7 text-ink/70">
                  {item.summary}
                </p>
                <p className="mt-4 rounded-xl border-2 border-ink bg-[#ffd23f] px-4 py-3 text-sm font-black leading-6 text-ink">
                  {item.result}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="space-y-5">
            {educationItems.map((item, index) => (
              <motion.article
                key={`${item.school}-${item.degree}`}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border-[3px] border-ink bg-white p-6 shadow-paper"
              >
                <GraduationCap className="mb-5 h-9 w-9 text-ink" />
                <h3 className="text-2xl font-black text-ink">{item.school}</h3>
                <p className="mt-2 text-base font-black text-ink/55">{item.degree}</p>
                <p className="mt-1 text-sm font-black text-ink/45">{item.time}</p>
                <p className="mt-5 text-base font-semibold leading-7 text-ink/70">
                  {item.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-32 px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-7xl rounded-3xl border-4 border-ink bg-[#2f81f7] p-8 shadow-paper-lg sm:p-10"
      >
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="mt-2 max-w-3xl text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[1.08] text-white">
              如果你对 AI 产品、SaaS 或独立项目感兴趣，欢迎联系。
            </h2>
            <p className="mt-4 text-base font-semibold text-white/75">电话：130-9373-5751</p>
          </div>
          <ActionModalButton
            type="email"
            value="wanggenlei2022@163.com"
            modalTitle="联系邮箱"
            className="!bg-white !text-ink"
          />
        </div>
      </motion.div>
    </section>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-4xl text-center"
    >
      <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-black leading-[1.08] text-ink">
        {title}
      </h2>
    </motion.div>
  );
}
