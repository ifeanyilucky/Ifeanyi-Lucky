// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const Parent = ({ posts }) => {
//   return (
//     <div>
//       <div>
//         {posts.map((post) => (
//           <li key={post.id}>{post}</li>
//         ))}
//       </div>
//     </div>
//   );
// };
// Parent.getInitialProps = async () => {
//   const response = await fetch(
//     `https://jobs.github.com/positions.json?description=python&location=new+york`
//   );
//   const posts = await response.json();
//   console.log(posts);
//   return { posts: posts };
// };

// export default Parent;
