"use client";

import { Button } from "@/components/ui/button";

import { useLoginModal } from "@/features/auth/hooks/use-login-modal";

export const MarketingHeaderNav = () => {
  const { open } = useLoginModal();

  return (
    <nav>
      <Button onClick={open}>ログイン</Button>
    </nav>
  );
};
