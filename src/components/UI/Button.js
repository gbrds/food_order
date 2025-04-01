const Button = ({ textOnly, onClick, Children }) => {
    return (
        <button className={textOnly ? "text-button" : "button"} onClick={onClick} >
            {Children}
        </button>
    )
}

export default Button;