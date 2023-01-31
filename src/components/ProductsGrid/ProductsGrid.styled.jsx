import styled from "styled-components";

export const ProductsGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  width: 80vw;
  justify-content: center;
  overflow-y: auto;
  row-gap: 10px;
  column-gap: 50px;

/* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
  display: none;

};

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

`;
export const ProductGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
