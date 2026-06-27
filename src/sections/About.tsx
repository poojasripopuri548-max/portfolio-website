'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const timeline = [
  {
    year: '2026-Present',
    title: 'B.Tech in AI & ML',
    description: 'Currently pursuing B.Tech in Artificial Intelligence & Machine Learning at Vignan\'s Foundation for Science, Technology & Research. CGPA: 8.1. Expected Graduation: 2028.',
    icon: '🎓',
  },
  {
    year: '2026',
    title: 'Full Stack Development Intern',
    description: 'Completed 1-month internship at Thiranex. Worked on real-world full-stack development projects including Personal Portfolio, Blog Platform, E-commerce Application, and Task Management App.',
    icon: '💼',
  },
  {
    year: '2025',
    title: 'Started Coding Journey',
    description: 'Began learning web development with HTML, CSS, and JavaScript. Built first projects and discovered passion for creating digital experiences and AI-powered applications.',
    icon: '💡',
  },
  {
    year: '2024',
    title: 'Career Objective',
    description: 'Aspired to build scalable software products that create meaningful impact. Goal to secure opportunities as a Software Engineer, Full Stack Developer, or AI Engineer.',
    icon: '🚀',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="My Journey" />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Story Section */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">My Story</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm PoojaSri Popuri, a passionate Full Stack Developer and AI & ML undergraduate with a strong interest in creating innovative web applications. 
                I enjoy turning ideas into practical solutions that deliver meaningful user experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey into software development began with curiosity about how websites and applications work. Since then, I have continuously expanded my skills by building full-stack projects, learning modern technologies, and exploring AI-powered applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe in writing clean, maintainable code, continuously improving my problem-solving skills, and staying updated with emerging technologies. My goal is to contribute to impactful software products while growing as a Software Engineer.
              </p>
              <div className="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                <p className="text-purple-300 text-sm font-semibold">Education</p>
                <p className="text-white mt-2">B.Tech – Artificial Intelligence & Machine Learning</p>
                <p className="text-gray-400 text-sm">Vignan's Foundation for Science, Technology & Research</p>
                <p className="text-gray-400 text-sm">CGPA: 8.1 | Expected Graduation: 2028</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Timeline Section */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Learning Journey</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-12 pb-8 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-sm"
                    >
                      {item.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors">
                      <span className="text-purple-400 text-sm font-semibold">{item.year}</span>
                      <h4 className="text-white font-semibold mt-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}