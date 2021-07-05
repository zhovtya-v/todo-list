import React from 'react'
import ReactDOM from 'react-dom'


const TodoList = () => {
    const items = ['Learn react','Build Awesome App']

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
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

ReactDOM.render(<App />, document.getElementById('root'));