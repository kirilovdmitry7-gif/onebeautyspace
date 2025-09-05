"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleEmailSignIn = async () => {
    if (email) {
      await signIn("email", { email, callbackUrl: "/" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-emerald-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Добро пожаловать!
        </h2>
        <p className="text-slate-600 mb-8">
          Выберите способ входа или регистрации
        </p>

        <div className="space-y-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm"
          >
            <FcGoogle className="w-5 h-5 mr-3" />
            Войти с Google
          </button>
          <button
            onClick={() => signIn("apple", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-sm"
          >
            <FaApple className="w-5 h-5 mr-3" />
            Войти с Apple
          </button>

          {!showEmailInput ? (
            <button
              onClick={() => setShowEmailInput(true)}
              className="w-full flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <MdEmail className="w-5 h-5 mr-3" />
              Войти по Email
            </button>
          ) : (
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Ваш Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={handleEmailSignIn}
                className="w-full flex items-center justify-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-sm"
              >
                Отправить ссылку для входа
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-slate-500 mt-8">
          Продолжая, вы соглашаетесь с нашей{" "}
          <a href="#" className="text-emerald-600 hover:underline">
            Политикой конфиденциальности
          </a>{" "}
          и{" "}
          <a href="#" className="text-emerald-600 hover:underline">
            Условиями использования
          </a>
          .
        </p>
      </div>
    </div>
  );
}
