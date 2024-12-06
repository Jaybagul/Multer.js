import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [image, setImage] = useState(null); // Store the selected file

  const handleUpload = () => {
    if (!image) {
      console.log("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append('file', image);

    axios
      .post("http://localhost:8080/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log("Upload successful:", res.data);
      })
      .catch((err) => {
        console.error("Error uploading file:", err);
      });
  };

  return (
    <div className="p-10">
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])} // Extract the first file
      />
      <br /><br />
      <button
        className="mb-5 bg-yellow-500 text-white pt-1 pb-1 ps-2 pe-2 rounded-md"
        onClick={handleUpload}
      >
        Upload
      </button>
      <hr />
    </div>
  );
};

export default App;
