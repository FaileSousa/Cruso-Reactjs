import { Link } from "react-router-dom";

function Sobre() {
    return (
      <div className="sobre">
        <h1>Bem vindo a Pagina Sobre</h1>

        <Link to="/">pagina Home</Link> <br/>
        <Link to="/contato" >Contato</Link>
      </div>
    );
  }
  
  export default Sobre;
  