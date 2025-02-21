import { useEffect,useRef } from "react";
import api from '../../api/axiosConfig';


import React from 'react'
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText =useRef();
    let params=useParams();
    const movieId=params.movieId;

    useEffect(()=>{
     getMovieData(movieId);
    },[movieId])

    
    const addReview =async(e)=>{
        e.preventDefault();
        const rev=revText.current;
        try {
            const response=await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});

        const updatedReviews=[...reviews,{body:rev.value}];

        rev.value ="";
        getMovieData(movieId);
        
        } catch (error) {
            console.log(error);
        }

        
    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
          <Col>
          <img src={movie?.poster}/>
          </Col>
          <Col>
          {
            <>
            <Row>
                <Col>
                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <hr/>
                </Col>
            </Row>
            </>
          }
         {
    reviews && reviews.length > 0 ? (
        reviews.map((r, index) => (
            <React.Fragment key={index}>
                <Row>
                    <Col>{r.body}</Col>
                </Row>
                <Row>
                    <Col><hr /></Col>
                </Row>
            </React.Fragment>
        ))
    ) : (
        <p>No reviews yet. Be the first to review!</p>
    )
}

          </Col>
        </Row>
        <Row>
            <Col>
             <hr/>
            </Col>
         </Row>
    </Container>
  )
}

export default Reviews
