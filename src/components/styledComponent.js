import styled from "styled-components";

import BG from "../assets/images/home-bg.jpg";

export const Front = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
