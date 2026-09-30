export const ADMIN_VERIFICATION_WINDOW_HOURS = 72;

export type OtpChallenge = {
  id: string;
  mobile: string;
  expiresAt: number;
  verified: boolean;
};

export function createOtpChallenge(
  id: string,
  mobile: string,
  lifetimeMs = 5 * 60 * 1000
): OtpChallenge {
  return {
    id,
    mobile,
    expiresAt: Date.now() + lifetimeMs,
    verified: false,
  };
}

export function isOtpExpired(challenge: OtpChallenge): boolean {
  return Date.now() >= challenge.expiresAt;
}

export function verifyOtpChallenge(
  challenge: OtpChallenge,
  code: string,
  expectedCode: string
): OtpChallenge {
  if (isOtpExpired(challenge)) {
    throw new Error("OTP_EXPIRED");
  }

  if (code.trim() !== expectedCode) {
    throw new Error("INVALID_OTP");
  }

  return {
    ...challenge,
    verified: true,
  };
}


export function getPendingVerificationMessage(): string {
  return `Your mobile number has been successfully verified. Your SecureTech Portal account is now Pending. The Admin Team will complete account verification and authorization within 72 hours. Portal access will be available only after Admin Team approval.`;
}

export function getPendingVerificationEmail(name: string): {
  subject: string;
  body: string;
} {
  return {
    subject: "SecureTech Portal — Account Verification Pending",
    body: `Dear ${name},

Your mobile number has been successfully verified.

Your SecureTech Portal account is now Pending Admin Team verification. The account verification and authorization process will be completed within 72 hours.

Please wait for the account approval notification. Portal access will only be granted after Admin Team approval.

Regards,
SecureTech Admin Team`,
  };
}
