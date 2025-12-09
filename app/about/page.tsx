"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Zap, Target } from "lucide-react";

const skills = [
  { name: "产品设计", icon: Target, description: "用户体验设计、产品规划、需求分析" },
  { name: "前端开发", icon: Code, description: "React、Next.js、TypeScript、Tailwind CSS" },
  { name: "AI应用", icon: Lightbulb, description: "AI工具开发、Prompt工程、自动化流程" },
  { name: "效率工具", icon: Zap, description: "浏览器插件、桌面应用、自动化脚本" },
];

const experiences = [
  {
    title: "SaaS、AI、B端产品经理",
    period: "至今",
    description: "专注于SaaS产品设计、AI应用开发和B端产品规划，通过技术创新解决实际问题，开发高效易用的产品工具。",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 pt-32 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          关于我
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          我是一名SaaS、AI、B端产品经理，专注于通过技术创新解决实际问题。
          我热爱开发高效、易用的工具，帮助用户提升工作效率，改善使用体验。
          从浏览器插件到桌面应用，从AI工具到自动化脚本，我致力于将想法转化为实际可用的产品。
        </p>

        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          核心技能
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
                    <Icon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          工作经历
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {exp.title}
                </h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

