import React, { useState } from "react";

//IMPORTS
import Product from "../Product/ProductCard";
import Pagnate from "../Pagnate/Pagnate";

//STYLED COMPONENTS IMPORTS
const {
  ProductsGridContainer,
  ProductGridWrapper,
} = require("./ProductsGrid.styled");

//MAIN FUNCTION
const ProductsGrid = ({ data }) => {
  //DATA
  const productData = data.data.giftCardsRLD;
  const { content } = productData;

  //USESTATES
  const [count, setCount] = useState(1);
  const [perPage, setPerPage] = useState(10);

  //VARIABLES TO HANDLE PAGNATION
  const indexOfLastRecord = count * perPage;
  const indexOfFirstRecord = indexOfLastRecord - perPage;
  const pages = Math.ceil(content.length / perPage);
  const pagnateData = content.slice(indexOfFirstRecord, indexOfLastRecord);

  //CHANGE COUNT FROM PAGNATE
  const pagnateFunc = (value) => {
    if (value === "+") {
      if (count < pages) {
        setCount(count + 1);
      }
    } else {
      if (count > 1) {
        setCount(count - 1);
      } else {
        return;
      }
    }
  };

  //CHANGE PERPAGE FROM PAGNATE
  const perPageFunc = (e) => {
    setPerPage(e.target.value);
    setCount(1)
  };

  return (
    <ProductGridWrapper>
            <>
        <Pagnate
          pages={pages}
          count={count}
          perPageFunc={perPageFunc}
          pagnateFunc={pagnateFunc}
        />
      </>
      <ProductsGridContainer>
        {pagnateData.map((c) => (
          <Product img={c} key={c.productId} info={c} />
        ))}
      </ProductsGridContainer>

    </ProductGridWrapper>
  );
};

export default ProductsGrid;
