import { useFunnel } from "@use-funnel/react-router-dom";
import Login from "../components/Login";
import Main from "../components/Main";

type FunnelSteps = {
  Login: Record<string, never>;
  Main: Record<string, never>;
};

const Home = () => {
  const funnel = useFunnel<FunnelSteps>({
    id: "app-flow",
    initial: {
      step: "Login",
      context: {},
    },
  });

  return <funnel.Render Login={Login} Main={Main} />;
};

export default Home;
