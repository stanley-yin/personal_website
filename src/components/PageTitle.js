import React from "react";
import styled from "styled-components";

const MyPageTitle = styled.h1`
  margin: 50px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  @media screen and (max-width: 430px) {
    font-size: 1.5rem;
    margin: 20px 0  ;
  }
`;

function PageTitle(props) {
  const { title } = props;
  return (
    <>
      <MyPageTitle>{title}</MyPageTitle>
    </>
  );
}

export default PageTitle;
