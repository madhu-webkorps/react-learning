import "./Card.css"

function Card(props){
  return (
      <div className="card">
        <img className="card-img-top" src={props.src} alt=''/>
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">{props.text}</p>
          <a href={props.link} className="btn btn-primary">LINK</a>
        </div>
      </div>
    
  )
}

export default Card;