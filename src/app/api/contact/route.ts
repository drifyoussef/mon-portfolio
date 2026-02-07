import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 },
      );
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", // true pour le port 465, false pour les autres ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false, // Parfois nécessaire pour Outlook
      },
    });

    // Options de l'email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO, // Votre adresse email
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Sujet: ${subject}

        Message:
        ${message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    
    // Message d'erreur plus détaillé pour le débogage
    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
    console.error("Détails de l'erreur:", errorMessage);
    
    return NextResponse.json(
      { 
        error: "Erreur lors de l'envoi de l'email",
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 },
    );
  }
}
