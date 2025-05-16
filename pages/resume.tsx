export default function Resume() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">我的简历</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">基本信息</h2>
        <p>姓名：Yuyu Zhao</p>
        <p>邮箱：you@example.com</p>
        <p>GitHub：<a className="text-blue-500" href="https://github.com/你的用户名" target="_blank">github.com/你的用户名</a></p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">教育背景</h2>
        <ul className="list-disc list-inside">
          <li>某某大学，本科，计算机科学，2020 - 2024</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">技能与技术</h2>
        <ul className="list-disc list-inside">
          <li>React, Next.js, TypeScript</li>
          <li>Node.js, Express</li>
          <li>Python, 数据分析</li>
          <li>Git, Linux, REST API</li>
        </ul>
      </section>
    </main>
  );
}
