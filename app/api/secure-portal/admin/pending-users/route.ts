import { NextResponse } from "next/server";

type PortalUser = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  requestedRole: string;
  status: string;
};

const allowedRequestedRoles = ["engineer", "technician"];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const admin = body.adminAccount;
    const users = Array.isArray(body.users)
      ? (body.users as PortalUser[])
      : [];

    if (
      !admin ||
      admin.role !== "admin" ||
      admin.status !== "approved"
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "ADMIN_AUTHORIZATION_REQUIRED",
        },
        { status: 403 }
      );
    }

    const pendingUsers = users.filter(
      (user) =>
        user.status === "pending" &&
        allowedRequestedRoles.includes(user.requestedRole)
    );

    return NextResponse.json({
      success: true,
      count: pendingUsers.length,
      users: pendingUsers,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "PENDING_USERS_REQUEST_FAILED",
      },
      { status: 500 }
    );
  }
}
