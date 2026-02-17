import React from "react";
import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="w-full py-6 bg-transparent text-gray-400 text-sm mt-auto z-10 relative">
            <Container className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6">
                <p>© {new Date().getFullYear()} Musa Dar. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <a href="https://github.com/musadar5" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/musa-dar-454526305" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://www.instagram.com/musa_dar5" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </Container>
        </footer>
    );
}
