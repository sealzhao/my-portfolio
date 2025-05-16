import { useEffect, useState } from "react";

export default function ShareButtons({ title }: { title: string }) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  function openWeChatShare() {
    const wechat = window.open("", "wechatShare", "width=300,height=360");
    if (wechat) {
      wechat.document.write(`
        <html>
          <head><title>微信扫码分享</title></head>
          <body style="text-align:center; font-family:sans-serif;">
            <p>使用微信扫码分享：</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
              shareUrl
            )}" alt="QR Code" />
          </body>
        </html>
      `);
    }
  }

  return (
    <div className="mt-6 mb-12 space-y-2 text-sm text-gray-600">
      <p className="font-semibold">🔗 分享这篇文章：</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-blue-400 text-white rounded hover:bg-blue-500"
        >
          🐦 Twitter
        </a>

        <a
          href={`mailto:?subject=${encodeURIComponent(
            title
          )}&body=我想分享这篇博客给你：${encodeURIComponent(shareUrl)}`}
          className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          ✉️ 邮件分享
        </a>

        <button
          onClick={openWeChatShare}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          💬 微信
        </button>
      </div>
    </div>
  );
}
