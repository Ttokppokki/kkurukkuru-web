import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useTokenStore } from "./stores/token";
import { Toaster } from "react-hot-toast";

const App = () => {
  const accessToken = useTokenStore.getState().accessToken;

  if (
    !accessToken &&
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/callback"
  ) {
    window.location.href = "/login";
  }

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-gray-50 relative border-x border-gray-200">
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
