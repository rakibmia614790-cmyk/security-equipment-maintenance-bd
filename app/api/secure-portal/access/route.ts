import { NextResponse } from "next/server";

type Account = {
  id: string;
  role: string;
  status: string;
};

const VALID_ROLES = ["admin", "engineer", "technician"];

function isApprovedPortalAccount(
  account: Account | undefined
): boolean {
  if (!account) return false;

  return (
    VALID_ROLES.includes(account.role) &&
    account.status === "approved"
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const account = body.account as Account | undefined;

    if (!isApprovedPortalAccount(account)) {
      return NextResponse.json(
        {
          success: false,
          access: false,
          error: "PORTAL_ACCESS_NOT_AUTHORIZED",
        },
        { status: 403 }
      );
    }

    const authorizedAccount = account;

    if (!authorizedAccount) {
      return NextResponse.json(
        {
          success: false,
          access: false,
          error: "PORTAL_ACCESS_NOT_AUTHORIZED",
        },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      access: true,
      role: authorizedAccount.role,
      message: "Portal access authorized.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        access: false,
        error: "PORTAL_ACCESS_CHECK_FAILED",
      },
      { status: 500 }
    );
  }
}
