"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const toggleProject = (project: string) => {
    setActiveProject(activeProject === project ? null : project);
  };

  return (
    <main className="bg-[#f9f9f9] text-gray-800 min-h-screen px-6 py-20 space-y-32">

      {/* 🏠 Hero + 네임카드 */}
<section className="text-center space-y-8">

  <h1 className="text-5xl font-bold">김성준</h1>
  <p className="text-gray-500 text-lg">Frontend Developer</p>

  {/* 📇 네임카드 */}
  <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-sm">
    
    <div className="space-y-2 text-gray-600 text-sm">
      <p>📍 Seoul, Korea</p>
      <p>📞 010-4794-3225</p>
      <p>✉️ jun0314a@naver.com</p>
      <p>💻 github.com/jun0314a</p>
    </div>

  </div>

</section>
      {/* 👨‍💻 About */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold mb-6">About</h2>
        <p className="text-gray-600 leading-relaxed">
          아무거나 아무거나아무거나아무거나
        </p>
      </motion.section>

      {/* 📝 자기소개서 */}
      <section className="text-center">
        <button
          onClick={() => setShowIntro(!showIntro)}
          className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition"
        >
          {showIntro ? "닫기" : "자기소개서 보기"}
        </button>

        {showIntro && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm text-left"
          >
            <p className="text-gray-700 leading-relaxed">
              열심히 할게요.
              <br /><br />
              모두 화이팅
              <br /><br />
              화이팅입니다
            </p>
          </motion.div>
        )}
      </section>

      {/* 💼 Experience */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Experience
        </h2>
        

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold">대학</h3>
          <p className="text-gray-500 text-sm">2020 - 2026</p>
          <p className="mt-2 text-gray-600">
            컴퓨터공학과 재학
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold">군대</h3>
          <p className="text-gray-500 text-sm">2021 - 2022</p>
          <p className="mt-2 text-gray-600">
            군대임다
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-semibold">인턴</h3>
          <p className="text-gray-500 text-sm">2026 - 현재</p>
          <p className="mt-2 text-gray-600">
            인턴
          </p>
        </div>
      </motion.section>

      {/* 🛠️ Skills */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {["HTML", "CSS", "JavaScript", "React", "Next.js"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white rounded-full shadow-sm text-sm hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* 🛠️ Projects */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          Selected Works
        </h2>

        <div className="space-y-6">

          <motion.div
            whileHover={{ scale: 1.03 }}
            onClick={() => toggleProject("map")}
            className="bg-white p-8 rounded-3xl shadow-sm cursor-pointer"
          >
            <h3 className="text-xl font-semibold">Map Food Project</h3>
            <p className="mt-3 text-gray-500">
              위치 기반 맛집 탐색 서비스
            </p>

            {activeProject === "map" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 border-t pt-4 text-gray-600"
              >
                <p>지도 기반 인터랙티브 웹 서비스입니다.</p>
                <p className="mt-2 text-sm text-gray-400">
                  React / Next.js / Kakao Map API
                </p>
              </motion.div>
            )}
          </motion.div>

        </div>
      </section>

    </main>
  );
}