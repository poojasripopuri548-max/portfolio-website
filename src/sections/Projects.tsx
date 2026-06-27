'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'AI App Generator',
    description: 'An AI-powered application that helps users generate applications with intelligent workflows and modern UI. Designed with scalability, clean architecture, and user-friendly interaction in mind.',
    longDescription: 'Built an AI-powered application generator that creates intelligent workflows with modern UI. The application is designed with scalability and clean architecture in mind, providing users with a seamless experience.',
    problem: 'Developers and users need quick ways to prototype and generate applications with intelligent features.',
    solution: 'Built an AI-powered app generator with intelligent workflows and modern, user-friendly interface.',
    result: 'Successfully created a scalable application generator with clean architecture.',
    features: [
      'AI-powered app generation',
      'Intelligent workflows',
      'Modern UI design',
      'Scalable architecture',
      'User-friendly interface',
      'Clean code structure',
    ],
    techStack: ['JavaScript', 'Node.js', 'AI Integration', 'Modern Web Technologies'],
    metrics: ['AI-powered', 'Scalable', 'User-friendly'],
    liveUrl: 'https://github.com/poojasripopuri548-max/ai-app-generator',
    githubUrl: 'https://github.com/poojasripopuri548-max/ai-app-generator',
    image: '/projects/ai-app-generator.png',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Application',
    description: 'A complete e-commerce platform featuring product browsing, shopping cart functionality, responsive design, and an intuitive user experience.',
    longDescription: 'Developed a full-featured e-commerce application with product browsing, shopping cart, and checkout functionality. Built with responsive design principles to ensure great user experience across all devices.',
    problem: 'Small businesses need affordable e-commerce solutions with essential features.',
    solution: 'Created a complete e-commerce platform with shopping cart and responsive design.',
    result: 'Built a functional e-commerce application with intuitive user experience.',
    features: [
      'Product browsing',
      'Shopping cart',
      'Checkout functionality',
      'Responsive design',
      'Intuitive UX',
      'User-friendly interface',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    metrics: ['Full e-commerce', 'Responsive', 'User-friendly'],
    liveUrl: 'https://github.com/poojasripopuri548-max/Ecommerce-app',
    githubUrl: 'https://github.com/poojasripopuri548-max/Ecommerce-app',
    image: '/projects/ecommerce-app.png',
    featured: false,
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A modern blogging platform where users can create, edit, manage, and publish articles with a clean and responsive interface.',
    longDescription: 'Built a comprehensive blogging platform with full CRUD operations for articles. Users can create, edit, manage, and publish content with a clean, responsive interface that works seamlessly across devices.',
    problem: 'Content creators need simple, intuitive platforms to publish and manage their articles.',
    solution: 'Created a modern blog platform with full article management capabilities.',
    result: 'Developed a functional blog platform with clean and responsive interface.',
    features: [
      'Create articles',
      'Edit content',
      'Manage posts',
      'Publish articles',
      'Responsive design',
      'Clean interface',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    metrics: ['Full CRUD', 'Responsive', 'Clean UI'],
    liveUrl: 'https://github.com/poojasripopuri548-max/blog-platform',
    githubUrl: 'https://github.com/poojasripopuri548-max/blog-platform',
    image: '/projects/blog-platform.png',
    featured: false,
  },
  {
    id: 4,
    title: 'Task Management Application',
    description: 'A productivity application that allows users to organize tasks efficiently with CRUD operations, authentication, and responsive dashboards.',
    longDescription: 'Built a task management application with full CRUD operations for tasks. Includes user authentication, responsive dashboards, and efficient task organization features to help users stay productive.',
    problem: 'Users need efficient tools to organize and manage their daily tasks.',
    solution: 'Created a task management app with authentication and responsive dashboards.',
    result: 'Built a productive task management application with efficient organization.',
    features: [
      'Task CRUD operations',
      'User authentication',
      'Responsive dashboards',
      'Task organization',
      'Productivity features',
      'User-friendly UI',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    metrics: ['Full CRUD', 'Authentication', 'Productive'],
    liveUrl: 'https://github.com/poojasripopuri548-max/Task-Management-Application',
    githubUrl: 'https://github.com/poojasripopuri548-max/Task-Management-Application',
    image: '/projects/task-management.png',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Featured Projects" subtitle="What I've Built" />

        <div className="mt-16 space-y-32">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 0.2}>
              <div className={`relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} flex flex-col md:flex-row gap-8 items-center`}>
                {/* Project Image/Preview */}
<motion.div
  whileHover={{ scale: 1.02 }}
  className={`flex-1 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
>
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />

    <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video bg-gray-900">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700"
        >
          Live Demo
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</motion.div>
                {/* Project Details */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold"
                    >
                      <span className="animate-pulse">⭐</span>
                      Featured Project
                    </motion.div>
                  )}

                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>

                  {/* Problem → Solution → Result */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="text-purple-400 font-semibold text-sm mb-1">Problem</h4>
                      <p className="text-gray-300 text-sm">{project.problem}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="text-green-400 font-semibold text-sm mb-1">Solution</h4>
                      <p className="text-gray-300 text-sm">{project.solution}</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h4 className="text-pink-400 font-semibold text-sm mb-1">Result</h4>
                      <p className="text-gray-300 text-sm">{project.result}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Impact Metrics</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-300 border border-green-500/30"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
                    >
                      <FaGithub />
                      View Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View More Button */}
        <ScrollReveal direction="up" delay={0.8} className="mt-16 text-center">
          <motion.a
            href="https://github.com/poojasripopuri548-max?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all group"
          >
            View All Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}