import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Просто пропускаем запрос без Supabase обработки
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*"],
};
