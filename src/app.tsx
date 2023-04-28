import { RouterProvider } from "react-router-dom";
import store from "./redux/configureStore.ts";
import { Provider } from "react-redux";
import router from "./routers/router.tsx";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
