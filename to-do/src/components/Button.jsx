const Button = ({text, onClick, color='btn-blue'}) => {
    return(
        <button
        type="button"
        onClick={onClick}
        className={`btn ${color}`}
        >
            {text}
        </button>
    )
}

export default Button