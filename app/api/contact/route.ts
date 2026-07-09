import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { name, email, message } = await req.json();

    const fromAddress = 'Portfolio Contact <contact@raphaelverchain.fr>';

    await resend.emails.send({
      from: fromAddress,
      to: 'raphaelverchain@gmail.com',
      subject: `[Terminal] Message de ${name}`,
      text: `Nouveau log de connexion.\n\nUser: ${name}\nEmail: ${email}\n\nPayload:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}