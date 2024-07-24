import reactImg from './assets/react-core-concepts.png';
import componentImg  from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  return (
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}

function Coreconcept({image, title, description}) {
  return <li>
    <img src={image} alt={title}></img>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <Coreconcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image} 
            /> 
            <Coreconcept 
              title={CORE_CONCEPTS[1].title} 
              description={CORE_CONCEPTS[1].description} 
              image={CORE_CONCEPTS[1].image} 
            />
            <Coreconcept {...CORE_CONCEPTS[2]} />  
            <Coreconcept {...CORE_CONCEPTS[3]} /> 
          </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
