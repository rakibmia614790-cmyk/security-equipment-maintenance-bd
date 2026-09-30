import { NextResponse } from "next/server";
import { validateRegistration } from "@/app/secure-portal/lib/validation";
import { createPendingAccount } from "@/app/secure-portal/lib/account";
import { createPendingNotifications } from "@/app/secure-portal/lib/notifications";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const input = {
      name: String(body.name ?? ""),
      email: String(body.email ?? ""),
      mobile: String(body.mobile ?? ""),
      role: String(body.role ?? ""),
    };

    const validation = validateRegistration(input);

    if (!validation.valid) {
      return NextResponse.json(
        { success: false, status: "invalid", errors: validation.errors },
        { status: 400 }
      );
    }

    const account = createPendingAccount({
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      mobile: input.mobile.trim(),
      requestedRole: input.role as "engineer" | "technician",
    });

    const notifications = createPendingNotifications({
      accountId: account.id,
      name: account.name,
      email: account.email,
      mobile: account.mobile,
    });

    return NextResponse.json({
      success: true,
      status: "pending",
      account: {
        id: account.id,
        name: account.name,
        email: account.email,
        mobile: account.mobile,
        status: account.status,
      },
      notifications,
    });
  } catch {
    return NextResponse.json(
      { success: false, status: "error" },
      { status: 500 }
    );
  }
}
