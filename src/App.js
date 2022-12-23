import Content from './components/content/Content';
import Header from './components/header/Header';
import { TodoProvider } from './components/context/TodoContext';
import Footer from './components/Footer';

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header/>
        <Content/>
      </section>
      <Footer/>
    </TodoProvider>
  );
}

export default App;
