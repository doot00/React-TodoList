import React from 'react';
import './TodoItem.css';

export default function TodoItem({ id, content, isDone, createdDate, onUpdate, onDelete }) {
    const onChangeCheckbox = () => {
        onUpdate(id); // isDone 프로퍼티가 true로 변경되는지 확인한다.
    };

    const onClickDelete = () => {
            
        onDelete(id);
    };
    
    return (
        <div className='TodoItem'>
            <div className='checkbox_col'>
                <input onChange={onChangeCheckbox} checked={isDone} type='checkbox'/>
            </div>
            <div className='title_col'>{content}</div> 
            <div className='date_col'>
                {new Date(createdDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
}
