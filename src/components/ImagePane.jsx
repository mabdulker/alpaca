function ImagePane(props) {
    return (
        <div class="image-container">
            <img src={props.bg} alt="background" className='overlay-image'/>
            <img src={props.eye} alt="eyes" className='overlay-image'/>
        </div>
    )
}

export default ImagePane;