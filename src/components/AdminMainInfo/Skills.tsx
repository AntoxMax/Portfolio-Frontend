//@ts-nocheck
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMainpageIngo } from "../../redux/MainPage/mainpageSlice";

export const Skills = () => {
  const skills = useAppSelector((state) => state.mainPage.mainPageIngo.skills);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMainpageIngo());
  }, []);
  console.log(skills);
  return <div>{skills.length > 0 ? skills[0].Frontend : ""}</div>;
};
