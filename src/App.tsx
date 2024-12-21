import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-gray-50 relative border-x border-gray-200">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
