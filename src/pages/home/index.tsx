import { Link } from "../../components/link";
import { RoutesPath } from "../../routers/types/routeTypes";

export const HomePage: React.FC = () => {
  return (
    <div>
      <Link path={RoutesPath.VENDORS_ROUTE} text="برو به رستوران ها" />
    </div>
  );
};
