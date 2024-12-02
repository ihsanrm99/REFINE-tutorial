import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { ShowProduct } from "./pages/products/show";
import { dataProvider } from "./providers/data-provider";

function App() {
  return (
    <DevtoolsProvider>
      <Refine
        dataProvider={dataProvider}
        options={{
          projectId: "pktMga-x9szor-uqQ29U",
        }}
      >
        <ShowProduct />
      </Refine>
      <DevtoolsPanel />
    </DevtoolsProvider>
  );
}

export default App;
