export type PortalGuardAccount = {
  id: string;
  role: string;
  status: string;
};

export function canAccessPortal(
  account: PortalGuardAccount | null | undefined
): boolean {
  if (!account) return false;

  const validRoles = ["admin", "engineer", "technician"];

  return (
    validRoles.includes(account.role) &&
    account.status === "approved"
  );
}

export function canAccessAdmin(
  account: PortalGuardAccount | null | undefined
): boolean {
  return (
    canAccessPortal(account) &&
    account?.role === "admin"
  );
}
