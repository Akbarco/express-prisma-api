// ambil app (express app) dari app.js
import app from "./app.js";

// ambil PORT dari .env, kalau gak ada pakai 3000
const PORT = process.env.PORT || 3000;

// mulai server
// app.listen = nyalain express supaya bisa nerima request
app.listen(PORT, () => {
  console.log(`Sertver started: http://localhost:${PORT}`);
});
