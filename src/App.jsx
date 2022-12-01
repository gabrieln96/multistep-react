//Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from "react-icons/fi"
import UseForm from "./components/UseForm"
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

import './App.css'

//Hooks
import {useForm} from "./hooks/useForm"


function App() {

  const formComponents = [
    <UseForm/>,
    <ReviewForm/>,
    <Thanks/>
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents);


  return (
    <div className="app">
      <div className="header">
        <h2>Deixa sua avaliação</h2>
        <p>Ficamos felizes com sua compra! Utilize o formulário para avaliar sua compra!</p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e) }>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
          {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious/>
              <span>Voltar</span>  
              </button>
          )}
            {!isLastStep ? (
              <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
            ) : (
              <button type='button'>
              <span>Enviar</span>
              <FiSend/>
            </button>
            )}
          </div>
        </form>
      </div>
      </div>
  )
}

export default App
