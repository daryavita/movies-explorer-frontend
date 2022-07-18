import { useState } from "react";
import "./MoviesCard.css";

function MoviesCard({isSaved}) {

    const [isLiked, setIsLiked] = useState(false);
    const saveBtnClassName = `movies-card__save-btn ${
        isLiked ? "movies-card__save-btn_on" : "movies-card__save-btn_off"
      }`;

    const handleSaveBtn = () => {
        setIsLiked(!isLiked)
    }

  return (
    <article className='movies-card'>
      <div className='movies-card__info'>
        <div>
        <h3 className='movies-card__title'>33 слова о дизайне</h3>
        <p className='movies-card__duration'>1ч 47м</p>
        </div>
        <button className={isSaved ? "no-display" : saveBtnClassName} onClick={handleSaveBtn}></button>
        <button className={isSaved? "movies-card__delete-btn" : "no-display"}></button>
      </div>
      <div className='movies-card__img'></div>
    </article>
  );
}

export default MoviesCard;
