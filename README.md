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
touch .env
```

Add this line into `.env`.
```sh
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
Lis of dependencies
```sh
@apollo/server express graphql cors body-parser mongoose dotenv
```

List of dev dependencies
```sh
nodemon
```

<br />

### Frontend
List of dependencies
```sh
express @apollo/client react-router-dom @mui/material @emotion/react @emotion/styled clsx zustand
```

List of dev dependencies
```sh
vite@latest tailwindcss postcss autoprefixer
```
