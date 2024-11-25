import React, { useState, useEffect } from "react";

function MorningMenu() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
            .then((data) => data.image) // Extract the image URL
        );
        const images = await Promise.all(promises); // Wait for all promises to resolve
        setImages(images); // Set the images state
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
      <h2>Morning Menu</h2>
      <div>
        {images.map((img, index) => (
          <img key={index} src={img} alt="Brunch dish" style={{ width: "200px", height: "200px", margin: "50px" }} />
        ))}
      </div>
    </div>
  );
}

export default MorningMenu;
