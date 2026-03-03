/* 

const colors=["Red","Orange","Yellow","Green","Blue","Indigo","Violet" ];

const Home = () => {
  return <div className="flex-1 ">{colors}</div>;
};

function transformer(color: string) {
  return <div >{color}</div>;
}
return <div className="flex-1 ">{colors.map(transformer)}</div>;

function transformer(color: string, index: number) {
  return <div key={index}>{color}</div>;
}

function transformer(color: string, index: number) {
  return <div key={index} style={{ backgroundColor: color }}>{color}</div>;
}

*/

import { PhotoData, photos } from "@/data/photos";

function transformer(photo: PhotoData, index: number) {
  return (
    <div key={index}>
      <img src={photo.small} alt={photo.title} />
    </div>
  );
}
const Home = () => {
  const array = photos.map(transformer);
  return <div className="flex-1 ">{array}</div>;
};

export default Home;
