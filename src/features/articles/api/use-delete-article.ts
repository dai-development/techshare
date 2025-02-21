import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono/client";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.articles)[":article_id"]["$delete"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.articles)[":article_id"]["$delete"]
>;

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.articles[":article_id"]["$delete"]({
        param,
      });

      if (!response.ok) {
        throw new Error("記事の削除に失敗しました");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("記事を削除しました");
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
    onError: () => {
      toast.error("記事の削除に失敗しました");
    },
  });

  return mutation;
};
