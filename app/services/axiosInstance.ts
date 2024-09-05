// services/axiosInstance.ts
import https from "https";

import axios from "axios";

// Axios instance oluşturuluyor
const axiosInstance = axios.create({
  baseURL: "https://10.16.17.77:5001",
  timeout: 10000,
  // Geliştirme amaçlı olarak SSL doğrulamasını devre dışı bırakıyoruz
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // Sadece geliştirme ortamında kullanın, prod ortamında bunu yapmayın!
  }),
});

// İstekler için interceptor ekliyoruz
axiosInstance.interceptors.request.use(
  (config) => {
    // Local Storage'dan token alınıyor
    const token = localStorage.getItem("token");

    // Eğer token varsa, Authorization header'a ekleniyor
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // İstek gönderilmeden önce hata çıkarsa yakalıyoruz
    return Promise.reject(error);
  },
);

// Hata yönetimi için bir response interceptor ekleyebilirsiniz (isteğe bağlı)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API çağrısında hata:", error);

    return Promise.reject(error);
  },
);

export default axiosInstance;
