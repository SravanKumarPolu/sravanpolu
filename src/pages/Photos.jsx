import React from "react";

export default function Photos() {
  const [photos, setPhotos] = React.useState();

  React.useEffect(() => {
    fetch(`/api/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data.photos));
  }, []);

  if (photos === undefined) {
    return <p>Loading...</p>;
  }

  console.log(photos);

  const photoElements = photos.map((photo) => {
    const width = 270; //photo.id % 2 === 0 ? 300 : 300;
    const height = photo.id % 2 === 0 ? 300 : 200;

    return (
      <div key={photo.id} className="photo-sravan">
        <img src={photo.imageUrl} alt="" width={width} height={height} />
      </div>
    );
  });

  return (
    <div className="photo-container">
      <h3>personal photos</h3>
      <div className="photo-list">{photoElements}</div>
    </div>
  );
}
