import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useGetCurrent = () => {
  const query = useQuery({
    queryKey: ["current"],
    queryFn: async () => {
      const response = await client.api.authentication.current.$get();
      if (!response.ok) {
        return null;
      }
      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
