import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/AppHeader'
import SearchPanel from './components/SearchPanel'
import TodoList from './components/TodoList'

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 0},
        { label: 'Make Awesome App', important: true, id: 1},
        { label: 'Have a lunch', important: false, id: 2},
    ]

    return (
        <>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));