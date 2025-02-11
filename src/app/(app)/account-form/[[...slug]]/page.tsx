"use client";

import { usePathname } from "next/navigation";
import AccountFormNg from "../components/AccountFormNg";
import AccountFormOk from "../components/AccountFormOk";

export default function AccountFormPage() {
  const pathname = usePathname();

  if (pathname === "/account-form/ng") {
    return <AccountFormNg />;
  } else if (pathname === "/account-form/ok") {
    return <AccountFormOk />;
  }

  return <></>;
}
