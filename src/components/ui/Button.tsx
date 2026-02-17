import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    glow?: boolean;
}

export function Button({
    children,
    className,
    variant = "primary",
    size = "md",
    glow = false,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-lg shadow-primary/25 border border-primary/50",
        secondary:
            "bg-secondary text-white hover:bg-secondary/80 focus:ring-secondary border border-white/10",
        outline:
            "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40 focus:ring-white/50",
        ghost:
            "bg-transparent text-white/70 hover:text-white hover:bg-white/5 focus:ring-white/20",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    const glowStyles = glow ? "shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)]" : "";

    return (
        <button
            className={clsx(baseStyles, variants[variant], sizes[size], glowStyles, className)}
            {...props}
        >
            {children}
        </button>
    );
}
