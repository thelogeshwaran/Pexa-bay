import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./UploadForm.css";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  function inputHandler(e: React.FormEvent<HTMLInputElement>) {
    const image = (e.target as HTMLInputElement).files![0];
    const types = ["image/jpeg", "image/png"];
    if (image && types.includes(image.type)) {
      setFile(image);
      setError("");
    } else {
      setError("Please upload the image of file type png or jpeg!");
      setFile(null);
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={inputHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {file && <div>{file.name}</div>}
        {error && <div className="error">{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
