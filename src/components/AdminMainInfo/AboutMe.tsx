import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMainpageIngo } from "../../redux/MainPage/mainpageSlice";

export const AboutMe = () => {
  const dispatch = useAppDispatch();
  const textAboutMe = useAppSelector(
    (state) => state.mainPage.mainPageIngo.textAboutMe
  );

  useEffect(() => {
    dispatch(fetchMainpageIngo());
  }, [textAboutMe]);

  return <textarea name="awesome">{textAboutMe}</textarea>;
};
