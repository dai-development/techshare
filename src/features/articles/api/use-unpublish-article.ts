import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono/client";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.articles)[":article_id"]["unpublish"]["$patch"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.articles)[":article_id"]["unpublish"]["$patch"]
>;

export const useUnpublishArticle = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.articles[":article_id"]["unpublish"][
        "$patch"
      ]({
        param,
      });

      if (!response.ok) {
        throw new Error("記事の非公開に失敗しました");
      }

      return await response.json();
    },
    onSuccess: ({ data }) => {
      toast.success("記事を非公開にしました");
      queryClient.invalidateQueries({ queryKey: ["articles", data.id] });
    },
    onError: () => {
      toast.error("記事の非公開に失敗しました");
    },
  });

  return mutation;
};
