import './App.css';
import Feed from './components/Feed/Feed';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout >
        <Feed />
      </Layout>
    </div>
  );
}

export default App;
