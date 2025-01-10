import React, { useState } from 'react';
import "./TodoList.css"
import TodoItem from './TodoItem';

export default function TodoList({ todo, onUpdate, onDelete }) {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearchResult = () => {
        return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <div className='TodoList'>
            <h3>Todo List ✨</h3>
            <input value={search} onChange={onChangeSearch} className='searchbar' placeholder='검색어를 입력하세요'/>
            <div className="list_wrapper">
                {getSearchResult().map((it) => (
                    // <div>{it.content}</div> key에러가 발생한다.
                    <TodoItem 
                        key={it.id}
                        {...it} 
                        onUpdate={onUpdate} 
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};
