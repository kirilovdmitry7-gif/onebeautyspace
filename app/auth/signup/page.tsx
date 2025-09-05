import AuthForm from "@/components/auth/AuthForm";

// Отключить статическую генерацию
export const dynamic = "force-dynamic";

export default function SignUpPage() {
  return <AuthForm mode="signup" />;
}
