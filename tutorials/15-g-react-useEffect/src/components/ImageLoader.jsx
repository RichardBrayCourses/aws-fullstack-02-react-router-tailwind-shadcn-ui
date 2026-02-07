import { useEffect, useState } from "react";

async function loadImage(setImageUrl) {
  const response = await fetch(
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
  );
  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  setImageUrl(objectUrl);
}

export default function ImageLoader() {
  const [imageUrl, setImageUrl] = useState(null);

  // the arrow function in useEffect is called
  // AFTER the first time this component is rendered

  useEffect(() => {
    loadImage(setImageUrl);
  }, []);

  // the first time this component is rendered imageUrl will be null : nothing will be displayed
  if (imageUrl === null) {
    return null;
  }

  // loadImage will eventually call setImageUrl()
  // which will cause this component to be rendered a second time
  // with a valid imageUrl value
  return <img src={imageUrl} className="mt-6 max-w-xl rounded-xl" />;
}
