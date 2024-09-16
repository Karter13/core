"use client";

import { Button } from "@/shared/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";

export function SignInButton() {
  const handleSignOut = () => signIn();

  return (
    <Button
      variant="outline"
      onClick={handleSignOut}
    >
      <LogIn className="h-4 w-4 mr-2" /> Войти
    </Button>
  );
}
