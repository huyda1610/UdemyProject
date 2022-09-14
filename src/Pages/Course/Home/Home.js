import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../../Slices/courseSlice";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Tabs from "./Tabs";
import Trends from "./Trends";
import Intro from "./Intro";
import Headline from "./Headline";
import TopCategory from "./TopCategory";
import TopicCategory from "./TopicCategory";
import NonStudent from "./NonStudent";
import Partners from "./Partners";

export default function Home(props) {
  const dispatch = useDispatch();
  const { course, courseIsLoading  } = useSelector((state) => state.course);
  let num = 1;
  
  useEffect(() => {
    dispatch(getCourse());
  }, [])

  const state = {
    responsive:{
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        620: {
            items: 3,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
    },
  }
  return (
    <>
      <Slider />
      <Headline />
      <Tabs state={state} courses={course} isLoading={courseIsLoading} />
      <Intro />
      <Trends state={state} courses={course} isLoading={courseIsLoading} />
      <TopCategory />
      <TopicCategory />
      <NonStudent num = {num} />
      <Partners />
      <NonStudent num = {num + 1} />
      <NonStudent num = {num + 2} />
    </>
  
  );
}
