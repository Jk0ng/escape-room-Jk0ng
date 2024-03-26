import React from 'react'
import './App.css'
import Secret from './components/Secret/Secret'
import Rows from './components/Rows/Rows'
import Buttons from './components/Buttons/Buttons'
import Colors from './components/Colors/Colors'
import GameEnds from './components/GameEnds/GameEnds'


const App = () => {
    return (
        <div className="App">
            <div className="board">
                <Rows/> 
                <Colors/>
                <Buttons/>
                <Secret/>
                {/* <GameEnds/> */}
            </div>
        </div>
    );
}
export default App