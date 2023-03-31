import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import { Todo } from './todo-model';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


function App() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: uuidv4(), todo: todo, isDone: false }]);
      setTodo('');
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add;
    let activeTodos = [...todos];
    let completeTodos = [...completedTodos];

    if (source.droppableId === "TodosList") {
      add = activeTodos[source.index];
      activeTodos.splice(source.index, 1)
    } else {
      add = completeTodos[source.index];
      completeTodos.splice(source.index, 1)
    }

    if (destination.droppableId === "TodosList") {
      activeTodos.splice(source.index, 0, add)
    } else {
      completeTodos.splice(source.index, 0, add)
    }

    setTodos(activeTodos);
    setCompletedTodos(completeTodos);

  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>

      <div className="App">
        <span className='heading'>Todo</span>
        <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
