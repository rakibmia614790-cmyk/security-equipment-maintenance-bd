export type NotificationChannel = "sms" | "email";

export type NotificationStatus =
  | "queued"
  | "sent"
  | "failed";

export type PortalNotification = {
  id: string;
  accountId: string;
  channel: NotificationChannel;
  status: NotificationStatus;
  subject: string | null;
  message: string;
  createdAt: string;
  sentAt: string | null;
};

export function createPendingNotifications(input: {
  accountId: string;
  name: string;
  email: string;
  mobile: string;
}): PortalNotification[] {
  const message =
    `Your SecureTech Portal mobile verification was successful. ` +
    `Your account is now Pending Admin Team verification. ` +
    `Please allow up to 72 hours for verification and authorization. ` +
    `Portal access will only be available after Admin Team approval.`;

  const emailBody =
    `Dear ${input.name},\n\n` +
    `${message}\n\n` +
    `Regards,\nSecureTech Admin Team`;

  return [
    {
      id: `${input.accountId}-sms`,
      accountId: input.accountId,
      channel: "sms",
      status: "queued",
      subject: null,
      message,
      createdAt: new Date().toISOString(),
      sentAt: null,
    },
    {
      id: `${input.accountId}-email`,
      accountId: input.accountId,
      channel: "email",
      status: "queued",
      subject: "SecureTech Portal — Verification Pending",
      message: emailBody,
      createdAt: new Date().toISOString(),
      sentAt: null,
    },
  ];
}
