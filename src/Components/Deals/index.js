import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dealGet } from "../../Utils/dataRequest";
import {map} from 'lodash'
import DealModal from "../../Utils/Modals/dealModal";


const DealsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ImageDiv = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;
const RowTitle = styled.div`
  width: 100%;
  height: 40px;
  display: flex;

  justify-content: space-between;

  h2 {
    font-size: 15px;
    font-weight: 400;
    color: black;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    font-style: italic;
    color: red;
  }
`;
const BookItButton = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 10px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  h1 {
    color: red;
    font-weight: bold;
  }
`;

const SubTitleDiv = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-weight: bold;
    font-size: 20px;
  }
  p {
    font-weight: lighter;
    font-size: 15px;
    color: gray;
  }
`;

const Deals = () => {

  //modal with deal information
const [openModal, setOpenModal] = useState(false)
const [dataDeal, setDataDeal] = useState()
// data request
const [data, setData] = useState();
  useEffect(()=>{
    dealGet().then((response) =>{
      setData(response.data);
    })
  },[])
  
  return (
    <div className="w-full p-5 mt-20">
      <DealsGrid>
        {map(data, (deal, index) =>{
          return(
            <ImageDiv key={index} onClick={() =>{
              setOpenModal(true)
              setDataDeal(deal)
              }}>
            <RowTitle>
              <h2>
                {" "}
                From: <span>${deal ? deal.Price : '- -'}</span>{" "}
              </h2>
              <p> You save: 10%</p>
              <BookItButton>
                <h1>book it</h1>
              </BookItButton>
            </RowTitle>
            <img src={deal ? deal.Photo : ''} alt="tour1" />
  
            <SubTitleDiv>
              <h3>{deal ? deal.TourName : '--'}</h3>
              <p>daily from {deal && deal.schedule ? deal.schedule.from : '- -'} to {deal && deal.schedule ? deal.schedule.to : '- -'}</p>
            </SubTitleDiv>
          </ImageDiv>
          )
        })}
        
      </DealsGrid>
      <DealModal 
      isActive={openModal}
      onCancel={() => setOpenModal(false)}
      data={dataDeal}
      />
    </div>
  );
};

export default Deals;
