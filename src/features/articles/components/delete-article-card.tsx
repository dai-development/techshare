import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useArticleId } from "@/features/articles/hooks/use-article-id";
import { useDeleteArticle } from "@/features/articles/api/use-delete-article";
import { useDeleteArticleModal } from "@/features/articles/hooks/use-delete-article-modal";

export const DeleteArticleCard = () => {
  const router = useRouter();
  const { mutate: deleteArticle, isPending: isDeletingArticle } =
    useDeleteArticle();
  const articleId = useArticleId();
  const { close: closeDeleteArticleModal } = useDeleteArticleModal();

  const handleDelete = () => {
    deleteArticle(
      { param: { article_id: articleId } },
      {
        onSuccess: () => {
          router.push("/home");
          closeDeleteArticleModal();
        },
      }
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete Article</CardTitle>
      </CardHeader>
      <CardContent>
        <p>本当に記事を削除しますか？</p>
      </CardContent>
      <CardFooter>
        <Button variant="destructive" onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
