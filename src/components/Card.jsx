

function Card(props){
    return (
        <div className="App">
          <div className="card" style={{ width: "18rem", display: "flex"}}>
      <img src= {props.imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Price- {props.price}</h5>
        <p className="card-text">Some   .</p>
        <a href="https://www.google.com" className="btn btn-primary">{props.btntext}</a>
      </div>
    </div>
        </div>
      );
}

export default Card;