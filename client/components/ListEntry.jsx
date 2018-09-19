import React from 'react';
import styled from 'styled-components';
import SelectBar from './SelectBar.jsx';


const PledgeReward = styled.div`
  border: 1px solid #9B9E9E;
  margin-bottom: 20px;
  position: relative;
  vertical-align: baseline;
`;

const MouseOverSelect = styled.div`
  vertical-align: middle;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 5;
  text-align: center;
  color: white;

  &.mouseover:hover {
    display: inline-block;
    background-color: rgba(0,158,116,0.9);
    transition: all 0.2s ease-in-out;
  }
`;

const PledgeTop = styled.div`
  padding: 1.8rem 1.8rem;
`;

const PledgeHeader = styled.h4`
  display: block;
  color: #282828;
  font-size: 20px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 20px;
`;

const PledgeTitle = styled.h5`
  display: block;
  color: #282828;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const PledgeDescription = styled.div`
  color: #656969;
  font-size: 16px;
  margin-bottom: 20px;
`;
  // height: 5rem;
  // overflow: hidden;
  
const PledgeExtraInfo = styled.div`
`;

const ExtraInfo = styled.div`
  float: left;
  width: 50%;
`;

const InfoTitle = styled.p`
  color: #656969;
  text-transform: uppercase;
  font-size: 12px;
`;

const Backers = styled.div`
  color: #656969;
  font-size: 14px;
  margin-top: 1.8rem;
`;

const PledgeForm = styled.div`
  padding: 1.8rem;
`;
// height: 26.4rem;

const FormHeader = styled.div`
  font-size: 14px;
  color: #656969;
`;

const Shipping = styled.div`
  margin-bottom: 5px;
`;

// const SelectBar = styled.select`
//   margin-bottom: 5px;
// `;

const Amount = styled.div`
  margin-bottom: 5px;
`;

const CurrencyBox = styled.div`
  border-right: 1px solid #DCDEDD;
  position: absolute;
  width: 42px;
  height: 42px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  padding-top: 12px;

  &.mouseover:hover {
    border-right: 1px solid #009E74;
  }
`;

const InputField = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 3rem;
  box-sizing: border-box;
  font-size: 16px;

  &.input-focus:focus{
    outline: none;
  }
  
  &.mouseover:hover {
    border: 1px solid #009E74;
  }
`;

const ContinueButton = styled.button`
  color: #FFFFFF;
  background-color: #009E74;
  height: 4.2rem;
  width: 100%;
  padding: 0 1.8rem;
  font-size: 1.4rem;
  margin-bottom: 1.8rem;

  &.button-focus:focus {
    outline: none;
  }
`;

const PStyle = styled.p`
  margin-top: 100%
`;



const ListEntry = props => (
  <div>
    <PledgeReward>

      <MouseOverSelect className="mouseover">
        <PStyle>Select this reward</PStyle>
      </MouseOverSelect>

      <PledgeTop>
        <PledgeHeader>Pledge ${props.price} or more</PledgeHeader>

        <PledgeTitle>{props.title} Pledge</PledgeTitle>

        <PledgeDescription>
          <p>
            {props.info}
          </p>

        </PledgeDescription>

        <PledgeExtraInfo>
          <ExtraInfo>
            <InfoTitle>Estimated delivery</InfoTitle>
            <p>{props.date} 2019</p>
          </ExtraInfo>
          <ExtraInfo>
            <InfoTitle>Ships to</InfoTitle>
            <p>Anywhere in the world</p>
          </ExtraInfo>
        </PledgeExtraInfo>
        
        {/* Insert "Limited (x left of y)" here */}

        <Backers>{props.backers} backers</Backers>
      </PledgeTop>

      <PledgeForm>
        <Shipping>
          <FormHeader>Shipping destination</FormHeader>
          <SelectBar />
        </Shipping>

        <Amount>
          <FormHeader>Pledge amount</FormHeader>
          <CurrencyBox className="mouseover">$</CurrencyBox>
          <InputField
            className="mouseover input-focus" 
            type="text" 
            value="10" 
            placeholder="Pledge any amount" 
          />
        </Amount>

        <ContinueButton className="button-focus">Continue</ContinueButton>
      </PledgeForm>



    </PledgeReward>
  </div>
);

export default ListEntry;