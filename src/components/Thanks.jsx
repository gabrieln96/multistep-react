import {
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill
} from "react-icons/bs";

import "./Thanks.css"

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>,
}

const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
        <h2>Falta pouco...</h2>
        <p>A sua opnião sera importante...</p>
        <p>Para concluir sua avaliação clique no botão enviar abaixo</p>
        <h3>Aqui está o seu resumo: {data.name}</h3>
        <p className="review-data">
          <span>Satisfação com o produto:</span>
          {emojiData[data.review]}
        </p>
        <p className="review-data">
          <span>Comentário:</span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks