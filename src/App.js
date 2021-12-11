import './App.css';
import Nav from './components/Nav';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/ FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/ SixthSection';
import EighthSection from './components/EighthSection';
import Footer from './components/Footer';

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
        <EighthSection></EighthSection>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
