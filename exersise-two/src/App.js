import './App.css';
import './components/variables.css'

import Footer from './components/mainPage/Footer';
import Header from './components/mainPage/Header';
import WordList from './components/mainPage/WordList';
import WordCard from './components/wordCard/WordCard';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <WordList></WordList>
        <WordCard></WordCard>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
