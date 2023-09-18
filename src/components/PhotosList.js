import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";

function PhotosList({ album }) {
  useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  //   event
  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div>
      <div className="m-2 flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          +Add photo
        </button>
      </div>
    </div>
  );
}

export default PhotosList;
