import NavBar from './components/NavBar'
import Footer from './components/Footer'
import DataTable from './components/DataTable'

/*Este é o nosso componente principal do REACT
Temos a função App que retorna um HTML. Como elea retorna um HTML, podemos utilizar
essa função como sendo um componente no REACT*/

function App() {
  return (
    /**Aqui dentro ficará todos os nossos componentes */
    /* <> serve para que possamos retornar tags irmãs ao mesmo tempo*/
    <> 
      <NavBar />
      <div>
        <h1 className="text-primary">Olá mundo, Beleza?</h1>
        <DataTable />
      </div>
      <Footer/>
    </>
  );
}

export default App;