export default function Travel(props) {
    return (
      <div className="travel-container">
        <img className="travel-img" src={props.imageUrl} alt={props.title} />
        <div className="travel-content">
          <div className="flex">
            <img className="pin-icon" src="/images/pin-icon.png" alt="pin icon" />
            <p>{props.location.toUpperCase()}</p>
            <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h1 className="travel-title">{props.title}</h1>
          <h4>{props.startDate} - {props.endDate}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    )
}