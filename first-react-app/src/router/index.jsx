import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NAVIGATION_LIST } from '../constants/navigation';
import { 
    TodoCreatePage,
    TodoDetailPage,
    TodoEditPage,
    TodoListPage,
} from '../pages';

export const Router = () => {
    return(
        <BrowserRouter>
         <Routes>
            <Route path ={NAVIGATION_LIST.TOP} element={<TodoListPage/>}/>
            <Route path ={NAVIGATION_LIST.DETAIL} element={<TodoDetailPage/>}/>
            <Route path ={NAVIGATION_LIST.CREATE} element={<TodoCreatePage/>}/>
            <Route path ={NAVIGATION_LIST.EDIT} element={<TodoEditPage/>}/>
         </Routes>
        </BrowserRouter>
    )
}