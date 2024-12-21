import { useFunnel } from "@use-funnel/react-router-dom";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Main from "./components/Main";

type SplashState = Record<string, never>;
type LoginState = Record<string, never>;
type MainState = Record<string, never>;

type FunnelSteps = {
  Splash: SplashState;
  Login: LoginState;
  Main: MainState;
};

const AppContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-[480px] mx-auto min-h-screen bg-gray-50 relative pb-[60px] border-x border-gray-200">
    {children}
  </div>
);

const App = () => {
  const funnel = useFunnel<FunnelSteps>({
    id: "app-flow",
    initial: {
      step: "Splash",
      context: {},
    },
  });

  return (
    <AppContainer>
      <funnel.Render
        Splash={({ history }) => (
          <Splash onComplete={() => history.push("Login")} />
        )}
        Login={({ history }) => <Login onLogin={() => history.push("Main")} />}
        Main={Main}
      />
    </AppContainer>
  );
};

export default App;
