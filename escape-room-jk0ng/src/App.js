import React, { useReducer } from 'react'
import './App.css'
import { reducer } from './reducer/reducer'
import Secret from './components/Secret/Secret'
import Rows from './components/Rows/Rows'
import Buttons from './components/Buttons/Buttons'
import Colors from './components/Colors/Colors'
import GameEnds from './components/GameEnds/GameEnds'
import AppContext from './context/Contexts'
import { initGameState } from './helper'


const App = () => {
    const [appState, dispatch] = useReducer(reducer, initGameState())

    return (
        <AppContext.Provider value={[appState, dispatch]}>
            <div className="App">
                <div className="board">
                    <Rows />
                    <Colors />
                    <Buttons />
                    <Secret />
                    {/* <GameEnds/> */}
                </div>
            </div>
            {console.log({initGameState})}
        </AppContext.Provider> 
    );
}
export default App