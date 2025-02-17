"use server";

import { signIn, signOut } from "@/auth";

export const login = async (): Promise<void> => {
  await signIn("google", { redirectTo: "/home" });
};

export const logout = async (): Promise<void> => {
  await signOut();
};
