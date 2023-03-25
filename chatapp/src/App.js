import { ChatEngine, ChatFeed } from 'react-chat-engine';
import './App.css';
// import { ChatFeed } from './components/ChatFeed';

function App() {
  return (
    <div className="App">
        <h1>React Chat Application</h1>
        <ChatEngine
            height='100vh'
            projectID="8809f415-75f3-41dc-850d-e56b1b81a8de"
            userName="Test"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
            renderChatList={(chatAppState) => {<ChatFeed {...chatAppState} />}}
            
        />
    </div>
  );
}

export default App;
