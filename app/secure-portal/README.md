# SecureTech Internal Portal

Internal portal roles:
- Admin Team
- Engineer
- Technician

Access lifecycle:
Registration
→ Email + Mobile
→ SMS OTP verification
→ Pending
→ Admin Team approval
→ Approved server-side role
→ Portal access

Security rules:
- OTP verification alone never grants portal access.
- User-selected role never grants privilege.
- Approved role is authoritative.
- Only Admin Team can authorize accounts.
- Partner and Authority are not portal roles.
- Pending, rejected, or suspended accounts cannot enter the portal.

Future modules:
- Admin Document Library
- Software
- Manuals
- SOPs
- Datasheets
- Troubleshooting
- Training
- Certificates
- Technical Documents
- Audit Logs
- Mobile App API
