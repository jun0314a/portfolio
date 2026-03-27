"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const buttons = [
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
  ];

  return (
    <main className="bg-[#f9fbff] text-gray-800 min-h-screen">

      {/* 🔥 상단 */}
      <section className="h-[45vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500">

        <h1 className="text-5xl font-bold tracking-widest text-white">
          Portfolio
        </h1>

        <p className="text-sm mt-2 text-blue-100 font-medium">
          FRONTEND DEVELOPER
        </p>

        <p className="mt-6 text-lg text-white/90">
          사용자 경험을 설계하는 프론트엔드 개발자
        </p>

      </section>

      {/* 🔥 프로필 */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center">

        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full mb-4" />

          <h2 className="text-2xl font-semibold">
            김성준
          </h2>

          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm text-blue-600">
            <a href="tel:01047943225">📞 010-4794-3225</a>
            <a href="mailto:jun0314a@naver.com">✉️ jun0314a@naver.com</a>
            <a href="https://github.com/jun0314a" target="_blank">
              💻 GitHub
            </a>
          </div>

          <p className="text-gray-500 mt-3">
            사용자 중심의 인터랙티브 웹을 만드는 개발자입니다.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-600 border border-blue-100">
          React와 Next.js 기반으로 직관적인 UI와 부드러운 사용자 경험을 구현합니다.
        </div>

        <div className="w-full h-px bg-blue-100 my-10" />

      </section>

      {/* 🔥 버튼 */}
      <section className="flex flex-col items-center pb-20">

        <p className="text-blue-500 mb-6 font-medium">
          궁금한 내용을 선택해보세요
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={() => router.push(btn.path)}
              className="px-7 py-3 rounded-full border border-blue-500 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
            >
              {btn.label}
            </button>
          ))}

        </div>
      </section>

      {/* 🔥 footer */}
      <footer className="text-center text-sm text-gray-400 py-10 border-t border-blue-100">
        © 2026 김성준 Portfolio
      </footer>

    </main>
  );
}