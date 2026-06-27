'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import TiltCard from '@/components/TiltCard';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
  FaGithub,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiRedis,
  SiFirebase,
  SiVercel,
  SiOpenai,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaPython className="text-2xl" />,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'JavaScript', icon: <FaReact /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'HTML5', icon: <FaReact /> },
      { name: 'CSS3', icon: <FaReact /> },
    ],
  },
  {
    title: 'Frontend',
    icon: <FaReact className="text-2xl" />,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'HTML', icon: <FaReact /> },
      { name: 'CSS', icon: <FaReact /> },
      { name: 'JavaScript', icon: <FaReact /> },
      { name: 'Responsive Design', icon: <FaReact /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FaNodeJs className="text-2xl" />,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <FaNodeJs /> },
      { name: 'REST APIs', icon: <FaDatabase /> },
      { name: 'Python', icon: <FaPython /> },
    ],
  },
  {
    title: 'Database',
    icon: <SiMongodb className="text-2xl" />,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Data Modeling', icon: <SiMongodb /> },
      { name: 'CRUD Operations', icon: <SiMongodb /> },
      { name: 'Database Design', icon: <SiMongodb /> },
    ],
  },
  {
    title: 'Tools',
    icon: <FaGitAlt className="text-2xl" />,
    color: 'from-gray-500 to-slate-500',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <FaGitAlt /> },
      { name: 'Vercel', icon: <SiVercel /> },
    ],
  },
  {
    title: 'AI & ML',
    icon: <SiOpenai className="text-2xl" />,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'AI Fundamentals', icon: <SiOpenai /> },
      { name: 'Machine Learning', icon: <FaPython /> },
      { name: 'AI App Development', icon: <SiOpenai /> },
      { name: 'Python ML', icon: <FaPython /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Skills" subtitle="Technologies I Work With" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} direction="up" delay={index * 0.1}>
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
                >
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Header */}
                  <div className="relative flex items-center gap-3 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="relative grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                      >
                        <span className="text-xl text-gray-400 group-hover:text-white transition-colors">
                          {skill.icon}
                        </span>
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}