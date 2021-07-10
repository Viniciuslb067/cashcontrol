import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";

import { Home } from "./pages/Home";
import { Panel } from "./pages/Panel";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ConfigProvider locale={ptBR}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/control" component={Panel} />
          </Switch>
        </ConfigProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
