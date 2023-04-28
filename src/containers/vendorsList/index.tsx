import { useEffect } from "react";
import { useVendorsSelector, useAppDispatch } from "../../hooks";
import { getVendorsRequest } from "../../redux/actions/vendorsActions";
import Card from "../../components/vendorCard";
import "./styles.scss";
import { LoadMore } from "../loadMore";
import { Loader } from "../../components/loader";
import Label from "../../components/label";

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

  if (error)
    return (
      <div className="error">
        <Label className="error__message" variant="title">
          خطای سرور!
        </Label>
        <button
          onClick={() => {
            dispatch(getVendorsRequest());
          }}
        >
          تلاش مجدد
        </button>
      </div>
    );

  return (
    <div className="vendors-list">
      {data?.map((item) => {
        if (item.type === "TEXT") return null;
        if (item.type === "VENDOR")
          return (
            <Card
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
