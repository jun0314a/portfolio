"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Experience() {
  const router = useRouter();

  const experiences = [
    {
      title: "대학교",
      period: "2020 - 2026",
      desc: "컴퓨터공학과 재학",
      detail:
        "자료구조, 알고리즘, 웹 개발 등 전반적인 컴퓨터 공학 기초를 학습하며 개발 역량을 쌓았습니다.",
    },
    {
      title: "군 복무",
      period: "2021 - 2022",
      desc: "군 복무",
      detail:
        "책임감과 협업의 중요성을 배우고, 조직 내에서 맡은 역할을 성실히 수행하는 경험을 했습니다.",
    },
    {
      title: "인턴",
      period: "2026 - 현재",
      desc: "뱅크샐러드 금융서비스 인턴",
      detail:
        "수정 예정",
    },
  ];

  return (
    <main className="bg-[#f9fbff] text-gray-800 min-h-screen px-6 py-20">

      {/* 🔥 뒤로가기 */}
      <button
        onClick={() => router.push("/")}
        className="text-blue-500 mb-10 hover:underline"
      >
        ← Home
      </button>

      <div className="max-w-3xl mx-auto">

        {/* 🔥 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12"
        >
          Experience
        </motion.h1>

        {/* 🔥 타임라인 */}
        <div className="relative border-l-2 border-blue-200 pl-6 space-y-10">

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* 점 */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 bg-blue-500 rounded-full" />

              {/* 내용 */}
              <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100">

                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">
                    {exp.title}
                  </h2>
                  <span className="text-sm text-blue-500">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-500 mt-1">
                  {exp.desc}
                </p>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {exp.detail}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </main>
  );
}