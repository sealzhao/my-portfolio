export default function Projects() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">我的项目</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 项目1 */}
        <div className="border rounded p-4 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">AI 农作物识别 App</h2>
          <p className="mt-2 text-gray-700">一个基于 React Native 和 AI 模型的农业病虫害识别应用。</p>
          <a
            href="https://github.com/你的用户名/你的项目仓库"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            查看源码
          </a>
        </div>

        {/* 项目2 */}
        <div className="border rounded p-4 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">个人任务规划工具</h2>
          <p className="mt-2 text-gray-700">使用 Next.js + AI 自动生成任务计划，适合日常目标管理。</p>
          <a
            href="https://github.com/你的用户名/另一个项目"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            查看源码
          </a>
        </div>
      </div>
    </main>
  );
}
