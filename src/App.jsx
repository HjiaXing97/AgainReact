import { useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <div className="App">
      <header className="header">header</header>
      <div className="page">{useRoutes(routes)}</div>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
