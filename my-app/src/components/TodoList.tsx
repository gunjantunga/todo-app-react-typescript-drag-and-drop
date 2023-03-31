import React from "react";
import { Todo } from "../todo-model";
import SingleTodo from './Todo'
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[],
    completedTodos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {

    return (
        <div className="container">
            <Droppable droppableId="TodosList">

                {
                    (provided, snapshot) => (

                        <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos-heading">Active Task</span>
                            {todos.map((item, index) => (
                                <SingleTodo
                                    index={index}
                                    todo={item}
                                    key={item.id}
                                    todos={todos}
                                    setTodos={setTodos}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {
                    (provided, snapshot) => (

                        <div className={`todos remove ${snapshot.isDraggingOver ? "dragcomplete" : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos-heading">Completed Task</span>
                            {completedTodos.map((item, index) => (
                                <SingleTodo
                                    index={index}
                                    todo={item}
                                    key={item.id}
                                    todos={completedTodos}
                                    setTodos={setCompletedTodos}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </div>
    )
}

export default TodoList;