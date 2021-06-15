import { BrowserRouter, Route } from "react-router-dom";
import "./app.scss";
import Filter from "./components/filter/filter";
import List from "./components/list/list";
import Navbar from "./components/navbar/navbar";
import Recommendation from "./components/recommendation/recommendation";
import Login from "./login/login";
import Signup from "./signup/signup";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />

      <Route path="/" exact component={Recommendation} />
      <Route path="/" exact component={Filter} />
      <Route path="/" exact component={List} />
    </BrowserRouter>
  );
}

export default App;
