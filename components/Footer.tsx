import ActionModalButton from "@/components/ActionModalButton";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-black">Green Wang</p>
          <p className="mt-1 text-sm font-medium text-paper/70">
            AI 产品经理 / Vibe Coding Builder / B 端工具实践者
          </p>
        </div>
        <div className="flex items-center gap-4">
          <ActionModalButton
            type="github"
            value="https://github.com/Genlei-Wang"
            compact
            title="查看 GitHub"
            modalTitle="GitHub"
            className="!h-10 !w-10 !rounded-lg border-2 border-paper/35"
          />
          <ActionModalButton
            type="email"
            value="wanggenlei2022@163.com"
            compact
            title="查看邮箱"
            modalTitle="联系邮箱"
            className="!h-10 !w-10 !rounded-lg border-2 border-paper/35"
          />
        </div>
      </div>
    </footer>
  );
}
