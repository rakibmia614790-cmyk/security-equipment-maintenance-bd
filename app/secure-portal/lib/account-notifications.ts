import type { AccountStatus, PortalRole } from "./roles";

export type AccountNotification = {
  subject: string;
  message: string;
};

export function getAccountStatusNotification(
  name: string,
  status: AccountStatus,
  role: PortalRole | null
): AccountNotification {
  if (status === "approved") {
    return {
      subject: "SecureTech Portal — Account Approved",
      message:
        `Dear ${name},\n\n` +
        `Your SecureTech Portal account has been approved by the Admin Team. ` +
        `Your authorized role is ${role ?? "Portal User"}. ` +
        `You may now access the portal using your registered credentials.\n\n` +
        `Regards,\nSecureTech Admin Team`,
    };
  }

  if (status === "rejected") {
    return {
      subject: "SecureTech Portal — Account Verification Update",
      message:
        `Dear ${name},\n\n` +
        `Your SecureTech Portal account could not be approved at this time. ` +
        `Please contact the SecureTech Admin Team for further information.\n\n` +
        `Regards,\nSecureTech Admin Team`,
    };
  }

  if (status === "suspended") {
    return {
      subject: "SecureTech Portal — Account Suspended",
      message:
        `Dear ${name},\n\n` +
        `Your SecureTech Portal access has been suspended by the Admin Team. ` +
        `Please contact the SecureTech Admin Team for assistance.\n\n` +
        `Regards,\nSecureTech Admin Team`,
    };
  }

  return {
    subject: "SecureTech Portal — Verification Pending",
    message:
      `Dear ${name},\n\n` +
      `Your account remains Pending Admin Team verification. ` +
      `Please allow up to 72 hours for the verification process.\n\n` +
      `Regards,\nSecureTech Admin Team`,
  };
}
