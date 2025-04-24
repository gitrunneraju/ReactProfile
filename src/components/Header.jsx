import myimage from '../assets/Aditya.png'

const Header = () =>{
 return  <header className="bg-blue-700 text-white p-5 shadow-xl rounded-xl flex justify-between items-center">
      <div className=''>
        <div className="font-bold text-3xl">Aditya Ujalambkar</div>
        <div className="text-xl">Java Full-stack Developer</div>
      </div>
       <img className='rounded-full w-24' src={myimage} alt="" />
  </header>
}

export default Header;