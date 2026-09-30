import { isPortalRole } from "./roles";

export function validateRegistration(input: {
  name: string;
  email: string;
  mobile: string;
  role: string;
}) {
  const errors: string[] = [];

  if (input.name.trim().length < 2) {
    errors.push("INVALID_NAME");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    errors.push("INVALID_EMAIL");
  }

  if (!/^\+?[0-9][0-9\s-]{7,19}$/.test(input.mobile.trim())) {
    errors.push("INVALID_MOBILE");
  }

  if (!isPortalRole(input.role) || input.role === "admin") {
    errors.push("INVALID_REQUESTED_ROLE");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
