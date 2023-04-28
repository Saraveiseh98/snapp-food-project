import { Label } from "../../components";
import { useAppDispatch } from "../../hooks";
import { getVendorsRequest } from "../../redux/actions/vendorsActions";
import "./styles.scss";

export const VendorsError: React.FC = () => {
  const dispatch = useAppDispatch();

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
};
