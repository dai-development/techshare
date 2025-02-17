"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

import { useLoginModal } from "@/features/auth/hooks/use-login-modal";

export const CallToAction = () => {
  const { open } = useLoginModal();

  return (
    <div className="bg-neutral-100">
      <Container className="py-32 md:py-40 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-neutral-900">
          エンジニアの知見を共有しよう
        </h2>
        <p className="mt-4 text-lg leading-6 text-neutral-500">
          あなたの経験や知識が、誰かの助けになります。
          今すぐTechShareで技術記事の共有を始めましょう。
        </p>
        <div className="mt-8">
          <Button size="lg" onClick={open}>
            無料で始める
          </Button>
        </div>
      </Container>
    </div>
  );
};
