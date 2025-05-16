import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
}

export default function Blog({ posts}: { posts: BlogPost[] }) {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">博客文章</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <span className="text-xl text-blue-600 underline">{post.title}</span>
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      date: String(data.date), // ✅ 转换为字符串
    };

  });

  return {
    props: {
      posts,
    },
  };
}
