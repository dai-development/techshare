"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useCreateArticle } from "@/features/articles/api/use-create-article";

export const CreateArticleButton = () => {
  const { mutate: createArticle, isPending } = useCreateArticle();

  return (
    <Button className="rounded-lg" onClick={createArticle} disabled={isPending}>
      <Plus className="size-4 mr-1" />
      記事を作成
    </Button>
  );
};
