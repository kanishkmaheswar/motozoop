# MotoZoop - Car Accessories E-commerce (Next.js App Router)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Features

- Product CRUD via file-based storage (`app/lib/data/products.json`)
- API routes: `GET/POST /api/products`, `GET/PATCH/DELETE /api/products/:id`
- Shop page (`/shop`) with "Add to Cart"
- Cart page (`/cart`) persisted in `localStorage`
- Admin dashboard (`/admin`) to add, edit, delete products

## Notes

- Images use placeholder paths; replace with real assets in `public/`.
- Prices are in the smallest currency unit (paise/cent).
- This storage is for demo/dev; use a real DB for production.
