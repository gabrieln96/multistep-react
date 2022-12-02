import {
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill
} from "react-icons/bs";

import "./Thanks.css"

const Thanks = () => {
  return (
    <div className="thanks-container">
        <h2>Falta pouco...</h2>
        <p>A sua opnião sera importante...</p>
        <p>Para concluir sua avaliação clique no botão enviar abaixo</p>
        <h3>Aqui está o seu resumo:</h3>
        <p className="review-data">
          <span>Satisfação com o produto:</span>
        </p>
        <p className="review-data">
          <span>Comentário:</span>
        </p>
    </div>
  )
}

export default Thanks