"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Please fill out all fields." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["musadar572@gmail.com"],
            subject: `New Message from ${name} (${email})`,
            replyTo: email,
            text: message,
            html: `
        <div>
          <h2>New Message from your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { error: error.message };
        }

        return { success: true, data };
    } catch (error: any) {
        console.error("Server Error:", error);
        return { error: error.message || "Something went wrong" };
    }
};
