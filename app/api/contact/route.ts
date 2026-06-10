import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, message, lang } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: lang === 'es' ? 'Faltan campos obligatorios' : 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: lang === 'es' ? 'Formato de correo inválido' : 'Invalid email format' },
        { status: 400 }
      );
    }

    const subject = `Nuevo mensaje de contacto: ${name} (${company || 'Persona Natural'})`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f3f7fb;
            color: #171717;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);
            border: 1px solid rgba(15, 23, 42, 0.08);
          }
          .header {
            background-color: #0b111c;
            padding: 30px;
            text-align: center;
            border-bottom: 2px solid #00c2ff;
          }
          .logo {
            color: #ffffff;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 0.1em;
          }
          .logo span {
            color: #00c2ff;
          }
          .content {
            padding: 40px 30px;
          }
          h2 {
            margin-top: 0;
            color: #0b111c;
            font-size: 20px;
            border-bottom: 1px solid rgba(15, 23, 42, 0.08);
            padding-bottom: 10px;
          }
          .grid {
            margin-bottom: 30px;
          }
          .grid-row {
            margin-bottom: 15px;
          }
          .label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #8b9bb4;
            font-weight: bold;
            margin-bottom: 4px;
          }
          .value {
            font-size: 15px;
            color: #171717;
            font-weight: 500;
          }
          .message-box {
            background-color: #f8fafc;
            border: 1px solid rgba(15, 23, 42, 0.05);
            border-radius: 8px;
            padding: 20px;
            font-size: 14px;
            line-height: 1.6;
            color: #334155;
            white-space: pre-wrap;
          }
          .footer {
            background-color: #f8fafc;
            padding: 20px 30px;
            text-align: center;
            font-size: 11px;
            color: #8b9bb4;
            border-top: 1px solid rgba(15, 23, 42, 0.05);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">AEGRIX<span>.</span></div>
          </div>
          <div class="content">
            <h2>Detalles del Mensaje</h2>
            <div class="grid">
              <div class="grid-row">
                <div class="label">Nombre completo</div>
                <div class="value">${name}</div>
              </div>
              <div class="grid-row">
                <div class="label">Empresa / Organización</div>
                <div class="value">${company || 'No especificada'}</div>
              </div>
              <div class="grid-row">
                <div class="label">Correo electrónico</div>
                <div class="value"><a href="mailto:${email}" style="color: #008fc7; text-decoration: none;">${email}</a></div>
              </div>
              <div class="grid-row">
                <div class="label">Idioma del formulario</div>
                <div class="value">${lang === 'es' ? 'Español' : 'Inglés'}</div>
              </div>
            </div>
            
            <div class="label">Mensaje</div>
            <div class="message-box">${message}</div>
          </div>
          <div class="footer">
            Este correo fue enviado de manera automática desde el formulario de contacto de aegrix.com.co.
          </div>
        </div>
      </body>
      </html>
    `;

    // If API key is not present, perform dry-run (simulation mode) in development
    if (!resend) {
      console.log('--- [DRY RUN - RESEND EMAIL SUBMISSION] ---');
      console.log(`To: contacto@aegrix.com.co`);
      console.log(`Reply-To: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`HTML Body Length: ${emailHtml.length} chars`);
      console.log('-------------------------------------------');
      
      return NextResponse.json({
        success: true,
        message: lang === 'es' 
          ? 'Simulación exitosa en desarrollo (configura RESEND_API_KEY para envíos reales).' 
          : 'Successful simulation in development (configure RESEND_API_KEY for real delivery).',
        dryRun: true
      });
    }

    // Send the email using Resend
    const response = await resend.emails.send({
      from: 'website@aegrix.com.co', // Must match the verified domain in Resend
      to: 'contacto@aegrix.com.co',
      replyTo: email,
      subject: subject,
      html: emailHtml,
    });

    if (response.error) {
      console.error('Resend error response:', response.error);
      return NextResponse.json(
        { error: response.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
