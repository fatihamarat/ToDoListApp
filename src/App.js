import Content from './components/content/Content';
import Header from './components/header/Header';
import { TodoProvider } from './components/context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header/>
        <Content/>
      </section>
    </TodoProvider>
  );
}

export default App;
