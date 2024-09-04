import { Link } from "react-router-dom"

function Home() {
  return (
    <div className='flex'>
      <div className="flex flex-col text-center w-3/5">
        <h1 className="text-4xl mt-20 font-bold">Os melhores produtos para a sua saúde!</h1>
        <p className="text-2xl mt-10">
          Navegue por nossos <Link to="/produtos" className="cursor-pointer hover:underline">produtos disponíveis!</Link>
        </p>
      </div>
      <div className="flex justify-end object-cover w-5/5">
        <img className=""
          src="https://images.pexels.com/photos/5910953/pexels-photo-5910953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Home