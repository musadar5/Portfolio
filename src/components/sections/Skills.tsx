"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

const skills = [
    "React", "Node.js", "Next.js", "TypeScript", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "Docker", "GitHub Actions", "C/C++", "Python", "GoLang", "Postman"
];

export function Skills() {
    return (
        <section className="py-20 relative overflow-hidden bg-white/5 backdrop-blur-sm">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(124, 58, 237, 0.2)" }}
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-200 font-medium cursor-default transition-colors hover:border-primary/50"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
