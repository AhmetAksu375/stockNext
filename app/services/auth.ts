// services/auth.ts
import axiosInstance from "./axiosInstance";

export const login = async (userName: string, password: string) => {
  try {
    // API'ye istek gönderiliyor
    const response = await axiosInstance.post("/api/Authentication/login", {
      userName,
      password,
    });

    // Yanıt başarılı olduğunda dönen veriler
    return response.data;
  } catch (error: any) {
    // Hataların yakalanması ve detaylı hata mesajları
    if (error.response) {
      console.error("Yanıt hatası:", error.response.data);
    } else if (error.request) {
      console.error("İstek hatası:", error.request);
    } else {
      console.error("Genel hata:", error.message);
    }
    throw error;
  }
};
