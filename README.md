# SACVPN Site

## Overview

The marketing and landing site for SACVPN, built with React 19 and Vite. The site showcases VPN service features, pricing plans, and provides user authentication with a protected dashboard. Firebase handles authentication and Cloud Functions power the backend.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 6 | Build tool and dev server |
| Firebase | Authentication and Cloud Functions |
| Tailwind CSS 3 | Utility-first styling |
| React Router 7 | Client-side routing with protected routes |
| gh-pages | Static deployment tooling |

## Features

- **Hero Section** -- Eye-catching landing area with service value proposition
- **Feature Showcase** -- Detailed feature cards highlighting VPN capabilities
- **Pricing Page** -- Clear pricing plans with tier comparison
- **User Authentication** -- Firebase-powered login with protected route guards
- **User Dashboard** -- Authenticated user area for account management
- **FAQ Section** -- Frequently asked questions page for customer support
- **Contact Page** -- Direct contact form for inquiries
- **Cloud Functions** -- Firebase Functions backend for server-side logic
- **Responsive Design** -- Fully responsive layout built with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Firebase project with Authentication enabled

### Installation

```bash
git clone https://github.com/kstephens0331/sacvpn-site.git
cd sacvpn-site
npm install
```

### Configuration

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Deployment

```bash
npm run deploy
```

## Project Structure

```
sacvpn-site/
├── functions/
│   ├── index.js
│   └── package.json
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FeatureCard.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Layout.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Faq.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Pricing.jsx
│   ├── firebase.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── CNAME
├── firebase.json
├── index.html
├── tailwind.config.js
├── postcss.config.cjs
├── vite.config.js
└── package.json
```

## License

All rights reserved.

---

**Built by StephensCode LLC**
