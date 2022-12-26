export const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  origin: process.env.CLIENT_URL,
};
