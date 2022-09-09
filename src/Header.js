
const Header = ()=>{

    return ( 
        <header>
           <nav className="navbar navbar-expand-lg bg-info">
 
  <div className="container-fluid collapse navbar-collapse" 
  id="navbarSupportedContent">
  <img src="https://i.postimg.cc/fRxYq4Xc/logo.png"
   alt="" width="70" height="50"/>
      <div class="d-flex justify-content-between  ">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link active p" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
       
        <li className="nav-item">
        <a className="nav-link" href="#">Link2</a>
        </li>
      </ul>
      </div>
      <div className="d-flex justify-content-center">
      <div className="container ">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Suscribete
  </button>
</div>
</div>


<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">¡Aprovecha nuestras grandes ofertas!</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      <div class="modal-dialog modal-dialog-centered">
        <img src="https://i.postimg.cc/NjNYQTsM/cafe.png" 
        alt="vasocafe" 
        width="300" 
        height="300" />
      </div>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Comprar</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
      </div>

    </div>
  </div>
</div>


    </div>

</nav> 

        </header>

    )
}
export default Header; 