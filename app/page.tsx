"use client";

import { Heart, Calendar, ShoppingCart, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-emerald-600 rounded-lg mr-3"></div>
              <h1 className="text-xl font-bold text-slate-900">One Beauty</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="/health"
                className="text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Health
              </a>
              <a
                href="/studio"
                className="text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Studio
              </a>
              <a
                href="/store"
                className="text-slate-700 hover:text-emerald-600 transition-colors"
              >
                Store
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Добро пожаловать в One Beauty
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Персональный помощник для здоровья, красоты и благополучия. Ведите
            дневник здоровья, получайте рекомендации и записывайтесь на
            процедуры.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Health</h3>
            <p className="text-slate-600 mb-4">
              Ведите дневник здоровья, получайте персональные рекомендации и
              отслеживайте прогресс
            </p>
            <a
              href="/health"
              className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
            >
              Начать отслеживание
              <ArrowRight className="w-3 h-3 ml-2" />
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <Calendar className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Studio</h3>
            <p className="text-slate-600 mb-4">
              Записывайтесь на косметологические процедуры онлайн. Выбирайте
              мастера и удобное время
            </p>
            <a
              href="/studio"
              className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
            >
              Записаться на процедуру
              <ArrowRight className="w-3 h-3 ml-2" />
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Store</h3>
            <p className="text-slate-600 mb-4">
              Покупайте профессиональную косметику, БАДы и аксессуары для
              здоровья и красоты
            </p>
            <a
              href="/store"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Перейти в магазин
              <ArrowRight className="w-3 h-3 ml-2" />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Начните заботиться о себе уже сегодня
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Создайте аккаунт и получите персональные рекомендации по здоровью,
            записывайтесь на процедуры и покупайте качественную косметику
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/auth/signup")}
              className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-medium hover:bg-emerald-50 transition-colors"
            >
              Создать аккаунт
            </button>
            <button
              onClick={() => router.push("/auth/login")}
              className="border border-emerald-300 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-600 transition-colors"
            >
              Начать с Health
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-emerald-600 rounded-lg mr-3"></div>
                <h3 className="text-xl font-bold">One Beauty</h3>
              </div>
              <p className="text-slate-400">
                Персональный помощник для здоровья и красоты
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Продукты</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="/health"
                    className="hover:text-white transition-colors"
                  >
                    Health
                  </a>
                </li>
                <li>
                  <a
                    href="/studio"
                    className="hover:text-white transition-colors"
                  >
                    Studio
                  </a>
                </li>
                <li>
                  <a
                    href="/store"
                    className="hover:text-white transition-colors"
                  >
                    Store
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Пользовательское соглашение
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 One Beauty. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
