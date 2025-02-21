"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeftIcon, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { EditArticleForm } from "@/features/articles/components/edit-article-form";

import { useGetArticle } from "@/features/articles/api/use-get-article";
import { useGetCurrent } from "@/features/auth/api/use-get-current";

interface EditArticlePageProps {
  params: {
    articleId: string;
  };
}

const EditArticlePage = ({ params }: EditArticlePageProps) => {
  const { articleId } = params;
  const { data: article, isLoading: isLoadingArticle } =
    useGetArticle(articleId);
  const { data: user, isLoading: isLoadingUser } = useGetCurrent();

  if (isLoadingArticle || isLoadingUser)
    return (
      <div className="flex justify-center items-center pt-80">
        <Loader2 className="size-8 animate-spin" />
      </div>
    );

  if (!user) redirect("/");
  if (!article) redirect("/");

  if (user.id !== article.authorId) redirect("/");

  return (
    <>
      <Container className="flex flex-col gap-4">
        <Link href="/home">
          <Button variant="outline">
            <ArrowLeftIcon className="w-4 h-4" />
            Back
          </Button>
        </Link>
        <EditArticleForm article={article} />
      </Container>
    </>
  );
};

export default EditArticlePage;
