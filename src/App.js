import './App.css';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/ FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/ SixthSection';
import Nav from './components/Nav';

function App() {
  return (
    <div className="wrapper">
      <main className="container">
        <Nav></Nav>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
        <FifthSection></FifthSection>
        <SixthSection></SixthSection>
      </main>
    </div>
  );
}

export default App;
