import React from "react";
import { styled } from "styled-components";

const CompanyQuickInfo = ({ logo, content, title, pdf }) => {
  return (
    <Container>
      <Logo src={logo} alt={title} title={title} loading="lazy" />
      <PdfLink href={pdf} target="__blank">
        View Document
      </PdfLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const PdfLink = styled.a`
  font-size: smaller;
  color: blue;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export default CompanyQuickInfo;
