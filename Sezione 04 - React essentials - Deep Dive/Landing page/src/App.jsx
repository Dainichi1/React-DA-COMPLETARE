import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/CoreConcepts.jsx";
import Examples from "./components/Example/Examples.jsx";

function App() {
  return (
    <>
      {/* oppure <Fragment> */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </> /* oppure </Fragment> */
  );
}

export default App;
