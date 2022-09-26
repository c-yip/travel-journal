import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <Cards 
        key={item.id}
        {...item}
      />
    )
  })
  
  return (
    <div>
      <Nav />
      <section className='cards-section'>
        {cards}
      </section>
      
    </div>
  );
}

export default App;
