import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Recettes from "./pages/Recettes";
import NotFound from "./pages/NotFound"



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/recettes' exact component={Recettes} />
        <Route path="/recettes/:id" render={(props) => <h2>Page de la recette: {props.match.params.id} </h2>} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
