"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  const projects = [
    {
      title: "Map Food Project",
      desc: "위치 기반 맛집 탐색 서비스",
      tech: ["React", "Next.js", "Kakao Map API"],
      detail:
        "사용자의 위치를 기반으로 주변 맛집을 탐색할 수 있는 인터랙티브 웹 서비스입니다.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "개인 포트폴리오 웹사이트",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      detail:
        "애니메이션과 인터랙션을 활용하여 사용자 경험을 고려한 포트폴리오 사이트입니다.",
      link: "#",
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

      <div className="max-w-4xl mx-auto">

        {/* 🔥 타이틀 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12"
        >
          Projects
        </motion.h1>

        {/* 🔥 프로젝트 리스트 */}
        <div className="space-y-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100"
            >
              {/* 제목 */}
              <h2 className="text-xl font-semibold">
                {project.title}
              </h2>

              {/* 한 줄 설명 */}
              <p className="text-gray-500 mt-2">
                {project.desc}
              </p>

              {/* 기술 스택 */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 상세 설명 */}
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {project.detail}
              </p>

              {/* 링크 */}
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 text-blue-500 text-sm hover:underline"
              >
                🔗 프로젝트 보기
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </main>
  );
}