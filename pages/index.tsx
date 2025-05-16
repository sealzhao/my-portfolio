import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I’m <span className="text-black">Yuyu Zhao</span></h1>
      <p className="text-lg mb-6">Welcome to my personal site! Here you can find my resume, projects, blog, and contact.</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/resume">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Resume</button>
        </Link>
        <Link href="/projects">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">View Projects</button>
        </Link>
        <Link href="/blog">
          <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Read Blog</button>
        </Link>
        <Link href="/contact">
          <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">Contact Me</button>
        </Link>
      </div>
    </main>
  );
}
