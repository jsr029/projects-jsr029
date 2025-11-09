# Strusture du projet

```json
projects-jsr029-backend/
│
├── vercel.json                     ← Configuration Vercel (OBLIGATOIRE)
├── package.json                    ← Dépendances + Node 22
├── app.js                          ← Point d’entrée principal (Vercel)
├── server.js                       ← Pour dev local (nodemon)
├── .env.example                    ← Variables d’environnement
│
├── middleware/
│   ├── auth.js
│   └── upload.js
│
├── models/
│   ├── user.js
│   └── project.js
│
├── routes/
│   ├── auth.js
│   ├── user.js
│   └── project.js
│
├── mail.js                         ← Envoi d’email (contact form)
└── images/                         ← (créé automatiquement, vide au départ)
```
