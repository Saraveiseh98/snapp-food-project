import { useEffect } from "react";
import { useVendorsSelector, useAppDispatch } from "../../hooks";
import { getVendorsRequest } from "../../redux/actions/vendorsActions";
import Card from "../../components/vendorCard";
import "./styles.scss";

export const VendorsList: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getVendorsRequest());
  }, [dispatch]);
  const vendorsData = useVendorsSelector();
  console.log(vendorsData);

  return (
    <div className="vendorsList">
      {vendorsData?.data?.map((item) => {
        if (item.type === "TEXT") return null;
        if (item.type === "VENDOR")
          return (
            <Card
              className="vendorsList__card"
              data={item.data}
              key={item.data.id}
            />
          );
      })}
    </div>
  );
};
