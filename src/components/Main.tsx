import Calculator from "./Calculator"
const Main = () => {
  return (
    <main className=' h-screen w-screen flex items-center flex-col justify-center gap-10 '>
        <h1 className=' text-4xl font-bold'>Calculator</h1> 
        <Calculator />
    </main>
  )
}

export default Main