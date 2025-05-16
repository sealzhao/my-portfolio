export default function Resume() {
  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Projects & Experience</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Highlighted Projects</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>AI-Powered Student Tool:</strong> Full-stack development of a browser extension and dashboard using React, ASP.NET Core, and MongoDB. Supported UX testing and iterative design.
          </li>
          <li>
            <strong>Stylized Text Generation:</strong> Compared GPT-2 fine-tuning and GPT-4 prompting on 5k–20k word datasets. Evaluated output quality using BLEU, ROUGE, and human scoring.
          </li>
          <li>
            <strong>Personal Website:</strong> Built and deployed a Next.js-based portfolio with Markdown blog and static generation using Tailwind CSS.
          </li>
          <li>
            <strong>CommonRoad Motion Planning:</strong> Built and tested motion planners using Python, Docker, and Anaconda for competition scenarios.
          </li>
          <li>
            <strong>Drone-Based Visual Navigation:</strong> Developed YOLOv8-based UAV system with AWS S3 and Bedrock integration for real-time barcode recognition and path planning.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Research Experience</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>3D Point Cloud Equivariance:</strong> Designed and tested SO(3)/SE(3) equivariant architectures to enhance geometric learning.
          </li>
          <li>
            <strong>CO₂ Emissions Modeling:</strong> Built a machine learning framework to estimate global daily emissions with fine-grained spatial resolution.
          </li>
          <li>
            <strong>Light Pollution Prediction:</strong> Used neural networks and environmental/socioeconomic features to map and mitigate light pollution.
          </li>
          <li>
            <strong>Post-Disaster Damage Detection:</strong> Combined CycleGAN with incremental learning to improve building collapse recognition from remote sensing images.
          </li>
        </ul>
      </section>
    </main>
  );
}
