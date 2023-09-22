const switchAccessory = (set) => (event) => {
    set(event.target.id)
}

export default switchAccessory;