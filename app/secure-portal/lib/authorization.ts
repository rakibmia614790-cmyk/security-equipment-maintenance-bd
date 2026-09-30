import type { AccountStatus, PortalRole } from "./roles";

export type AuthorizedAccount = {
  id: string;
  role: PortalRole;
  status: AccountStatus;
};

export function requireApprovedAccount(
  account: AuthorizedAccount | null
): AuthorizedAccount {
  if (!account) {
    throw new Error("PORTAL_AUTHENTICATION_REQUIRED");
  }

  if (account.status !== "approved") {
    throw new Error("PORTAL_ACCESS_PENDING_APPROVAL");
  }

  if (
    account.role !== "admin" &&
    account.role !== "engineer" &&
    account.role !== "technician"
  ) {
    throw new Error("PORTAL_ROLE_NOT_AUTHORIZED");
  }

  return account;
}

export function requireAdminAccount(
  account: AuthorizedAccount | null
): AuthorizedAccount {
  const authorized = requireApprovedAccount(account);

  if (authorized.role !== "admin") {
    throw new Error("ADMIN_ACCESS_REQUIRED");
  }

  return authorized;
}
