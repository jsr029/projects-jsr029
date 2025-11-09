# Structure du projet

```javascript
projects-jsr029-frontend/
│
├── vercel.json                     ← FIX routing + build
├── package.json                    ← Nettoyé + fonctionnel
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── CustomNavbar.js
│   │   ├── ProjectCard.js
│   │   ├── ProjectForm.js
│   │   ├── LoginForm.js
│   │   ├── RegisterForm.js
│   │   ├── Pagination.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ProjectViewPage.js
│   │   └── ResumePage.js
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   └── store.js
│   ├── css/
│   │   ├── viewPage.css
│   │   └── ResumePage.css
│   ├── baseUrl.js
│   ├── App.js
│   └── index.js
└── .gitignore
```
