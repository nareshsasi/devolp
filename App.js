import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import ChatFeed from './components/ChatFeed';


  
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <ChatEngine
    height="100vh"
    projectID="
    f1c29fe6-9885-4397-b772-f96ea5334dbe"
    userName="rajkumar"
    userSecret="12345"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
export default App;