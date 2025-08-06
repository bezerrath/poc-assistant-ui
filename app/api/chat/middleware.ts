import { NextRequest, NextResponse } from "next/server";

// Allow requests from localhost:3000
export function middleware(req: NextRequest) {
  if (req.nextUrl.hostname === "localhost" && req.nextUrl.port === "3000") {
    return NextResponse.next();
  }
}