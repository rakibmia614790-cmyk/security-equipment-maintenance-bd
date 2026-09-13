import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
console.log("SERVICE REQUEST API LOADED");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!url) {
      return NextResponse.json(
        { success: false, error: "SUPABASE URL missing" },
        { status: 500 }
      );
    }

    if (!key) {
      return NextResponse.json(
        { success: false, error: "SUPABASE KEY missing" },
        { status: 500 }
      );
    }

    const supabase = createClient(url, key);

    const { error } = await supabase
      .from("Service-request")
      .insert([
        {
          name: body.name,
          phone: body.phone,
          email: body.email,
          equipment: body.equipment,
          message: body.message,
        },
      ]);

    if (error) {
  console.log("SUPABASE ERROR:", error);
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}