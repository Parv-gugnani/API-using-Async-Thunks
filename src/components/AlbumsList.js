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
    content = <Skeleton className="h-10 w-full" times={3} />;
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
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <button loading={results.isLoading} onClick={handleAddAlbum}>
          + add Album
        </button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
