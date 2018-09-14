import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  height: auto;
  width: auto\9;
`;

const Asset = props => (
  <div>
    <Image src={props.image} />
  </div>
)

export default Asset;