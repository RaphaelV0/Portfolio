import { Resend } from 'resend';
import { NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
  system_check?: string; // Le champ Honeypot est optionnel
}

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body = await req.json();
    const { name, email, message, system_check }: ContactPayload = body;

    // --- LOGIQUE ANTI-SPAM (HONEYPOT) ---
    // Si le champ caché est rempli, c'est un bot.
    // On coupe silencieusement l'exécution et on renvoie un faux succès.
    if (system_check) {
      console.log('Bot intercepté par le honeypot');
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'MALFORMED_REQUEST: Champs manquants.' }, 
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'INVALID_PAYLOAD: Format email rejeté.' }, 
        { status: 400 }
      );
    }

    // Protection DDoS Applicatif (limites pour tous les champs)
    if (message.length > 5000 || name.length > 100 || email.length > 255) {
      return NextResponse.json(
        { error: 'PAYLOAD_TOO_LARGE: Dépassement de la limite de caractères.' }, 
        { status: 413 }
      );
    }

    const fromAddress = 'Terminal Portfolio <contact@raphaelverchain.fr>';
    
    const date = new Date().toLocaleString('fr-FR', { 
      timeZone: 'Europe/Paris',
      dateStyle: 'medium',
      timeStyle: 'medium'
    });

    const htmlContent = `
      <div style="background-color: #010409; padding: 40px 20px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace;">
        
        <div style="max-width: 600px; margin: 0 auto; background-color: #0d1117; border: 1px solid #30363d; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <div style="background-color: #161b22; border-bottom: 1px solid #30363d; padding: 12px 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="width: 60px;">
                  <div style="display: inline-block; width: 12px; height: 12px; background-color: #ff5f56; border-radius: 50%; margin-right: 6px;"></div>
                  <div style="display: inline-block; width: 12px; height: 12px; background-color: #ffbd2e; border-radius: 50%; margin-right: 6px;"></div>
                  <div style="display: inline-block; width: 12px; height: 12px; background-color: #27c93f; border-radius: 50%;"></div>
                </td>
                <td style="text-align: center; color: #8b949e; font-size: 13px; letter-spacing: 0.5px;">
                  ~/portfolio/incoming_connection
                </td>
                <td style="width: 60px;"></td>
              </tr>
            </table>
          </div>

          <div style="padding: 30px;">
            <h2 style="margin: 0 0 24px 0; color: #7ee787; font-size: 20px; font-weight: normal;">
              <span style="color: #8b949e; margin-right: 8px;">[200 OK]</span> Packet Delivered
            </h2>

            <div style="background-color: #161b22; border: 1px solid #30363d; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td style="padding: 6px 0; color: #8b949e; width: 120px;">> SENDER_NAME</td>
                  <td style="padding: 6px 0; color: #e6edf3; font-weight: bold;">
                    ${name.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #8b949e;">> TARGET_EMAIL</td>
                  <td style="padding: 6px 0;">
                    <a href="mailto:${email}" style="color: #79c0ff; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #8b949e;">> TIMESTAMP</td>
                  <td style="padding: 6px 0; color: #e6edf3;">${date}</td>
                </tr>
              </table>
            </div>

            <div style="margin-bottom: 8px; color: #8b949e; font-size: 13px;">$ cat payload.txt</div>
            <div style="background-color: #010409; border: 1px solid #30363d; border-radius: 6px; padding: 20px; color: #c9d1d9; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>

            <div style="margin-top: 35px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #238636; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 6px; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; border: 1px solid rgba(240,246,252,0.1);">
                Initialiser la réponse
              </a>
            </div>
          </div>
          
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #484f58; font-size: 12px;">
          Automated alert generated by Vercel / Resend Pipeline
        </div>
      </div>
    `;

    await resend.emails.send({
      from: fromAddress,
      to: 'raphaelverchain@gmail.com',
      replyTo: fromAddress,
      subject: `[Portfolio] Transmission de ${name}`,
      text: `Expéditeur: ${name}\nEmail: ${email}\nDate: ${date}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: 'INTERNAL_SERVER_ERROR: Failed to send packet.' }, { status: 500 });
  }
}