"use client";
import { InputHTMLAttributes } from "react";
export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return (
    <input
      {...rest}
      className={
        "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand " +
        className
      }
    />
  );
}
