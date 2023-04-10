import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="main-heading">{title}</h1>
      <p>{description}</p>
      <div className="image-container">
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}
export default CardItem
