"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";

import { login } from "../services/auth";

import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

export default function Page() {
  const [userName, setUserName] = useState(""); // Kullanıcı adı
  const [password, setPassword] = useState(""); // Şifre
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null); // Hata durumu

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async () => {
    try {
      const response = await login(userName, password); // Login fonksiyonu çağrılıyor

      console.log("Login successful:", response);
      // Giriş başarılıysa, kullanıcıyı yönlendirebilirsiniz
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center py-24 w-screen border-2 h-screen">
      <div className="flex flex-col gap-4 w-[500]">
        <Input
          label="Username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          endContent={
            <button
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          label="Password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          value={password}
          variant="bordered"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button color="primary" onClick={handleLogin}>
          Login
        </Button>
        {error && <p className="text-red-500">{error}</p>}
        <h2 className=" font-medium">
          Do not have an account yet?
          <NextLink className=" text-blue-300" href="/register">
            Register
          </NextLink>
        </h2>
      </div>
    </div>
  );
}
