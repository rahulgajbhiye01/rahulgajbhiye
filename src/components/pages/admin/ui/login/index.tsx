"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { login } from "@/lib/server-actions/login";
import { useAuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/loading";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <Button type="submit"> {pending ? <Loading /> : "Login"}</Button>;
}

export default function Login() {
  const [formState, formAction] = useFormState(login, null);

  // Initialized current user state
  const { saveCurrentUser } = useAuthContext();
  // Router for redirection
  const router = useRouter();

  // Update context state
  useEffect(() => {
    if (formState)
      saveCurrentUser({
        email: formState.data.email,
        password: formState.data.password,
      });
    router.push("/admin");
  }, [formState]);

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xl font-medium">Login</span>
      <form action={formAction} className="flex flex-col gap-4">
        <Input type="email" name="email" placeholder="Email" required />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <SubmitButton />
      </form>
    </div>
  );
}
