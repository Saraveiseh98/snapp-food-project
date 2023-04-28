import { useEffect } from "react";
import { useVendorsSelector, useAppDispatch } from "../../hooks";
import { getVendorsRequest } from "../../redux/actions/vendorsActions";
import { VendorCard, Loader } from "../../components";
import { LoadMore } from "../loadMore";
import { VendorsError } from "../vendorsError";
import "./styles.scss";

export const VendorsList: React.FC = () => {
  const {
    data,
    pageNumber,
    pageSize,
    totalCount,
    loadingMore,
    loading,
    error,
  } = useVendorsSelector();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getVendorsRequest());
  }, [dispatch]);

  const hasMoreData = (pageNumber + 1) * pageSize <= totalCount;

  if (loading) return <Loader active />;

  if (error) return <VendorsError />;

  return (
    <div className="vendors-list">
      {data?.map((item) => {
        if (item.type === "TEXT") return null;
        if (item.type === "VENDOR")
          return (
            <VendorCard
              className="vendors-list__card"
              data={item.data}
              key={item.data.id}
            />
          );
      })}
      <LoadMore enable={hasMoreData} isLoadingMore={loadingMore} />
    </div>
  );
};
