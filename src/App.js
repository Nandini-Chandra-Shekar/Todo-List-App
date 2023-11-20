import './App.css';
import { TodoWrapper } from './Components/TodoWrapper';
import { Helmet } from 'react-helmet';

const TITLE = 'Todo List App';

function App() {
  return (
    <>
    <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
    <div className="App">
      <TodoWrapper  />
    </div>
    </>
  );
}

export default App;
