/* =========================================================
   NexHire — Centralized Application Configuration
   ========================================================= */

const API_BASE_URL = window.NEXHIRE_API_BASE_URL || "https://nexhire-backend-5zv7.onrender.com/api/v1";

if (typeof window !== "undefined") {
  window.API_BASE_URL = API_BASE_URL;
}
