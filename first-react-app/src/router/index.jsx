import { BrowserRouter, Routes, Route} from 'react-router';
import { NAVIGATION_LIST } from '../router'
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
            <Route index path ={NAVIGATION_LIST.TOP} element={<TodoListPage/>}/>
            <Route path ={NAVIGATION_LIST.DETAIL} element={<TodoDetailPage/>}/>
            <Route path ={NAVIGATION_LIST.CREATEL} element={<TodoCreatePage/>}/>
            <Route path ={NAVIGATION_LIST.EDIT} element={<TodoEditPage/>}/>
         </Routes>
        </BrowserRouter>
    )
}