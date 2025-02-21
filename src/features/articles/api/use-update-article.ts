import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.articles)[":article_id"]["$patch"],
  200
>;
type RequestType = InferRequestType<
  (typeof client.api.articles)[":article_id"]["$patch"]
>;

export const useUpdateArticle = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json, param }) => {
      const response = await client.api.articles[":article_id"]["$patch"]({
        json,
        param,
      });

      if (!response.ok) {
        throw new Error("記事の更新に失敗しました");
      }

      return await response.json();
    },
    onSuccess: ({ data }) => {
      toast.success("記事を更新しました");
      queryClient.invalidateQueries({ queryKey: ["articles", data.id] });
    },
    onError: () => {
      toast.error("記事の更新に失敗しました");
    },
  });

  return mutation;
};
