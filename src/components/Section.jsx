
const Section = ({text,icon,children}) =>{

  return <div className='my-5 mx-5 mb-10'>
    <div className='flex my-3 items-center mb-6'>
    {icon}
      <h1 className='font-bold text-2xl mx-2'> {text}</h1>
    </div>
    {children}
     
  </div>
}

export default Section;