import { useTodoContent } from '../../../hooks/useTodoContext.js';
import { useTodoCreateTemplate } from './useTopCreateTemplate.js';
import { BaseLayout } from '../../organisms';
import { CommonButton, InputForm, TextArea } from '../../atoms'

export const TodoCreateTemplate = () => {
    const { addTodo } =useTodoContent();
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