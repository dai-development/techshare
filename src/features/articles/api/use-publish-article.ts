import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono/client";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.articles)[":article_id"]["publish"]["$patch"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.articles)[":article_id"]["publish"]["$patch"]
>;

export const usePublishArticle = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ param }) => {
      const response = await client.api.articles[":article_id"]["publish"][
        "$patch"
      ]({
        param,
      });

      if (!response.ok) {
        throw new Error("記事の公開に失敗しました");
      }

      return await response.json();
    },
    onSuccess: ({ data }) => {
      toast.success("記事を公開しました");
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["articles", data.id] });
    },
    onError: () => {
      toast.error("記事の公開に失敗しました");
    },
  });

  return mutation;
};
