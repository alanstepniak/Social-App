import React from 'react';
import axios from 'axios';
import '../Home.css';

export default class Home extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.post("https://akademia108.pl/api/social-app/post/latest")
            .then((res) => {
                this.setState({ posts: res.data });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <h2>posty</h2>
                <ul>
                    {
                        this.state.posts
                            .map(post =>
                                <li key={post.id}><span className='name'>{post.user.username}</span> <span className='date'>{post.created_at.substring(0, 10)}</span> <img src={post.user.avatar_url} alt="avatar" /> <span className='content'>{post.content}</span>  </li>
                            )
                    }
                </ul>
                <input className='login' type='submit' value='Load more' onClick={axios.post('https://akademia108.pl/api/social-app/post/older-then') }></input>
            </div>
        )
        document.getElementsByTagName('input').disabled = true;
    }
}