import styled from "styled-components";

const BadButton = styled.button`
  border: 0;
  border-radius: 0.25rem;
  background: ${(props) => (props.primary ? "#f06868" : "#ffffff")};
  color: ${(props) => (props.primary ? "#ffffff" : "#f06868")};
  border: 2px solid #f06868;
  font-size: 1rem;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

export default BadButton;
