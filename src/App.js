import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], user: '', text: '' };
    this.tweet = this.tweet.bind(this);
    this.userName = this.userName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <header>Chat</header>
        <div className="container">
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <input
              onChange={this.userName}
              value={this.state.user}
              id='tweets'
              placeholder="あなたの名前"
            /><br />
            <textarea
              id="new-todo"
              onChange={this.tweet}
              value={this.state.text}
              placeholder='Content'
            /><br />
            <button
              className='btn btn-success'
              type='submit'
            >賞賛</button>
          </form>
        </div>
      {/* TweetList Componentの呼び出し */}
      <div className="tweet-list">
        <TweetList items={this.state.items} />
      </div>
      </React.Fragment>
    );
  }

  tweet(event) {
    this.setState({ text: event.target.value });
  }

  userName(event){
    this.setState({ user: event.target.value});
  }

  handleSubmit(event) {
  {/* ユーザー名・ツイートが入力されなかった場合のバリデーション */}
  event.preventDefault();
  if(this.state.user === "") {
    alert('ユーザー名を入力してください')
    return;
  }else if(this.state.text === ""){
    alert('ツイート内容を入力してください')
    return;
  }

  const newItem = {
    user: this.state.user,
    text: this.state.text,
  };
  this.setState(state => ({
    items: state.items.concat(newItem),
    user: '',
    text: ''
  }));
  }
}

class TweetList extends React.Component {
  render(){
    return(
      <React.Fragment>
        <ul>
          {this.props.items.map((item, i) => (
            <li key={i}>
              <div className="line-bc">
                <div className="balloon6">
                  <div className="faceicon">
                    <img src="favicon.ico" />
                    {item.user}
                  </div>
                  <div className="chatting">
                    <div className="says">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
