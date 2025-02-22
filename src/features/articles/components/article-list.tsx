"use client";

import { Loader2 } from "lucide-react";

import { useGetArticles } from "@/features/articles/api/use-get-articles";
import { ArticleCard } from "@/features/articles/components/article-card";

export const ArticleList = () => {
  const { data: articles, isLoading } = useGetArticles();

  if (isLoading)
    return (
      <div className="w-full mt-72 flex justify-center items-center">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );

  if (!articles)
    return (
      <div className="w-full mt-64 flex justify-center items-center">
        記事が見つかりません
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div key={article.id}>
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
};
