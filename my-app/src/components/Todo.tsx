import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../todo-model";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
    index: number,
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.todo)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDelete = (id: string) => {

        setTodos(todos.filter((item) => item.id !== id));
    }

    const handleDone = (id: string) => {

        setTodos(todos.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)))
    }

    const handleEdit = () => {
        setEdit(true);

    }

    const handleSubmit = (e: React.FormEvent, id: string) => {
        e.preventDefault();
        setTodos(todos.map((item) => (item.id === id ? { ...item, todo: editText } : item)))
        setEdit(false);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])
    return (
        <Draggable draggableId={todo.id.toString()} index={index}>

            {
                (provided, snapshot) => (

                    <form
                        className={`single-todos ${snapshot.isDragging ? 'drag' : ''}`}
                        onSubmit={(e) => handleSubmit(e, todo.id)}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {edit

                            ? <input ref={inputRef} type="text" value={editText} onChange={(e) => setEditText(e.target.value)} className="single-todo-text" /> :
                            (todo.isDone ? <s className="single-todo-text">{todo.todo}</s>
                                : <span className="single-todo-text">{todo.todo}</span>
                            )
                        }

                        <div >
                            <span className="icon">
                                <AiFillEdit onClick={() => handleEdit()} />
                            </span>
                            <span className="icon">
                                <AiFillDelete onClick={() => handleDelete(todo.id)} />
                            </span>
                            <span className="icon">
                                <MdDone onClick={() => handleDone(todo.id)} />
                            </span>
                        </div>
                    </form>
                )
            }
        </Draggable>
    )
}
export default SingleTodo;