const ImageMaker = ({imageData}) => {
    return (<>
        {Object.keys(imageData).map((image) => {
          return(
            <img src={imageData[image][0]} alt={image} style={{position: 'absolute'}}/>
            )
        })} 
    </>
    );
}

function ImagePane(props) {
    return (
        <div class="image-container">
            <img src={props.bg} alt="background" className='overlay-image'/>
            <img src={props.eye} alt="eyes" className='overlay-image'/>
        </div>
    )
}

export default ImageMaker;