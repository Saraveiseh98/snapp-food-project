import { Link } from "../../components/link";
import { RoutesPath } from "../../routers/types/routeTypes";

export const HomePage: React.FC = () => {
  return (
    <>
      <Link path={RoutesPath.VENDORS_ROUTE} text="برو به رستوران ها" />
    </>
  );
};
