import { NextResponse } from "next/server";

type Account = {
  id: string;
  role?: string;
  approvedRole?: string | null;
  status: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const admin = body.adminAccount as Account | undefined;
    const target = body.targetAccount as Account | undefined;
    const approvedRole = String(body.approvedRole ?? "");

    if (!admin || admin.status !== "approved" || admin.role !== "admin") {
      return NextResponse.json(
        { success: false, error: "ADMIN_AUTHORIZATION_REQUIRED" },
        { status: 403 }
      );
    }

    if (!target) {
      return NextResponse.json(
        { success: false, error: "TARGET_ACCOUNT_REQUIRED" },
        { status: 400 }
      );
    }

    if (target.status !== "pending") {
      return NextResponse.json(
        { success: false, error: "ACCOUNT_NOT_PENDING" },
        { status: 400 }
      );
    }

    if (approvedRole !== "engineer" && approvedRole !== "technician") {
      return NextResponse.json(
        { success: false, error: "INVALID_APPROVED_ROLE" },
        { status: 400 }
      );
    }

    const approvedAccount = {
      ...target,
      status: "approved",
      approvedRole,
      approvedAt: new Date().toISOString(),
      approvedBy: admin.id,
    };

    return NextResponse.json({
      success: true,
      status: "approved",
      account: approvedAccount,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "ADMIN_AUTHORIZATION_FAILED" },
      { status: 500 }
    );
  }
}
