export default function Cards(props) {
  const location = props.location.toUpperCase();
  
  return (
    <div className="card">
      <img src={require(`../${props.imageUrl}`)} alt={'props.title'}/>
      
      <div className="card-content">
        <div className="location-container">
          <img src={require('../pin.jpg')} alt="pin"></img>
          <p>{location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="card-title">{props.title}</h1>
        <p className="dates">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  )
}