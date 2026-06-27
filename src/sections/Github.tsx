'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { FaGithub, FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const githubStats = {
  totalCommits: 50,
  totalPRs: 5,
  totalIssues: 3,
  contributions: 100,
  streak: 15,
};

const topLanguages = [
  { name: 'JavaScript', percentage: 50, color: 'bg-yellow-500' },
  { name: 'HTML', percentage: 25, color: 'bg-orange-500' },
  { name: 'CSS', percentage: 15, color: 'bg-blue-500' },
  { name: 'Python', percentage: 10, color: 'bg-green-500' },
];

const repositories = [
  {
    name: 'ai-app-generator',
    description: 'An AI-powered application that helps users generate applications with intelligent workflows and modern UI',
    stars: 10,
    forks: 2,
    language: 'JavaScript',
    languageColor: 'bg-yellow-500',
  },
  {
    name: 'Ecommerce-app',
    description: 'A complete e-commerce platform featuring product browsing, shopping cart functionality, and responsive design',
    stars: 8,
    forks: 1,
    language: 'JavaScript',
    languageColor: 'bg-yellow-500',
  },
  {
    name: 'blog-platform',
    description: 'A modern blogging platform where users can create, edit, manage, and publish articles',
    stars: 5,
    forks: 1,
    language: 'JavaScript',
    languageColor: 'bg-yellow-500',
  },
];

export default function Github() {
  return (
    <section id="github" className="py-20 px-4 bg-gradient-to-b from-black via-pink-950/10 to-black">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="GitHub" subtitle="Open Source Contributions" />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { label: 'Commits', value: githubStats.totalCommits, icon: <FaGithub /> },
            { label: 'Pull Requests', value: githubStats.totalPRs, icon: <FaCodeBranch /> },
            { label: 'Issues', value: githubStats.totalIssues, icon: <FaEye /> },
            { label: 'Streak', value: githubStats.streak, icon: <FaStar /> },
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} direction="up" delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl text-purple-400 mb-2 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-white mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contribution Graph Simulation */}
{/* Contribution Graph Simulation */}
<ScrollReveal direction="up" delay={0.4} className="mt-12">
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
    <h3 className="text-lg font-semibold text-white mb-4">
      Contribution Activity
    </h3>

    <div className="grid grid-cols-12 gap-1">
      {Array.from({ length: 84 }).map((_, i) => {
        let color = "bg-white/10";

        if (i % 9 === 0) color = "bg-purple-500";
        else if (i % 5 === 0) color = "bg-purple-500/70";
        else if (i % 3 === 0) color = "bg-purple-500/40";

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.01 }}
            className={`aspect-square rounded-sm ${color}`}
          />
        );
      })}
    </div>
  </div>
</ScrollReveal>

        {/* Top Languages */}
        <ScrollReveal direction="up" delay={0.5} className="mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Top Languages</h3>
            <div className="space-y-4">
              {topLanguages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-gray-400">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full ${lang.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Recent Repositories */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Repositories</h3>
          <div className="space-y-4">
            {repositories.map((repo, index) => (
              <ScrollReveal key={repo.name} direction="up" delay={0.6 + index * 0.1}>
                <motion.a
                  href={`https://github.com/poojasripopuri548-max/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="block bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        {repo.name}
                        <FaGithub className="text-gray-400 text-sm" />
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">{repo.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <span className={`w-3 h-3 rounded-full ${repo.languageColor}`} />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCodeBranch />
                      {repo.forks}
                    </span>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <ScrollReveal direction="up" delay={0.9} className="mt-8 text-center">
          <motion.a
            href="https://github.com/poojasripopuri548-max"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            <FaGithub />
            View More on GitHub
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}