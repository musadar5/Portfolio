"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
            <Container className="relative top-10 z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Column: Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 flex justify-center md:justify-start"
                    >
                        <span className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                            Available for work
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]"
                    >
                        Hi, I'm <br />
                        <span className="text-glow bg-linear-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            Musa Dar.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-lg mb-8 mx-auto md:mx-0"
                    >
                        A Creative Full-Stack Developer crafting fast, reliable, user-focused applications with modern web technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Button size="lg" glow onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => window.open('/Resume.pdf', '_blank')}>
                            Download CV <Download className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-12 flex gap-6 justify-center md:justify-start text-gray-400"
                    >
                        <a href="https://github.com/musadar5" className="hover:text-white transition-colors"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/musa-dar-454526305" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                        <a href="https://www.instagram.com/musa_dar5" className="hover:text-white transition-colors"><Instagram size={24} /></a>
                    </motion.div>
                </div>

                {/* Right Column: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end relative"
                >
                    {/* Glow Behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[80px] -z-10 pointer-events-none" />

                    {/* Profile Circle */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 glass-card border border-white/10 group">
                        <div className="w-full h-full rounded-full overflow-hidden relative transition-all duration-500">
                            <div className="absolute inset-0 bg-linear-to-tr from-gray-800 to-gray-900 w-full h-full flex items-center justify-center text-gray-600">
                                {/* Placeholder if image missing */}
                                <span className="text-xl">Profile Image</span>
                            </div>
                            {/* Uncomment below when you have an image */}
                            <Image
                                src="/profile-pic.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Orbital Ring Animation */}
                        <div className="absolute inset-0 border-2 border-transparent border-t-primary/50 border-r-primary/30 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
                    </div>
                </motion.div>

            </Container>
        </section>
    );
}
