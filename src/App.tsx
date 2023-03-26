import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import NavBar from './components/navLink'
import ExpandbleText from './components/ExpandbleText'

function App() {
  const ingredients = ["Mushroom", "Pickles", "olive", "White-Cheese"]
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "husam",
      age: 26
    }
  })
  const [pizza, setPizza] = useState({
    name: "spicy Pepperoni",
    topping: []
  })
  const [selected, setSelected] = useState<string[]>([])
  const [temp, setTemp] = useState("")
  function handleClick() {
    setGame(prev => { return { ...prev, player: { ...prev.player, name: temp } } })
  }

  function handleTextChange(e) {
    setTemp(e.target.value)
  }
  function handlePicking(item: string) {
    const exist = selected.find(el => item == el)
    !exist && setSelected((prev) => [...prev, item])
  }

  return (
    <div>
      <NavBar />
      <div className="container-md text-center bg-light text-danger">
        <div className='row bg-info mb-2'>
          <div className='col-sm'>
            <h1>hello</h1>
          </div>
          <div className='col-sm'>
            <h1>hello</h1>
          </div>

        </div>

        <div className='row bg-info mb-2'>
          <div className='col'>
            <h1>hello</h1>
          </div>
          <div className='col'>
            <h1>world</h1>
          </div>
          <div className='col'>
            <h1>hello</h1>
          </div>
        </div>
        <div className='row bg-info mb-2'>
          <div className='col-sm'>
            <h1>hello</h1>
          </div>
          <div className='col'>
            <h1>hello</h1>
          </div>
        </div>
      </div>

      <div className='container d-flex'>
        <div className='border m-auto p-4'>
          <h2>player details</h2>
          <hr></hr>
          <div className='d-flex  '>
            <div className='flex-grow-1'>
              <h4>name : {game.player.name}</h4>
              <h4>age : {game.player.age}</h4>
              <div>
                <button onClick={handleClick} className='btn btn-primary'>add to cart</button>
              </div>
              <div>
                <input onChange={handleTextChange} className='form-control'></input>
              </div>
            </div>
            <div className='float-left'>
              <img src="img.jpg" width={100} height={100}>
              </img>
            </div>
          </div>

        </div>


      </div>

      <div className='container'>
        <h2 className='my-2'>ingredients</h2>
        <div className='row'>
          <div className='col-sm'>
            <ul className="list-group">
              {ingredients.map(item => { return <li key={item} onClick={() => { handlePicking(item) }} className='list-group-item bg-light mb-1'>{item}</li> })}
            </ul>
          </div>
          <div className='col-sm border m-auto  p-4'>
            <h2>Pizza details</h2>
            <hr></hr>
            <div className='d-flex'>
              <div className='flex-grow-1'>
                <h4>Name : {pizza.name}</h4>
                <h4>Topping : {selected.map(item => { return <div onClick={() => { setSelected(prev => prev.filter(el => item != el)) }} className='btn btn-info m-2'><h6 className='p-auto m-auto' style={{ color: "white" }}>{item}</h6></div> })}</h4>
                <div>
                  <button onClick={handleClick} className='btn btn-primary'>add to cart</button>
                </div>
              </div>
              <div className='float-left'>
                <img src="img.jpg" width={100} height={100}>
                </img>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div>
        <ExpandbleText maxlimit={15} />
      </div>
    </div >
  )
}

export default App
