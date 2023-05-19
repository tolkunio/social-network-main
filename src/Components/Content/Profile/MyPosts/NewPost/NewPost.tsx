import React, {ChangeEvent,KeyboardEvent} from 'react';
import {ActionType} from '../../../../../redux/store';
import {addNewPostAC, changeNewTextAC} from '../../../../../redux/profileReducer';
type NewPostPropsType = {
    newPostText: string
    dispatch: (action: ActionType) => void
}
const NewPost = (props:NewPostPropsType) => {
    const onChangeTextAreaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let action = changeNewTextAC(event.currentTarget.value)
        props.dispatch(action);
    }
    const onKeyPressTextAeaHandler = (event:KeyboardEvent<HTMLTextAreaElement>) => {
        let action = addNewPostAC();
        event.key === 'Enter' && props.dispatch(action);
    }
    const onClickButtonHandler = () => {
        let action = addNewPostAC();
        props.dispatch(action);
    }
    return (
        <div>
              <textarea
                  placeholder='New post...'
                  value={props.newPostText}
                  onChange={onChangeTextAreaHandler}
                  onKeyPress={onKeyPressTextAeaHandler}
              />
            <button onClick={onClickButtonHandler}>ADD</button>
        </div>
    );
};

export default NewPost;