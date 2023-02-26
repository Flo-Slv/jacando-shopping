# Jacando shopping
A small shopping page.

Backend: Node.js, Express, Apollo server and GraphQL.

Frontend (SSR): Vite.js, Express, Apollo client, React router dom, React.js, Zustand, Tailwind CSS and Material UI.

<br />

---


<br />

## Run project in dev
### Backend
```sh
cd jacando-shopping/backend && \
npm install
```

<br />

Create `.env` file
```env
MONGODB=mongodb+srv://FloSlv:jacando2023@jacandoshopping.kuekpne.mongodb.net/jacando-shopping?retryWrites=true&w=majority
```

<br />

```sh
npm run dev
```

<br />

### Frontend
```sh
cd jacando-shopping/frontend && \
npm install && \
npm run dev
```

<br />

---

<br />

## Dependencies
### Backend
Dependencies
```sh
@apollo/server express graphql cors body-parser mongoose dotenv
```

Dev dependencies
```sh
nodemon
```

<br />

### Frontend
Dependencies
```sh
express @apollo/client react-router-dom @mui/material @emotion/react @emotion/styled clsx zustand
```

Dev dependencies
```sh
vite@latest tailwindcss postcss autoprefixer
```
