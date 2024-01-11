//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "../axios";

interface projectData {
  title: string;
  text: string;
  imageUrl: string;
  skills: String[];
  link: string;
  gitHubLink: string;
}

export const FullProject = () => {
  const { id } = useParams();
  const [data, setData] = useState<projectData>({});

  useEffect(() => {
    axios
      .get(`/projects/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <Link to="/">На главную</Link>
      <img src={data.imageUrl} alt={data.title} />
      <h2>{data.title}</h2>
    </>
  );
};
