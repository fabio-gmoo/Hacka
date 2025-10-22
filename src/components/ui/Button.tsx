"use client";
import { ButtonHTMLAttributes } from "react";
export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return (
    <button
      {...rest}
      className={
        "rounded-lg px-4 py-2 text-sm font-medium bg-brand text-white hover:opacity-90 disabled:opacity-40 " +
        className
      }
    />
  );
}
