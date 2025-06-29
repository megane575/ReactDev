import { useTodoContext } from '../../../hooks/useTodoContext.js';
import { useTodoCreateTemplate } from './useTodoCreateTemplate.js';
import { BaseLayout } from '../../organisms';
import { CommonButton, InputForm, TextArea } from '../../atoms'
import './style.css';

export const TodoCreateTemplate = () => {
    const { addTodo } =useTodoContext();
    const {
        inputTitle,
        inputContent,
        handleChangeTitle,
        handleChangeContent,
        handleCreateTodo,
    } = useTodoCreateTemplate({ addTodo});

    return(
    <BaseLayout title={"Create Todo"}>
        <form className="container" onSubmit={handleCreateTodo} >
            <div div className="area">
                <InputForm
                    value={inputTitle}
                    placeholder={"Title"}
                    onChange={handleChangeTitle}
                />
            </div>
            <div className="area">
                <TextArea
                    value={inputContent}
                    placeholder={"Content"}
                    onChange={handleChangeContent}
                />
            </div>
            <div className="area">
                <CommonButton type="submit" label="Create Todo"/>
            </div>
        </form>
    </BaseLayout>
    )
}