import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import Viewers from "./Viewers";
import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import Login from "./Login";
function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let originals = [];
  let trending = [];
  let newDisney = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      console.log(snapshot);
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(setMovies({
        recommend:recommends,
        trending:trending,
        original:originals,
        new:newDisney
      }));
    });
  }, [userName]);

  return (
    <div>
      {!userName ? (
        <Login />
      ) : (
        <>
          <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
            <Originals />
            <Trending />
            <NewDisney />         
          </Container>
        </>
      )}
    </div>
  );
}

const Container = styled.main`
  position: absolute;
  top: 67px;
  overflow-x: hidden;
  width: 100%;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  min-height: calc(100vh - 250px);

  background: url("images/home-background.png") center center / cover no-repeat
    fixed;
  opacity: 1;
  z-index: -1;
`;

export default Home;
