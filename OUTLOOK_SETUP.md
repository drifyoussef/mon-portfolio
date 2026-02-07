# Configuration Outlook pour l'envoi d'emails

Guide complet pour configurer l'envoi d'emails avec un compte Outlook/Office 365 professionnel.

## 🔧 Configuration pour Outlook/Office 365

### Étape 1 : Paramètres SMTP Outlook

Dans votre fichier `.env.local`, utilisez ces paramètres :

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=votre.email@outlook.com
EMAIL_PASS=votre_mot_de_passe
EMAIL_FROM=votre.email@outlook.com
EMAIL_TO=votre.email@outlook.com
```

### Étape 2 : Activer l'accès SMTP dans Outlook

#### Pour Outlook.com / Hotmail.com (compte personnel) :

1. **Vérifiez que SMTP est activé** :
   - Connectez-vous sur [outlook.com](https://outlook.com)
   - Allez dans Paramètres → Afficher tous les paramètres Outlook
   - Synchronisation des e-mails → Accès POP et IMAP
   - Vérifiez que SMTP est activé

2. **Utiliser un mot de passe d'application** (RECOMMANDÉ) :
   - Allez sur [account.microsoft.com/security](https://account.microsoft.com/security)
   - Cliquez sur "Options de sécurité avancées"
   - Activez la vérification en deux étapes si ce n'est pas fait
   - Créez un "Mot de passe d'application"
   - Utilisez ce mot de passe dans `EMAIL_PASS`

#### Pour Office 365 (compte professionnel) :

**Important** : Office 365 désactive souvent l'authentification SMTP de base par défaut.

**Option 1 : Demander à votre administrateur IT** (RECOMMANDÉ)

Demandez à votre administrateur de :
- Activer l'authentification SMTP pour votre compte
- Ou créer un compte de service dédié avec SMTP activé

**Option 2 : Utiliser OAuth2** (Plus complexe mais plus sécurisé)

Si l'authentification de base ne fonctionne pas, vous devrez utiliser OAuth2. Voici comment :

1. **Installer le package supplémentaire** :
```bash
npm install @azure/msal-node
```

2. **Créer une app dans Azure AD** :
   - Allez sur [portal.azure.com](https://portal.azure.com)
   - Azure Active Directory → App registrations → New registration
   - Notez le Client ID, Tenant ID
   - Certificates & secrets → Créez un client secret

3. **Configuration .env.local pour OAuth2** :
```env
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=votre.email@entreprise.com
EMAIL_TO=votre.email@entreprise.com

# OAuth2 pour Office 365
AZURE_TENANT_ID=votre_tenant_id
AZURE_CLIENT_ID=votre_client_id
AZURE_CLIENT_SECRET=votre_client_secret
```

**Option 3 : Utiliser un service tiers** (PLUS SIMPLE)

Pour éviter les complications avec Office 365, utilisez un service SMTP tiers :

#### A. Gmail (même avec email Outlook) :
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=votre.compte@gmail.com
EMAIL_PASS=mot_de_passe_app_gmail
EMAIL_FROM=votre.compte@gmail.com
EMAIL_TO=votre.email@outlook.com  # Vous recevez toujours sur Outlook
```

#### B. SendGrid (gratuit jusqu'à 100 emails/jour) :
```bash
npm install @sendgrid/mail
```

```env
SENDGRID_API_KEY=votre_api_key
EMAIL_TO=votre.email@outlook.com
```

#### C. Mailtrap (perfect pour les tests) :
```env
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=votre_username_mailtrap
EMAIL_PASS=votre_password_mailtrap
```

### Étape 3 : Tester la configuration

1. **Redémarrez le serveur** :
```bash
npm run dev
```

2. **Testez le formulaire** sur `/contact`

3. **Vérifiez les logs** dans le terminal pour voir les erreurs détaillées

## 🔍 Résolution des problèmes Outlook

### Erreur "Authentication failed"

**Solution 1** - Utilisez un mot de passe d'application :
- Activez la vérification en deux étapes
- Créez un mot de passe d'application
- N'utilisez PAS votre mot de passe normal

**Solution 2** - Vérifiez les paramètres de sécurité :
- Allez sur [outlook.com](https://outlook.com) → Paramètres
- Désactivez temporairement "Connexion sécurisée requise uniquement" (non recommandé en production)

### Erreur "SMTP not enabled"

Pour Office 365 professionnel :
- Contactez votre administrateur IT
- L'authentification SMTP de base est souvent désactivée
- Demandez l'activation ou utilisez un compte de service

### Erreur "Connection timeout"

Vérifiez :
- Le port (587 pour STARTTLS, 465 pour SSL)
- Votre pare-feu ne bloque pas le port SMTP
- Vous n'êtes pas sur un réseau d'entreprise qui bloque SMTP

### Erreur "Self-signed certificate"

Pour Office 365, ajoutez dans la configuration :
```typescript
tls: {
  ciphers: 'SSLv3',
  rejectUnauthorized: false
}
```

## 🎯 Ma recommandation pour un email professionnel

Si vous avez un email Outlook professionnel et que SMTP ne fonctionne pas :

**Solution la plus simple** :
1. Créez un compte Gmail gratuit juste pour l'envoi
2. Configurez Gmail avec un mot de passe d'application
3. Les emails seront envoyés depuis Gmail
4. Mais vous les recevrez toujours sur votre Outlook pro

```env
# Configuration recommandée
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=votre.portfolio@gmail.com
EMAIL_PASS=mot_de_passe_app_gmail
EMAIL_FROM=votre.portfolio@gmail.com
EMAIL_TO=votre.email@outlook.com  # Votre vrai email pro
```

**Avantages** :
✅ Pas de configuration complexe
✅ Fonctionne à tous les coups
✅ Vous recevez quand même sur votre email pro
✅ Gratuit et fiable

## 📧 Alternative : Services d'envoi d'emails

Pour la production, envisagez ces services (plus fiables) :

1. **SendGrid** - 100 emails/jour gratuit
2. **Mailgun** - 5000 emails/mois gratuit les 3 premiers mois
3. **Amazon SES** - Très bon marché
4. **Brevo (ex-Sendinblue)** - 300 emails/jour gratuit

Ces services sont plus fiables que SMTP direct pour la production.
