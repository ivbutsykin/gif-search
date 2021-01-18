import './GifItem.css';

function GifItem(props) {
  return (
    <div className="GifItem">
      <img
        src={props.src}
        alt={props.alt}
        height={props.height}
        width={props.width}
      />
    </div>
  );
}

export default GifItem;
