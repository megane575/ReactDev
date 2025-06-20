import { TodoProvider } from './contexts/TodoContext';
import { TodoTemplate } from './components/templates/TodoTemplate';

export const App = () => {
    return(
    <TodoProvider>
      <TodoTemplate/>
    </TodoProvider>
    )
};
