const ImageCard = (props) => {
  return (
    <div className="w-16 md:w-32 lg:w-48">
      <img
        className="w-16 md:w-32 lg:w-48"
        src={props.src}
        alt={props.alt}
      />
      {props.children}
    </div>
  );
}

export default ImageCard;