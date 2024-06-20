// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function SearchPage() {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     async function loadPagefind() {
//       if (typeof window.pagefind === 'undefined') {
//         try {
//           window.pagefind = await import(
//             // Use a dynamic import with a relative path to ensure it's loaded correctly
//             /* webpackIgnore: true */
//             './pagefind/pagefind.js'
//           );
//           await index.addCustomRecord({
//             url: '/resume.pdf',
//             content:
//               'Aenean lacinia bibendum nulla sed consectetur',
//             language: 'ja',
//           });
//         } catch (e) {
//           window.pagefind = {
//             search: () => ({ results: [] }),
//           };
//         }
//       }
//     }
//     loadPagefind();
//   }, []);

//   async function handleSearch() {
//     if (window.pagefind) {
//       const search = await window.pagefind.search(query);
//       setResults(search.results);
//     }
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onInput={handleSearch}
//       />
//       <div id="results">
//         {results.map((result, index) => (
//           <Result key={result.id} result={result} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Result({ result }) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await result.data();
//       setData(data);
//     }
//     fetchData();
//   }, [result]);

//   if (!data) return null;

//   return (
//     <Link href={data.url}>
//       <h3>{data.meta.title}</h3>
//       <p>{data.excerpt}</p>
//     </Link>
//   );
// }
