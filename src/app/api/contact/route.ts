import { NextResponse } from 'next/server';
export async function POST() { return NextResponse.json({ ok: true }); }
// await req.json()
// syntax error crash
/* try-catch req.json */
// server validation
// ENOENT directory not found error
