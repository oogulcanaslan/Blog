import React from 'react'
import axios from "axios";
import { Context } from "../../context/Context";
import './write.css'
import { useContext, useState, useEffect } from "react";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const [categories, setCategories] = useState([]);
  const [catData, setCatData] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchCatData = async () => {
      const res = await axios.get("/categories");
      setCatData(res.data);
    };
    fetchCatData();
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>

  

        <div className="writeFormGroup">









          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <br/>
        <select className="categorySelect" onChange={(e) => { setCategories(e.target.value) }} >
          <option value="">Select Category</option>
          {catData.map((item, index) => {
            return (
              <option key={index} value={item.name}>{item.name}</option>
            )

          })}

        </select>
        <br/><br/>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        </div>
      
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write