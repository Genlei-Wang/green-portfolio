import Link from "next/link";
import ActionModalButton from "@/components/ActionModalButton";

const navItems = [
  { href: "/#home", label: "首页" },
  { href: "/#about", label: "关于我" },
  { href: "/#projects", label: "项目" },
  { href: "/#experience", label: "经历" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent px-4 py-4 sm:py-5">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-[28px] border-4 border-ink bg-white px-5 py-3 shadow-nav sm:px-7">
        <Link
          href="/#home"
          className="h-11 w-11 shrink-0 rounded-full border-[9px] border-ink sm:h-12 sm:w-12"
          aria-label="Green home"
        />

        <div className="hidden items-center gap-6 md:flex lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-black text-ink transition-opacity hover:opacity-65"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <ActionModalButton
          type="email"
          value="wanggenlei2022@163.com"
          compact
          title="查看邮箱"
          modalTitle="联系邮箱"
        />
      </nav>
    </header>
  );
}
