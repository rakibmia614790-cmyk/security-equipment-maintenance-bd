import {
  AccountStatus,
  PortalRole,
  canEnterPortal,
} from "./roles";

export type PortalAccount = {
  id: string;
  email: string;
  mobile: string;
  role: PortalRole;
  status: AccountStatus;
};

export function authorizePortalAccess(
  account: PortalAccount | null
): boolean {
  if (!account) {
    return false;
  }

  return canEnterPortal(account.role, account.status);
}

export function authorizeAdminAccess(
  account: PortalAccount | null
): boolean {
  return Boolean(
    account &&
      account.role === "admin" &&
      account.status === "approved"
  );
}
