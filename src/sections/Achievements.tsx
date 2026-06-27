'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import { FaTrophy, FaAward, FaStar, FaCertificate, FaDownload } from 'react-icons/fa';

const achievements = [
  {
    icon: <FaTrophy />,
    value: 4,
    label: 'Projects Completed',
    suffix: '+',
  },
  {
    icon: <FaStar />,
    value: 5,
    label: 'Certifications Earned',
    suffix: '',
  },
  {
    icon: <FaAward />,
    value: 1,
    label: 'Internship Completed',
    suffix: '',
  },
  {
    icon: <FaCertificate />,
    value: 8.1,
    label: 'CGPA',
    suffix: '',
  },
];

const certifications = [
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: '2026',
    icon: '☁️',
    file: 'aws-cloud-practitioner.pdf',
  },
  {
    name: 'IoT Network Specialist Certificate',
    issuer: 'IoT Network Programme',
    date: '2025',
    icon: '🌐',
    file: 'iot-network-specialist.pdf',
  },
  {
    name: 'TCS iON Communication Skills',
    issuer: 'TCS iON',
    date: '2026',
    icon: '💬',
    file: 'tcs-communication-skills.pdf',
  },
  {
    name: 'TCS iON Business Etiquette',
    issuer: 'TCS iON',
    date: '2026',
    icon: '🤝',
    file: 'tcs-business-etiquette.pdf',
  },
  {
    name: 'TCS iON Effective Communication',
    issuer: 'TCS iON',
    date: '2026',
    icon: '📢',
    file: 'tcs-effective-communication.pdf',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, incrementTime > 10 ? incrementTime : 10);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Achievements" subtitle="Milestones & Certifications" />

        {/* Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.label} direction="up" delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl text-purple-400 mb-4 flex justify-center"
                >
                  {achievement.icon}
                </motion.div>
                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={achievement.value} suffix={achievement.suffix} />
                </div>
                <div className="text-gray-400 text-sm">{achievement.label}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.name} direction="up" delay={0.4 + index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all flex items-center gap-4"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl"
                  >
                    {cert.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-purple-400 text-xs mt-1">{cert.date}</p>
                  </div>
                  <motion.a
                    href={`/documents/${cert.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    title="View Certificate"
                  >
                    <FaDownload />
                  </motion.a>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Additional Achievements */}
        <ScrollReveal direction="up" delay={0.8} className="mt-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">�</div>
                <h4 className="text-white font-semibold mb-1">B.Tech Student</h4>
                <p className="text-gray-400 text-sm">AI & ML at VFSTR</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💼</div>
                <h4 className="text-white font-semibold mb-1">Internship Experience</h4>
                <p className="text-gray-400 text-sm">Full Stack Development at Thiranex</p>
              </div>
              <div>
                <div className="text-3xl mb-2">�</div>
                <h4 className="text-white font-semibold mb-1">Career Goal</h4>
                <p className="text-gray-400 text-sm">Software Engineer / AI Engineer</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}