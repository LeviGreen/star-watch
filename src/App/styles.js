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

export const Input = styled.input`
  margin: 8px;
  border: 2px solid $light-grey;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 40px;
  padding: 0 11px;
  font-size: 14px;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: $dark-grey;
  width: 400px;
  &::after {
    content: '';
    background: $dark-grey;
    width: 1px;
    height: 19px;
    margin: -1px 0 0 -1px;
    display: none;
    animation: blink 0.5s infinite alternate;
  }
  &:focus {
    border-color: $blue;
    outline: none;
  }
`
