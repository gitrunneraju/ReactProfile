const IconLinks = ({icon,text,link}) =>{
  return <a className="flex  items-center text-blue-700" href={link} target="_blank">
    <span className="mb-1">{icon}</span>
    <p className="mx-2">{text}</p>
  </a>
}

export default IconLinks;
