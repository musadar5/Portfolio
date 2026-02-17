"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "HireFlow-ATS",
        description: "A full-stack MERN-based ATS for handling job postings, applications, and hiring workflows.",
        tech: ["React.js", "Node.js", "MongoDB", "Docker", "Github Actions"],
        image: "/ATS-Project.png",
        github: "https://github.com/musadar5/HireFlow-ATS",
        live: "#",
    },
    {
        title: "Vendora",
        description: "Multi-vendor eCommerce SaaS for managing stores and Stripe payments.",
        tech: ["Next.js", "MongoDB", "TypeScript", "Stripe", "Tailwind CSS"],
        image: "/Vendoraa.png",
        github: "https://github.com/musadar5/MultiVendor-SaaS-Ecommerce",
        live: "#",
    },
    {
        title: "LiveDocs",
        description: "Real-time collaborative document editor with secure sharing, version history, and multi-user editing.",
        tech: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind CSS"],
        image: "/Livedocs.png",
        github: "#",
        live: "#",
    },
    {
        title: "Cascade",
        description: "A full Stack Next js website that enables businesses to build customizable stores.",
        tech: ["Next.js", "JavaScript", "MongoDB", "Next Auth", "Tailwind CSS"],
        image: "/Cascadee.png",
        github: "https://github.com/musadar5/Cascade",
        live: "#",
    },
    {
        title: "HoloGrip - Final Year Project",
        description: "VR gloves that let you move and feel objects naturally in virtual reality.",
        tech: ["Virtual Reality", "Finger-Tracking in VR", "Haptic Feedback", "Sense of Touch", "Arduino ESP32", "Servo Motors", "Potentiometer", "C++", "StreamVR", "Meta Quest"],
        image: "/Hologripp.png",
        github: "#projects",
        live: "#",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 relative">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Work</span></h2>
                    <p className="text-gray-400">A selection of my recent projects</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden glass-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Image Placeholder */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>


                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    {/* <a href={project.live} className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
