import Button from './Button'
import './App.css'

function Home() {
    return (
        <div className="App">
        <header className="App-buttons">
          <div className='outerButton'>
            <Button name='Outer' />
          </div>
          <div className='topButton'>
            <Button name='Tops' />
          </div>
          <div className='botButton'>
            <Button name='Bottoms' />
          </div>
          <div className='accesButton'>
            <Button name='Accessories' />
          </div>
          <div className='dressButton'>
            <Button name='Dresses' />
          </div>
          <div className='shoesButton'>
            <Button name='Shoes' />
          </div>
        </header>
      </div>
    );
}

export default Home