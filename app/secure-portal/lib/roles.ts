export const PORTAL_ROLES = [
  "admin",
  "engineer",
  "technician",
] as const;

export type PortalRole = (typeof PORTAL_ROLES)[number];

export const ACCOUNT_STATUSES = [
  "pending",
  "approved",
  "suspended",
  "rejected",
] as const;

export type AccountStatus = (typeof ACCOUNT_STATUSES)[number];

export function isPortalRole(value: string): value is PortalRole {
  return (PORTAL_ROLES as readonly string[]).includes(value);
}

export function canEnterPortal(
  role: PortalRole,
  status: AccountStatus
): boolean {
  return (
    PORTAL_ROLES.includes(role) &&
    status === "approved"
  );
}

export function isAdminRole(role: PortalRole): boolean {
  return role === "admin";
}
