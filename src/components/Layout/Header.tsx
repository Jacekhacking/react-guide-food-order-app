import mealsImg from "../UI/meals.jpg"
import {HeaderCardButton} from "./HeaderCardButton";
import styles from "./Header.module.css"

export const Header = () => {
    return(
        <>
        <header className={styles['header']}>
            <h1> ReactMeals </h1>
            <HeaderCardButton/>
        </header>
            <div className={styles['main-image']}>
                <img  src={mealsImg} alt="a yummy table of food"/>
            </div>
        </>
    )
}