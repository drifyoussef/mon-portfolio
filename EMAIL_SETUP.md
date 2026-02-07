# Configuration de l'envoi d'emails

Ce projet utilise Nodemailer pour envoyer des emails depuis le formulaire de contact.

## 📚 Guides de configuration

- **[OUTLOOK_SETUP.md](OUTLOOK_SETUP.md)** - Guide complet pour Outlook/Office 365 (email professionnel)
- **[SENDGRID_ALTERNATIVE.md](SENDGRID_ALTERNATIVE.md)** - Alternative avec SendGrid (plus simple)

## Configuration rapide

### 1. Configurer les variables d'environnement

Copiez le fichier `.env.example` en `.env.local` :

```bash
cp .env.example .env.local
```

### 2. Remplir les informations SMTP

Éditez `.env.local` avec vos informations d'email :

#### Pour Gmail :

1. **Activez l'authentification à deux facteurs** sur votre compte Google
2. **Créez un mot de passe d'application** :
   - Allez sur [https://myaccount.google.com/security](https://myaccount.google.com/security)
   - Cliquez sur "Mots de passe des applications"
   - Sélectionnez "Mail" et générez un mot de passe
3. Utilisez ces paramètres :
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=votre.email@gmail.com
   EMAIL_PASS=votre_mot_de_passe_app (le mot de passe généré)
   EMAIL_FROM=votre.email@gmail.com
   EMAIL_TO=votre.email@gmail.com
   ```

#### Pour Outlook/Hotmail :

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=votre.email@outlook.com
EMAIL_PASS=votre_mot_de_passe
EMAIL_FROM=votre.email@outlook.com
EMAIL_TO=votre.email@outlook.com
```

#### Pour Yahoo Mail :

```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=votre.email@yahoo.com
EMAIL_PASS=votre_mot_de_passe_app
EMAIL_FROM=votre.email@yahoo.com
EMAIL_TO=votre.email@yahoo.com
```

### 3. Redémarrer le serveur de développement

Après avoir configuré `.env.local`, redémarrez votre serveur :

```bash
npm run dev
```

## Utilisation

Le formulaire de contact est disponible sur la page `/contact`. Les utilisateurs peuvent remplir :
- Nom
- Email
- Sujet
- Message

Lorsqu'un message est envoyé, vous recevrez un email à l'adresse configurée dans `EMAIL_TO`.

## Dépannage

### L'email ne s'envoie pas

1. Vérifiez que toutes les variables d'environnement sont correctement configurées
2. Assurez-vous d'avoir activé l'authentification à deux facteurs (Gmail)
3. Utilisez un mot de passe d'application et non votre mot de passe normal
4. Vérifiez les logs de la console pour voir les erreurs détaillées

### Erreur "Invalid login"

- Pour Gmail : Assurez-vous d'utiliser un mot de passe d'application
- Vérifiez que l'adresse email et le mot de passe sont corrects

### Port bloqué

Si le port 587 ne fonctionne pas, essayez :
- Port 465 avec `EMAIL_SECURE=true`
- Port 25 (peut être bloqué par certains hébergeurs)

## Sécurité

⚠️ **Important** : Ne commitez JAMAIS votre fichier `.env.local` dans Git. Il contient des informations sensibles.

Le fichier `.env.local` est déjà inclus dans `.gitignore` pour éviter cela.
