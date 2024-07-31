import Header from './compponents/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import Coreconcept from './compponents/CoreConcept.jsx'
import TabButton from "./compponents/TabButton.jsx"




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
        <section id="examples">
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
