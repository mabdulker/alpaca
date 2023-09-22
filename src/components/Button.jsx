function Button(props) {
    return (<>
        {Object.keys(props.loc).map((key) => {
            return(
                <button id={key} onClick={props.func}
                value = {props.loc[key]}
                className={props.giveClass && props.loc[key].split('/')[2]}
                >
                {key.toUpperCase()}
            </button>)
        })}
    </>)
}

export default Button;