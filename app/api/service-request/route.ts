import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const equipment = String(formData.get("equipment") || "Baggage Scanner").trim();
    const model = String(formData.get("model") || "").trim();
    const serviceType = String(formData.get("serviceType") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Required fields are missing." },
        { status: 400 }
      );
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (url && key) {
      const supabase = createClient(url, key);

      const result = await supabase.from("SE").insert({
        Name: name,
        Phone: phone,
        Email: email,
        Equipments: `${equipment}${model ? ` — ${model}` : ""}`,
        Message: `${serviceType ? `Service Type: ${serviceType}\n` : ""}${message}`,
        Company: company,
        Authority: "",
      });

      if (result.error) {
        console.error(result.error);
        return NextResponse.json(
          { success: false, message: "Unable to save request." },
          { status: 500 }
        );
      }
    }

    return NextResponse.redirect(
      new URL("/?service=requested", request.url),
      303
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Unable to process request." },
      { status: 500 }
    );
  }
}
