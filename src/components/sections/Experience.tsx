"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Associate Software Engineer",
        company: "Six Logics",
        period: "June 2025 - Present",
        description: "Developed responsive Next.js applications with improved performance and SEO. Implemented CI/CD pipelines for automated, reliable deployments and containerized apps with Docker to ensure consistent development and production environments. Maintained a 100% on-time delivery record for all tasks.",
        tech: ["React", "Next.js", "TypeScript", "Redux", "CI/CD", "Github Actions", "Docker"],
    },
    {
        role: "Software Development Intern",
        company: "IBEX",
        period: "June 2024 - August 2024",
        description: "Built 2+ responsive web applications with Next.js, leveraging server-side rendering (SSR), dynamic routing, and NextAuth for secure authentication. Focused on modern UI/UX, optimized performance, and deployed projects efficiently on Vercel.",
        tech: ["Next.js", "TypeScript", "MongoDB", "SSR", "NextAuth", "Git/Github", "Vercel"],
    },
    {
        role: "Software Developer Trainee",
        company: "NETSOL Inc.",
        period: "June 2023 - August 2023",
        description: "Acquired a firsthand experience on how the MERN stack is used in industry projects. Developed 3+ full-stack web applications using MERN, building REST APIs, secure authentication, dynamic React interfaces, and optimized MongoDB backends. Collaborated in Agile teams using Git/GitHub.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Git/Github", "JWT"],
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 md:py-32 relative">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Work <span className="text-primary">Experience</span></h2>
                    <p className="text-gray-400">My path in the tech industry</p>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/20" />

                            <div className="glass-card p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded border border-white/10 bg-white/5 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
