function PhotoListItem({ photo }) {
  return (
    <div>
      <img className="h-20 w-20" src={photo.url} alt="random pic"></img>
    </div>
  );
}

export default PhotoListItem;
