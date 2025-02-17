"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";

import { useLoginModal } from "@/features/auth/hooks/use-login-modal";

export const Hero = () => {
  const { open } = useLoginModal();

  return (
    <div className="pt-16 md:pt-32 pb-32 bg-neutral-100">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={1700}
          height={1700}
          className="object-cover"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            <span className="block">記事を共有して、</span>
            <span className="block text-blue-600">知見を広げよう</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            TechShareは、エンジニアのための技術記事共有プラットフォームです。
            あなたの知見を共有し、他のエンジニアの知見を学びましょう。
          </p>
          <div className="mt-2 sm:mt-12">
            <Button onClick={open} size="lg">
              無料で始める
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
