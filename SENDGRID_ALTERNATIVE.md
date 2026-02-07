# Alternative : Utiliser SendGrid (plus simple pour Outlook pro)

Si vous avez des difficultés avec Outlook professionnel, voici une solution alternative avec SendGrid (gratuit jusqu'à 100 emails/jour).

## Installation

```bash
npm install @sendgrid/mail
```

## Configuration

1. Créez un compte sur [sendgrid.com](https://sendgrid.com)
2. Créez une API Key dans Settings → API Keys
3. Ajoutez dans `.env.local` :

```env
SENDGRID_API_KEY=votre_api_key_sendgrid
EMAIL_TO=votre.email@outlook.com
```

## Code alternatif pour route.ts

Remplacez le contenu de `src/app/api/contact/route.ts` par :

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const msg = {
      to: process.env.EMAIL_TO!,
      from: process.env.SENDGRID_VERIFIED_SENDER!, // Must be verified in SendGrid
      subject: \`Portfolio Contact: \${subject}\`,
      text: \`
Nom: \${name}
Email: \${email}
Sujet: \${subject}

Message:
\${message}
      \`,
      html: \`
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> \${name}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Sujet:</strong> \${subject}</p>
        <h3>Message:</h3>
        <p>\${message.replace(/\n/g, '<br>')}</p>
      \`,
      replyTo: email,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur SendGrid:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
```

## Avantages de SendGrid

✅ Pas de problème de configuration SMTP
✅ 100 emails/jour gratuit (largement suffisant pour un portfolio)
✅ Meilleure délivrabilité que SMTP direct
✅ Statistiques d'envoi incluses
✅ Pas de blocage par les pare-feux d'entreprise

## Vérification du sender

⚠️ **Important** : Vous devez vérifier votre adresse email d'envoi dans SendGrid :

1. Allez dans Settings → Sender Authentication
2. Vérifiez une adresse email (Single Sender Verification)
3. Utilisez cette adresse dans `SENDGRID_VERIFIED_SENDER`
