import type { Metadata } from "next";
import Login from "@/components/pages/admin/ui/login";

export const metadata: Metadata = {
  title: "Login",
};

export default async function LoginPage() {
  return (
    <div className="flex h-screen flex-col justify-center">
      <Login />
    </div>
  );
}
