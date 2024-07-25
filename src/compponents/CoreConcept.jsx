export default function Coreconcept({image, title, description}) {
    return <li>
      <img src={image} alt={title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  }