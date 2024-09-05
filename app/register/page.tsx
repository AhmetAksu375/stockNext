"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";

import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center py-24 w-screen border-2 h-screen">
      <div className="flex flex-col gap-4 w-[500]">
        <h1 className=" text-4xl font-semibold">REGISTER</h1>

        <Input label="Name" type="text" />
        <Input label="Email" type="email" />
        <Input
          className=""
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
          variant="bordered"
        />
        <Button color="primary">Register</Button>
        <h2 className=" font-medium">
          Do you have any account?
          <NextLink className=" text-blue-300" href="/login">
            Login
          </NextLink>
        </h2>
        <NextLink className="flex justify-start items-center gap-1" href="/" />
      </div>
    </div>
  );
}
