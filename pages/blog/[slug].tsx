import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Script from "next/script";
import ShareButtons from "../../components/ShareButtons"; // ← 根据实际路径调整


export default function BlogPost({ title, content }: { title: string; content: string }) {
  // 复制当前网址
  function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    alert("📋 链接已复制到剪贴板！");
  }

  // 添加到书签提示
  function bookmarkHelp() {
    alert("请使用快捷键：\nWindows / Linux：Ctrl + D\nmacOS：⌘ + D\n将本页添加到书签栏！");
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      {/* 📎 复制链接 + 🌟 添加书签 */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={copyLink}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
        >
          📎 复制文章链接
        </button>
        <button
          onClick={bookmarkHelp}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm"
        >
          🌟 添加到书签
        </button>
      </div>

      {/* 正文内容 */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {/* 🔗 分享按钮区域 */}
      <ShareButtons title={title} />

      {/* 💬 Giscus 评论区 */}
      <div className="mt-16">
        <Script
          src="https://giscus.app/client.js"
          data-repo="sealzhao/my-blog-comments"
          data-repo-id="R_kgDOOnKLHA"
          data-category="General"
          data-category-id="DIC_kwDOOnKLHM4Cp84S"
          data-mapping="pathname"
          data-strict="0"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="preferred_color_scheme"
          data-lang="zh-CN"
          crossOrigin="anonymous"
          async
        />
        <div className="giscus" />
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), "posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    props: {
      title: data.title,
      content: htmlContent,
    },
  };
}
