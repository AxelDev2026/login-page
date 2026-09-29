export default function App() {


  return (
    <div className="w-full h-screen bg-[url('../public/bg-netflix.jpg')]">
      <div className="w-full h-full bg-black/50 flex items-center justify-center">
      <img src="/bg-netflix1.svg" alt="" width="200" className="absolute top-3 left-[250px]" />
      <div className="w-[500px] h-auto min-h-[400px] bg-black/70 p-[30px] px-[60px]">
       <h1 className="font-bold text-[30px]">Sign In</h1>
        <form action="" className="flex flex-col gap-[20px] mt-[20px]" >
          <input 
          type="email" 
          placeholder="email address"
          className="w-full h-[50px] bg-[#2727276a] border-gray-400 pl-4"
          />

          <input 
          type="password" 
          placeholder="password"
          className="w-full h-[50px] bg-[#2727276a] border-gray-400 pl-4"
          />

          <button type="submit"className="w-full h-[40px] bg-[#e50816] rounded-sm border-none font-bold" > 
            sign in
          </button>

        </form>
      </div>
      </div>
    </div> 
  )
}