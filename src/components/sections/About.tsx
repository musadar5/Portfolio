"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Cpu, Globe, Layers, Zap } from "lucide-react";

const features = [
    {
        icon: <Globe className="h-6 w-6 text-primary" />,
        title: "Global Scale",
        description: "Building applications that scale effortlessly across the globe.",
    },
    {
        icon: <Zap className="h-6 w-6 text-yellow-400" />,
        title: "Fast Performance",
        description: "Optimized for speed and efficiency, ensuring instant load times.",
    },
    {
        icon: <Layers className="h-6 w-6 text-blue-400" />,
        title: "Modern Stack",
        description: "Leveraging the latest technologies like Next.js 15, React 19, and Tailwind.",
    },
    {
        icon: <Cpu className="h-6 w-6 text-purple-400" />,
        title: "Clean Architecture",
        description: "Writing maintainable, scalable, and testable code.",
    },
];

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-white to-white/60">
                            Crafting Digital <br />
                            <span className="text-primary">Masterpieces</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            I am a passionate Computer Science graduate from FAST-NUCES with
                            strong academic performance and a keen interest in technology.
                            My studies have equipped me with a solid foundation in algorithms, data structures,
                            and software development principles, which I continuously apply in real-world projects.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            I specialize in full-stack web development, with a particular focus on
                            the MERN stack and Next.js. I enjoy building responsive, scalable, and
                            user-friendly web applications that solve real-world problems and provide
                            seamless digital experiences.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Beyond coding, I love exploring new technologies, optimizing workflows,
                            and turning innovative ideas into functional, polished applications. I am
                            actively seeking opportunities where I can contribute, learn, and grow as
                            a web developer in a dynamic environment.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-2xl glass-card glass-card-hover"
                            >
                                <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
