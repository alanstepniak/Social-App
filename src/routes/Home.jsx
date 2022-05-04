import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
    state = {
      posts: []
    }
  
    componentDidMount() {
      axios.get(`https://akademia108.pl/api/social-app/user/signup`)
        .then(res => {
          const posts = res.data;
          this.setState({ posts });
        })
    }
  
    render() {
      return (
        <div className="App">
        
        <nav>
        <Link to="/" id='home'>home</Link>
        <Link to="/login" id='login'>login</Link>
        <Link to="/signup" id='signUp'>sign up</Link>
        </nav>
        <Routes>
        
          <Route index path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signUp" element={<SignUp />} />
        
      </Routes>
  
      <ul>
          {
            this.state.posts
              .map(posts =>
                <li key={posts.id}>{posts.name}</li>
              )
          }
        </ul>
      </div>
      )
    }
  }