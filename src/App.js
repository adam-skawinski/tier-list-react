import MobileInfo from "./components/MobileInfo/MobileInfo";
import MyRouter from "./components/Router/Router";

import "./sass/style/app.scss";

function App() {
  return (
    <div className="app">
      <MyRouter />
      <MobileInfo/>
    </div>
  );
}

export default App;
