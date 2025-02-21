import { useParams } from "next/navigation";

export const useArticleId = () => {
  const params = useParams();

  return params.articleId as string;
};
