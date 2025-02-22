"use client";

import Link from "next/link";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Article } from "@/features/articles/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { useGetUser } from "@/features/auth/api/use-get-user";

export const ArticleCard = ({ article }: { article: Article }) => {
  const { data: user } = useGetUser(article.authorId);

  return (
    <Link href={`/articles/${article.id}`}>
      <Card>
        <div className="w-full h-40 bg-neutral-100 flex justify-center items-center">
          <p className="text-6xl">{article.icon}</p>
        </div>
        <CardHeader>
          <CardTitle className="mb-2">{article.title}</CardTitle>
          <CardDescription>
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={user?.image!} className="rounded-full" />
              </Avatar>
              <p> {user?.name}</p>
            </div>
            <span className="text-sm text-muted-foreground flex justify-end">
              {article.publishedAt?.split("T")[0]}
            </span>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
