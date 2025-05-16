export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">你好，我是 Yuyu Zhao</h1>
      <p className="text-lg mb-6 text-center">
        欢迎来到我的个人主页！这里有我的简历、项目、博客和联系方式。
      </p>
      <div className="flex gap-4">
        <a
          href="/resume"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          查看简历
        </a>
        <a
          href="/projects"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          查看项目
        </a>
        <a
          href="/blog"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          阅读博客
        </a>
        <a
          href="/contact"
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          联系我
        </a>
      </div>
    </main>
  );
}
