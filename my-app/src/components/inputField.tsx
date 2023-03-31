import React, { useRef } from "react";


interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAddTodo: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAddTodo }: Props) => {


    const inputRef = useRef<HTMLInputElement>(null);


    return (
        <>
            <form className="input" onSubmit={(e) => {
                handleAddTodo(e)
                inputRef.current?.blur();
            }}>
                <input
                    ref={inputRef}
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    type="input"
                    placeholder="Enter a task"
                    className="input-box"
                />
                <button type="submit" className="submit-button">Go</button>
            </form>
        </>
    )
}

export default InputField;