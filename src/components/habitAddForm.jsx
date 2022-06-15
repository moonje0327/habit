
import React, {memo} from 'react';

//class에서 pureComponent를 사용하는것과 마찬가지로 함수에서는 memo를 사용 
const HabitAddForm = memo(props => {
    
    //React 는 dom요소에 접근하지 않으니,필요할때는 react에서 제공하는 creatref로 값을 가져와 사용 가능  
    const inputRef = React.createRef();
    const onSubimt = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        //이름이 있다면 props의 onAdd의 이름을 전달
        name && props.onAdd(name);
        //추가후에 입력창 빈값으로 설정
        inputRef.current.value = '';
    };
    return (
        <form className='add-form' onSubmit={onSubimt}>
            <input ref={inputRef} type='text' className='add-input' placeholder='please enter your habit' />
            <button className='add-button'>Add</button>
        </form>
    );
});

export default HabitAddForm;