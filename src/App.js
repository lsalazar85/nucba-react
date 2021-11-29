import Header from "./components/Header"
import Footer from './components/Footer'
import Calculator from "./components/Calculator"
import Main from "./components/Main"


const App = () => {

  return (
    <Main>
      <Header text="Header" />
      <Calculator />
      <Footer />
    </Main>
  );
}

export default App;
