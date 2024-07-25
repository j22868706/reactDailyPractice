import Header from './compponents/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import Coreconcept from './compponents/CoreConcept.jsx'




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
