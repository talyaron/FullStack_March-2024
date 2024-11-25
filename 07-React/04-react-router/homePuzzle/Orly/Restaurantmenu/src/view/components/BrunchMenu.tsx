import React, { useState, useEffect } from "react";

function BrunchMenu() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch 4 images at once
    const fetchImages = async () => {
      try {
        setLoading(true);
        const promises = Array.from({ length: 4 }).map(() =>
          fetch("https://foodish-api.com/api/")
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to fetch images");
              }
              return response.json();
            })
            .then((data) => data.image) 
        );
        const images = await Promise.all(promises); 
        setImages(images); 
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Brunch Menu</h2>
      <div>
        {images.map((img, index) => (
          <img key={index} src={img} alt="Brunch dish" style={{ width: "200px", height: "200px", margin: "50px" }}/>
        ))}
      </div>
    </div>
  );
}

export default BrunchMenu;
