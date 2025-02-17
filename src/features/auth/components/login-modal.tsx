"use client";

import { Modal } from "@/components/modal";
import { LoginForm } from "@/features/auth/components/login-form";

import { useLoginModal } from "@/features/auth/hooks/use-login-modal";

export const LoginModal = () => {
  const { isOpen, setIsOpen } = useLoginModal();

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
      <LoginForm />
    </Modal>
  );
};
