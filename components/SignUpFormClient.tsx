'use client';

import {signUp} from "@/lib/auth-client";
import {useRouter} from "next/navigation";
import {type PropsWithChildren, useState} from "react";

export default function SignUpFormClient({children, redirectUrl, ...props}: PropsWithChildren<{ redirectUrl: string } & React.FormHTMLAttributes<HTMLFormElement>>) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signUp.email({
      name: formData.get("name") as string,
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
      <form onSubmit={handleSignUp} {...props}>
        {children}
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  )
}
