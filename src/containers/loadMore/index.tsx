import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "../../hooks";
import { loadMoreVendorsRequest } from "../../redux/actions/vendorsActions";
import { Props } from "./type";
import "./styles.scss";
import { Loader } from "../../components/loader";

export const LoadMore: React.FC<Props> = ({ enable, isLoadingMore }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inView && enable) dispatch(loadMoreVendorsRequest());
  }, [inView, enable, dispatch]);

  return (
    <div ref={ref} className="loading-container">
      <Loader active={isLoadingMore} />
    </div>
  );
};
