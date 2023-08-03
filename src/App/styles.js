import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 16px;
  margin: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  color: #fff;
  background: #48da79;
  display: block;
  width: 400px;
  &:hover {
    background: #28c75d !important;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 24px;
  margin: 20px;
  width: 50%;
`;

