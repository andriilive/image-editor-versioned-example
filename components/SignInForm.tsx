'use client';

import {signIn} from "@/lib/auth-client";
import {useRouter} from "next/navigation";
import {type PropsWithChildren, useState} from "react";

export default function SignInForm({
  children,
  redirectUrl = '/user/dashboard',
}: PropsWithChildren<{ redirectUrl?: string }>) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    }
    else {
      router.push(redirectUrl);
    }
  }


  return (
    <>
      <form onSubmit={handleSignIn} className="space-y-4">
        {children}
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </>
  )
}
