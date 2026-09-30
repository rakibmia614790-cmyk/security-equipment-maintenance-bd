import type { PortalRole, AccountStatus } from "./roles";

export type PortalAccount = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  requestedRole: PortalRole;
  approvedRole: PortalRole | null;
  status: AccountStatus;
  createdAt: string;
  approvedAt: string | null;
  approvedBy: string | null;
};

export function createPendingAccount(input: {
  name: string;
  email: string;
  mobile: string;
  requestedRole: "engineer" | "technician";
}): PortalAccount {
  return {
    id: crypto.randomUUID(),
    name: input.name,
    email: input.email,
    mobile: input.mobile,
    requestedRole: input.requestedRole,
    approvedRole: null,
    status: "pending",
    createdAt: new Date().toISOString(),
    approvedAt: null,
    approvedBy: null,
  };
}

export function approveAccount(
  account: PortalAccount,
  approvedRole: PortalRole,
  approvedBy: string
): PortalAccount {
  return {
    ...account,
    approvedRole,
    status: "approved",
    approvedAt: new Date().toISOString(),
    approvedBy,
  };
}
