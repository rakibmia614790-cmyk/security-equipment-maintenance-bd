import { NextResponse } from "next/server";

type OtpRecord = {
  mobile: string;
  code: string;
  expiresAt: number;
};

const store = new Map<string, OtpRecord>();

function createId() {
  return crypto.randomUUID();
}

function createCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const action = String(body.action ?? "");

    if (action === "request") {
      const mobile = String(body.mobile ?? "").trim();

      if (!mobile) {
        return NextResponse.json(
          { success: false, error: "MOBILE_REQUIRED" },
          { status: 400 }
        );
      }

      const challengeId = createId();
      const code = createCode();
      const expiresAt = Date.now() + 5 * 60 * 1000;

      store.set(challengeId, {
        mobile,
        code,
        expiresAt,
      });

      return NextResponse.json({
        success: true,
        challengeId,
        status: "pending",
        message: "SMS OTP verification initiated.",
        expiresAt: new Date(expiresAt).toISOString(),
      });
    }

    if (action === "verify") {
      const challengeId = String(body.challengeId ?? "");
      const code = String(body.code ?? "").trim();
      const record = store.get(challengeId);

      if (!record) {
        return NextResponse.json(
          { success: false, error: "OTP_NOT_FOUND" },
          { status: 404 }
        );
      }

      if (Date.now() > record.expiresAt) {
        store.delete(challengeId);

        return NextResponse.json(
          { success: false, error: "OTP_EXPIRED" },
          { status: 400 }
        );
      }

      if (code !== record.code) {
        return NextResponse.json(
          { success: false, error: "INVALID_OTP" },
          { status: 400 }
        );
      }

      store.delete(challengeId);

      return NextResponse.json({
        success: true,
        mobileVerified: true,
        status: "pending",
        message:
          "Mobile number verified successfully. Your account remains Pending. Admin Team verification and authorization will be completed within up to 72 hours. Portal access is available only after approval.",
      });
    }

    return NextResponse.json(
      { success: false, error: "INVALID_ACTION" },
      { status: 400 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "OTP_SERVICE_ERROR" },
      { status: 500 }
    );
  }
}
