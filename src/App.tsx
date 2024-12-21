import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-[480px] mx-auto min-h-screen bg-gray-50 relative pb-[60px] border-x border-gray-200">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
