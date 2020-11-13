// import React, { Component } from "react";
// import styled from "styled-components";
// import Axios from "axios";

// class RefTut extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       movies: [],
//     };
//   }
//   componentDidMount() {
//     Axios.get(
//       `http://newsapi.org/v2/top-headlines?country=ng&apiKey=b709e093e17544a9b97f054a518c0889`
//     )
//       .then((res) => {
//         this.setState({ movies: res.data.articles });
//         console.log(res.data.articles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   render() {
//     const { movies } = this.state;
//     return (
//       <div>
//         {movies.map((movie) => (
//           <p key={movie.id}>{movie}</p>
//         ))}
//       </div>
//     );
//   }
// }

// const Button = styled.button`
//   margin-right: 5px;
//   background-color: black;
//   color: white;
//   border: none !important;
//   padding: 7px 12px;
//   border-radius: 8px;
//   outline: none !important;
// `;

// export default RefTut;
