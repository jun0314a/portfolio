"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <main className="bg-[#f9fbff] text-gray-800 min-h-screen px-6 py-20">

      {/* 🔥 뒤로가기 */}
      <button
        onClick={() => router.push("/")}
        className="text-blue-500 mb-10 hover:underline"
      >
        ← Home
      </button>

      <div className="max-w-3xl mx-auto space-y-12">

        {/* 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          About Me
        </motion.h1>

        {/* 한 줄 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-blue-600 font-medium"
        >
          사용자 경험을 중요하게 생각하는 프론트엔드 개발자입니다.
        </motion.p>

        {/* 스토리 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold">Why I Started</h2>
          <p className="text-gray-600 leading-relaxed">
            수정 예정 수정 예정 수정 예정 수정 예정 수정 예정 수정 예정
          </p>
        </motion.section>

        {/* 역량 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold">What I Do</h2>
          <p className="text-gray-600 leading-relaxed">
            수정 예정 수정 예정 수정 예정 수정 예정 수정 예정 수정 예정 
          </p>
        </motion.section>

        {/* 방향 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold">Future Goal</h2>
          <p className="text-gray-600 leading-relaxed">
            수정 예정 수정 예정 수정 예정 수정 예정 수정 예정 
          </p>
        </motion.section>

      </div>
    </main>
  );
}