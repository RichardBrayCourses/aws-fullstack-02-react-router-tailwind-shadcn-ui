/* 

const displayPhoto = (photo: PhotoData) => photo.title;

const displayPhoto = (photo: PhotoData) => <div>photo.title</div>;

const displayPhoto = (photo: PhotoData) => <div>{photo.title}</div>;

const displayPhoto = (photo: PhotoData) => (
  <div key={photo.id}>{photo.title}</div>
);

const displayPhoto = (photo: PhotoData) => (
  <div key={photo.id}>
    <img src={photo.small} />
  </div>
);



const displayPhoto = (photo: PhotoData) => (
  <div key={photo.id}>
    <img src={photo.small} />
  </div>
);

const displayPhoto = (photo: PhotoData) => (
  <div key={photo.id}>
    <img src={photo.small} alt={photo.title} />
  </div>
);


const Home = () => {
  return <div className="flex-1 ">{photos.map(displayPhoto)}</div>;
};

*/

import { photos, PhotoData } from "@/data/photos";

const displayPhoto = (photo: PhotoData) => (
  <div key={photo.id}>
    <img src={photo.small} alt={photo.title} />
  </div>
);

const Home = () => {
  return <div className="flex-1 ">{photos.map(displayPhoto)}</div>;
};

export default Home;
