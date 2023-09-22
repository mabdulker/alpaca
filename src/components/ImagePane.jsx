const ImagePane = ({imageData}) => {
    return (<>
        {Object.keys(imageData).map((image) => {
          return(
            <img src={imageData[image][0]} alt={image} style={{position: 'absolute'}}/>
            )
        })} 
    </>
    );
}

export default ImagePane;