"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

        <motion.h1
          whileHover={{ scale: 1.05, y: -4 }}
          className="text-5xl font-bold tracking-widest text-white"
        >
          Portfolio
        </motion.h1>

        <motion.p
          whileHover={{ scale: 1.05 }}
          className="text-sm mt-2 text-blue-100 font-medium"
        >
          FRONTEND DEVELOPER
        </motion.p>

        <motion.p
          whileHover={{ scale: 1.05, y: -2 }}
          className="mt-6 text-lg text-white/90"
        >
          사용자 경험을 설계하는 프론트엔드 개발자
        </motion.p>

      </section>

      {/* 🔥 프로필 (왼쪽 정렬 핵심) */}
      <section className="max-w-4xl mx-auto px-6 py-10">

        <div className="flex items-start gap-6 mb-6">

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-20 h-20 bg-blue-100 rounded-full"
          />

          <div>
            <motion.h2
              whileHover={{ x: 3 }}
              className="text-2xl font-semibold"
            >
              김성준
            </motion.h2>

            {/* Contact */}
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-blue-600">
              <a href="tel:01047943225">📞 010-4794-3225</a>
              <a href="mailto:jun0314a@naver.com">✉️ jun0314a@naver.com</a>
              <a href="https://github.com/jun0314a" target="_blank">
                💻 GitHub
              </a>
            </div>

            <motion.p
              whileHover={{ x: 3 }}
              className="text-gray-500 mt-3"
            >
              사용자 중심의 인터랙티브 웹을 만드는 개발자입니다.
            </motion.p>
          </div>

        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-blue-50 p-4 rounded-lg text-sm text-gray-600 border border-blue-100"
        >
          React와 Next.js 기반으로 직관적인 UI와 부드러운 사용자 경험을 구현합니다.
        </motion.div>

        <div className="w-full h-px bg-blue-100 my-10" />

      </section>

      {/* 🔥 버튼 */}
      <section className="flex flex-col items-center pb-20">

        <p className="text-blue-500 mb-6 font-medium">
          궁금한 내용을 선택해보세요
        </p>

        <div className="flex gap-4 flex-wrap justify-center">

          {buttons.map((btn) => (
            <motion.button
              key={btn.label}
              onClick={() => router.push(btn.path)}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#2563eb",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-full border border-blue-500 text-blue-600 font-medium"
            >
              {btn.label}
            </motion.button>
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