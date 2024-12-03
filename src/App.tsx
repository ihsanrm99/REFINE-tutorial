import { Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { EditProduct } from "./pages/products/edit";
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
        {/* <ShowProduct /> */}
        <EditProduct />
        {/* <ListProducts /> */}
        {/* <CreateProduct /> */}
      </Refine>
      <DevtoolsPanel />
    </DevtoolsProvider>
  );
}

export default App;
