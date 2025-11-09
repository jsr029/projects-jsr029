export const baseUrl = 
  process.env.NODE_ENV === 'production' 
    ? 'https://projects-jsr029-backend.vercel.app' 
    : 'http://localhost:5000';