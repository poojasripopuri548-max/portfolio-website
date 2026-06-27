'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const experiences = [
  {
    company: 'Thiranex',
    role: 'Full Stack Development Intern',
    period: '1 Month (2024)',
    description: 'Worked on real-world full-stack development projects using modern web technologies. Built responsive web applications, implemented backend APIs, integrated databases, and improved user experience through clean UI design.',
    achievements: [
      'Built Personal Portfolio Website',
      'Developed Blog Platform with full CRUD functionality',
      'Created E-commerce Application with shopping cart',
      'Built Task Management Application with authentication',
      'Implemented responsive design across all projects',
      'Integrated MongoDB databases for data persistence',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    company: 'Vignan\'s Foundation for Science, Technology & Research',
    role: 'B.Tech Student - AI & ML',
    period: '2024 - Present (Expected 2028)',
    description: 'Currently pursuing B.Tech in Artificial Intelligence & Machine Learning. Focused on learning AI fundamentals, machine learning basics, and AI application development. Maintaining CGPA of 8.1.',
    achievements: [
      'Learning AI & Machine Learning concepts',
      'Building AI-powered applications',
      'Exploring modern web development technologies',
      'Participating in hackathons and coding challenges',
    ],
    technologies: ['Python', 'Machine Learning', 'AI Fundamentals', 'JavaScript', 'Web Development'],
  },
  {
    company: 'Personal Projects',
    role: 'Full Stack Developer',
    period: '2023 - Present',
    description: 'Continuously building and improving full-stack projects to enhance skills and create practical solutions. Focused on creating user-friendly applications with modern technologies.',
    achievements: [
      'Developed 4+ full-stack applications',
      'Implemented authentication and authorization',
      'Created responsive and accessible UI designs',
      'Deployed applications on Vercel and GitHub',
    ],
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="Professional Journey" />

        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.company} direction="up" delay={index * 0.1}>
              <div className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2 ${index % 2 === 0 ? 'md:translate-x-0' : 'md:translate-x-0'} top-6 md:top-8 z-10`}
                />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-purple-400 font-semibold mt-1">{exp.company}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-purple-500 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}