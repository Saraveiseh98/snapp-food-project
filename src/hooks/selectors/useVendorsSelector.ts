import { useAppSelector } from "./useAppSelector";

export const useVendorsSelector = () => {
  return useAppSelector((state) => state.vendors);
};
