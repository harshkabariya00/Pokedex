import React from "react";
import Pagination from "@mui/material/Pagination";
// import Pokecard from "./Pokecard";
import pageData from "../pageData.json";
import "./Page.css";

function Page(props) {
  //const [currentItems, setCurrentItems] = useState([]);
  // const [pageCount, setPageCount] = useState(1);
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = 8;
  //const endOffset = itemOffset + itemsPerPage;

  function handleChange(event, value) {
    let current = pageData.find(({ page }) => page === value);
    props.setPokemon(props.pokemon.slice(current.start, current.end));
    //console.log("This is the target value");
    //props.setCurrentPage(props.currentPage + 8);
  }
  return (
    <>
      <Pagination className="pagination" onChange={handleChange} count={10} />
    </>
  );
}
export default Page;

//   const { data } = props;

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % data.length;
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <div className="images">
//         {currentItems.map((image) => {
//           return (
//             <div>
//               <Pokecard />
//             </div>
//           );
//         })}
//       </div>
//       <Pagination
//         count={10}
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }
