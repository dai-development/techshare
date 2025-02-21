import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetArticle = (articleId: string) => {
  const query = useQuery({
    queryKey: ["articles", articleId],
    queryFn: async () => {
      const response = await client.api.articles[":article_id"].$get({
        param: {
          article_id: articleId,
        },
      });

      if (!response.ok) {
        throw new Error("記事の取得に失敗しました");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
