# Tuungane Kenya Dating

Location-based online dating platform for people in Kenya.

## Features (Starter)
- User-facing landing page with Kenya localization
- Profile setup mock
- Discovery / swipe interface with GPS location request
- Filters by county, age, interests (UI)
- Mock nearby users based on geolocation
- Mobile-friendly design

## Tech
- Next.js 14 (App Router)
- Deployed on Netlify
- Ready for GitHub continuous deployment

## Next Steps for Full App
1. Add authentication (Supabase Auth or Netlify Identity)
2. Database for profiles (Supabase Postgres or MongoDB)
3. Real matching algorithm (distance calculation with haversine)
4. Photo uploads (Netlify Blobs or Cloudinary)
5. Real-time chat (Supabase Realtime or Socket.io)
6. M-Pesa payments for premium
7. Safety/report system

## Local Development
```bash
npm install
npm run dev
```

## Deploy
Connect this GitHub repo to Netlify. Build command: `npm run build`, publish: `.next` (plugin handles it).
