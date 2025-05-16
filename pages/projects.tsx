export default function Projects() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 项目1 */}
        <div className="border rounded p-4 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">AI-Powered Student Tool</h2>
          <p className="mt-2 text-gray-700">
            A full-stack AI tool featuring a browser extension and dashboard. Built with React, ASP.NET Core, and MongoDB, supporting task automation and user research.
          </p>
          <a
            href="https://github.com/sealzhao/ai-student-tool"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            View Source
          </a>
        </div>

        {/* 项目2 */}
        <div className="border rounded p-4 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">Style-Controlled Text Generation</h2>
          <p className="mt-2 text-gray-700">
            Compared GPT-2 fine-tuning with GPT-4 prompting to mimic narrative styles. Evaluated with BLEU, ROUGE, and human ratings.
          </p>
          <a
            href="https://github.com/sealzhao/style-generation"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            View Source
          </a>
        </div>

        {/* 项目3 */}
        <div className="border rounded p-4 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">Next.js Personal Website</h2>
          <p className="mt-2 text-gray-700">
            A portfolio site with resume, project showcase, and Markdown blog support. Built with Next.js and Tailwind CSS.
          </p>
          <a
            href="https://github.com/sealzhao/portfolio-site"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            View Source
          </a>
        </div>

        {/* 项目4 */}
        <div className="border rounded p-4 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold">Motion Planning for CommonRoad</h2>
          <p className="mt-2 text-gray-700">
            Developed and tested motion planners using Python and Docker for autonomous vehicle benchmark tasks under the CommonRoad framework.
          </p>
          <a
            href="https://github.com/sealzhao/commonroad-planner"
            target="_blank"
            className="text-blue-500 underline mt-2 inline-block"
          >
            View Source
          </a>
        </div>
      </div>
    </main>
  );
}
