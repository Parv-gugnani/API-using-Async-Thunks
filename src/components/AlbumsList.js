import { useFetchAlbumsQuery, useAddAlbumsMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumsMutation(); //
  // console.log(results);

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error Loading albums</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos in Albums
        </ExpandablePanel>
      );
    });
  }

  // console.log(results);

  // console.log(data, error, isLoading);
  return (
    <div>
      <div>
        Albums for {user.name}
        <button onClick={handleAddAlbum}></button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
