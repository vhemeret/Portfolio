import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

type Data = {
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    try {
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['valhmrt@gmail.com'],
        subject: 'Nouveau message de contact',
        text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMessage: ${message}`,
      });
      res.status(200).json({ message: 'Email envoyé avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}