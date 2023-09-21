function Button(props) {
    return (<>
        {Object.keys(props.loc).map((key) => {
            return(
                <button id={key} onClick={props.func}>
                {key.toUpperCase()}
            </button>)
        })}
    </>)
}

const switchAccessory = (set) => (event) => {
    set(event.target.id)
}

export { Button, switchAccessory };