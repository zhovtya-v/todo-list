import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
    return (
        <ul>
            <li>Learn react</li>
            <li>Build Awesome App</li>
        </ul>
    )
}

const AppHeader = () => {
    return (
        <h1>My TODO list</h1>
    )
}


const SearchPanel = () => {
    return (
        <input placeholder='search' />
    )
}

const App = () => {
    return (
        <>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))