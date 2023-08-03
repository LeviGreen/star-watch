import {  Button, Card, Input } from './styles';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Input placeholder='Enter Location'></Input>
          <Button>Submit</Button>
        </Card>
      </header>
    </div>
  );
}

export default App;
