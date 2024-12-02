import { DevtoolsProvider, DevtoolsPanel } from "@refinedev/devtools";
import { Refine, WelcomePage } from "@refinedev/core";
import { dataProvider } from "./providers/data-provider";

function App() {
  return (
    (<DevtoolsProvider>(
            <Refine
        dataProvider={dataProvider}
        options={{
          projectId: "pktMga-x9szor-uqQ29U"
        }}>
        <WelcomePage />
      </Refine>)<DevtoolsPanel />
    </DevtoolsProvider>)
  );
}

export default App;
