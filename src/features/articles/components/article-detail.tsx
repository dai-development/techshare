"use client";

import ReactMarkdown from "react-markdown";

import { useGetArticle } from "../api/use-get-article";
import { useArticleId } from "../hooks/use-article-id";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";

export const ArticleDetail = () => {
  const articleId = useArticleId();
  const { data: article, isLoading } = useGetArticle(articleId);

  if (isLoading)
    return (
      <div className="w-full mt-72 flex justify-center items-center">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );

  if (!article) {
    redirect("/home");
  }

  return (
    <div>
      <div className="mb-12">
        <p className="text-center text-6xl mb-8">{article?.icon}</p>
        <h2 className="text-4xl font-bold text-center mb-4">
          {article?.title}
        </h2>
        <p className="text-center text-neutral-400">
          公開日：{article?.publishedAt?.split("T")[0]}
        </p>
      </div>
      <div className="bg-neutral-100 p-8 pb-40 min-h-[500px] overflow-auto prose prose-sm md:prose-base lg:prose-lg dark:prose-invert w-full max-w-none prose-pre:bg-dark-800 prose-pre:border prose-pre:border-border">
        <ReactMarkdown>{article?.content}</ReactMarkdown>
      </div>
    </div>
  );
};
