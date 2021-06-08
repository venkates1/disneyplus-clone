import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";
import Login from "./Login";

function Detail() {
  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState("");
  const userName = useSelector(selectUserName);

  useEffect(() => {
    //Grab the movie info from db

    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save the movie data
          setMovie(doc.data());
        } else {
          alert("No Records");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, [id]);

  console.log("Movie is", movie);

  return (
    <div>
      {!userName ? (
        <Login />
      ) : (
        <>
          <Container>
            <Background>
              <img src={movie.backgroundImg} alt="img" />
            </Background>
            <ImageTitle>
              <img src={movie.titleImg} alt="imagetitle" />
            </ImageTitle>
            <Controls>
              <PlayButton>
                <img src="/images/play-icon-black.png" alt="icon1" />
                <span style={{color:"black"}}>Play</span>
              </PlayButton>
              <Trailer>
                <img src="/images/play-icon-white.png" alt="icon2" />
                <span>Trailer</span>
              </Trailer>
              <AddButton>
                <span>+</span>
              </AddButton>
              <Groupwatch>
                <img src="/images/group-icon.png" alt="groupIcon" />
              </Groupwatch>
            </Controls>
            <Subtitle>{movie.subTitle}</Subtitle>
            <Description>
              {movie.description}
              
            </Description>
          </Container>
        </>
      )}
    </div>
  );
}

const Container = styled.main`
  position: relative;
  top: 67px;
  overflow-x: hidden;

  padding: 0 calc(3.5vw + 5px);
  min-height: calc(100vh - 70px);

  z-index: -1;
`;
const Background = styled.div`
  position:fixed;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0;
  z-index: -1;


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

const ImageTitle = styled.div`
  width: 30vw;
  margin-top: 30px;
  margin-left: 20px;
  height: 30vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  margin-top: 35px;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 40px;
  margin-right: 25px;
  text-transform: uppercase;

  
`;

const Trailer = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
`;

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  margin-right: 25px;
  border: none;
  border: 1px solid rgba(249, 249, 249);
  border-radius: 50%;
  font-size: 25px;
  color: #f9f9f9;
  
`;

const Groupwatch = styled(AddButton)`
  background: rgba(0, 0, 0, 0.8);
  img {
    
    object-fit:cover;
    width:100%;
    height:100%;
    margin-bottom:6px;
  }
`;
const Subtitle = styled.p`
  margin-top: 30px;
  letter-spacing: 1.5px;
`;
const Description = styled.p`
  line-height: 1.5;
  max-width: 600px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Detail;
