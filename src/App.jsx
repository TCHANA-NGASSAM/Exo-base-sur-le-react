
import Card from './components/Card';
import Footer from './components/Footer';
function App() {


  return (
    <>
      <Card title="Mon titre" paragraph="Mon paragraphe" buttonLabel="Mon bouton" />
      <Footer paragraph="Mon paragraphe dans le footer" listItems={['Item 1', 'Item 2', 'Item 3']} />
    </>
  )
}

export default App
