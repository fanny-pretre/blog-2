import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, lastName, email, subject, message } = await req.json();

    // Vérifier que tous les champs sont présents
    if (!name || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Créer le transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Ton email depuis .env
        pass: process.env.EMAIL_PASSWORD, // Le mot de passe d'application
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL, // Ton email (expéditeur)
      to: "fanny.compte.dev@gmail.com", // Email du destinataire
      subject: `Nouveau message de ${name} ${lastName} - ${subject}`, // Nouveau sujet
      text: `Nom: ${name}\nPrénom: ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`, // Corps du message
      replyTo: email, // Répondre à l'email de la personne qui a soumis le formulaire
    };

    // Envoyer l'email
    const info = await transporter.sendMail(mailOptions);

    // Log l'ID du message envoyé et renvoyer une réponse de succès
    console.log("Message envoyé : %s", info.messageId);

    return NextResponse.json(
      { message: "Email envoyé avec succès !" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
