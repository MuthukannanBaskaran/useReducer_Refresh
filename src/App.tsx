import './App.css'
import Counter from './components/Counter'
import UseReducerExample from './components/UseReducerExample'
import UseStateExample from './components/UseStateExample'
import { CounterProvider } from './context/CounterContext'

function App() {

  return (
    <>
      <div className="app">
        <UseStateExample />
        <UseReducerExample />
      </div>
      <div>
        <CounterProvider>
          <Counter />
        </CounterProvider>
      </div>
    </>
  )
}

export default App
