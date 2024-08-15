import { get } from "@/lib/axios/api-handler";
import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";

// GET hook
export const useGet = <TData, TError>(
  url: string,
  options?: UseQueryOptions<TData, TError>
) => {
  return useQuery<TData, TError>({
    queryKey: [url],
    queryFn: () => get<TData>(url),
    ...options,
  });
};

// // POST hook
// export const usePost = <TData, TVariables>(
//   url: string,
//   options?: UseMutationOptions<TData, unknown, TVariables>
// ) => {
//   const queryClient = useQueryClient();
//   return useMutation<TData, unknown, TVariables>({
//     mutationFn: (variables) => post<TData>(url, variables),
//     onSuccess: (data, variables, context) => {
//       // Optional: Invalidate queries after successful POST
//       queryClient.invalidateQueries([url]);
//     },
//     ...options,
//   });
// };
