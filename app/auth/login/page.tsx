import AuthForm from "@/components/auth/AuthForm";

// Отключить статическую генерацию
export const dynamic = "force-dynamic";

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
