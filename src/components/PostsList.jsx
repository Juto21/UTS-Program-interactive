import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList() {
const [enteredBody, setEnteredBody] = useState('');
const [enteredAuthor, setEnteredAuthor] = useState('');

function bodyChangeHandler(event) {
setEnteredBody(event.target.value);
}

function authorChangeHandler(event) {
setEnteredAuthor(event.target.value);
}

return (
<>
<NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
<ul className={classes.posts}>
<Post author={enteredAuthor} body={enteredBody} />
<Post author="Juanda Santoso Eka P" body="informatika 7C/20670010" />
</ul>
</>
);
}

export default PostsList;