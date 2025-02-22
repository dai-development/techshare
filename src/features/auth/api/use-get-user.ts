import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetUser = (userId: string) => {
  const query = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await client.api.authentication[":user_id"].$get({
        param: { user_id: userId },
      });
      if (!response.ok) {
        return null;
      }
      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
