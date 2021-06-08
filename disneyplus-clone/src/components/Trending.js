import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectTrending } from '../features/movie/movieSlice';

function Trending() {
  const movies = useSelector(selectTrending);
    return (
        <Container>
        <h4>Trending</h4>
        
        <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id }>
              <Link to={`/details/${movie.id}`}>
                <img src={movie.cardImg} alt="title" />
              </Link>
            </Wrap>
          ))}
          
        </Content>
      
      </Container>    )
}
const Container = styled.div`
padding-bottom:50px;`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;

  @media (max-width:768px){
    grid-template-columns: repeat(2, minmax(0, 1fr));

  }
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0/ 69%) 0 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  overflow:hidden;
  position:relative;
  

  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
    box-shadow: rgb(0 0 0/ 80%) 0 40px 58px -16px,
      rgb(0 0 0 /73%) 0px 30px 20px -10px;
  }

  img{
      width:100%;
      height:100%;
      object-fit:cover;
      position:relative;
      display:block;
      opacity:1;
    
      
  }

`;


export default Trending
