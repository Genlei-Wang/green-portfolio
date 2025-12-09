"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    name: "Email",
    icon: Mail,
    value: "21910163@zju.edu.cn",
    href: "mailto:21910163@zju.edu.cn",
    description: "发送邮件联系我",
  },
  {
    name: "GitHub",
    icon: Github,
    value: "github.com/Genlei-Wang",
    href: "https://github.com/Genlei-Wang",
    description: "查看我的开源项目",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com",
    description: "职业社交网络",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 pt-32 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          联系方式
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          如果您对我的项目感兴趣，或者有合作机会，欢迎通过以下方式联系我。
          我会尽快回复您的消息。
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={method.href}
                  target={method.name !== "Email" ? "_blank" : undefined}
                  rel={method.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="group block rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-lg bg-zinc-100 p-2 group-hover:bg-zinc-200 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
                      <Icon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                      {method.name}
                    </h3>
                  </div>
                  <p className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {method.value}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {method.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50"
        >
          <MessageSquare className="mx-auto mb-4 h-12 w-12 text-zinc-400 dark:text-zinc-500" />
          <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            期待与您交流
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            无论是技术讨论、项目合作，还是求职机会，都欢迎您联系我。
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

