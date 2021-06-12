import "./app.scss";
import Filter from "./components/filter/filter";
import List from "./components/list/list";
import Navbar from "./components/navbar/navbar";
import Recommendation from "./components/recommendation/recommendation";

function App() {
  return (
    <>
      <Navbar />
      <Recommendation />
      <Filter />
      <List />
    </>
  );
}

export default App;
