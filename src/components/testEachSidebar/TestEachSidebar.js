// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import styled from 'styled-components';
// import getFinal from '../../api/test/getFinal';
// import getGwoncha from '../../api/test/getGwoncha';
// import getMunche from '../../api/test/getMunche';
// import getSeoji from '../../api/test/getSeoji';

// import useAsync from '../../hooks/useAsync';

// function TestEachSidebar({ consonant, requestId }) {
//   const navigate = useNavigate();
//   const [seojiListDatas, setSeojiListDatas] = useState([]);

//   const [includeGwonchaData, setIncludeGwonchaData] = useState({});
//   const [gwonchaListDatas, setGwonchaListDatas] = useState([]);

//   const [includeMuncheData, setIncludeMuncheData] = useState({});
//   const [muncheListDatas, setMuncheListDatas] = useState([]);

//   const [includeFinalData, setIncludeFinalData] = useState({});
//   const [finalListDatas, setFinalListDatas] = useState([]);

//   // 서지
//   const [clickConconsnat, setClickConsonant] = useState('B');

//   // 서지 api 요청, consonant가 바뀔 때마다
//   const [seojiJsonDatas] = useAsync(
//     () => getSeoji(0, clickConconsnat),
//     [clickConconsnat],
//   );
//   // 서지 api 요청 데이터인 json이 바뀔 때마다
//   useEffect(() => {
//     if (seojiJsonDatas.data !== null) {
//       let tempArray = [];
//       seojiJsonDatas.data.datas.map((seoji) => {
//         tempArray.push({
//           childId: seoji.childId,
//           childTitle: seoji.childTitle,
//         });
//       });
//       setSeojiListDatas(tempArray);
//     }
//   }, [seojiJsonDatas]);

//   // 권차
//   const [clickSeoji, setClickSeoji] = useState('');

//   // 권차 api 요청, seojiTitle이 바뀔 때마다
//   const [gwonchaJsonDatas] = useAsync(
//     () => getGwoncha(1, clickSeoji),
//     [clickSeoji],
//   );

//   //권차 api 요청 데이터인 json이 바뀔 때마다
//   useEffect(() => {
//     if (gwonchaJsonDatas.data !== null) {
//       gwonchaJsonDatas.data.datas.map((gwoncha) => {
//         if (!includeGwonchaData[gwoncha.childId]) {
//           setGwonchaListDatas((prev) => [
//             ...prev,
//             { childId: gwoncha.childId, childTitle: gwoncha.childTitle },
//           ]);
//           setIncludeGwonchaData((prev) => ({
//             ...prev,
//             [gwoncha.childId]: gwoncha.childId,
//           }));
//         }
//       });
//     }
//   }, [gwonchaJsonDatas]);

//   //문체
//   const [clickGwoncha, setClickGwoncha] = useState('');

//   // 문체 api 요청, click gwonch 했을 때마다
//   const [muncheJsonDatas] = useAsync(
//     () => getMunche(2, clickGwoncha),
//     [clickGwoncha],
//   );

//   //문체 api 요청 데이터인 json이 바뀔 때마다
//   useEffect(() => {
//     if (muncheJsonDatas.data !== null) {
//       muncheJsonDatas.data.datas.map((munche) => {
//         if (!includeMuncheData[munche.childId]) {
//           setMuncheListDatas((prev) => [
//             ...prev,
//             { childId: munche.childId, childTitle: munche.childTitle },
//           ]);
//           setIncludeMuncheData((prev) => ({
//             ...prev,
//             [munche.childId]: munche.childId,
//           }));
//         }
//       });
//     }
//   }, [muncheJsonDatas]);

//   //최종정보
//   const [clickMunche, setClickMunche] = useState('');

//   // 최종정보 api 요청, click munche 했을 때마다
//   const [finalJsonDatas] = useAsync(
//     () => getFinal(3, clickMunche),
//     [clickMunche],
//   );

//   //문체 api 요청 데이터인 json이 바뀔 때마다
//   useEffect(() => {
//     if (finalJsonDatas.data !== null) {
//       finalJsonDatas.data.datas.map((final) => {
//         if (!includeFinalData[final.childId]) {
//           setFinalListDatas((prev) => [
//             ...prev,
//             { childId: final.childId, childTitle: final.childTitle },
//           ]);
//           setIncludeFinalData((prev) => ({
//             ...prev,
//             [final.childId]: final.childId,
//           }));
//         }
//       });
//     }
//   }, [finalJsonDatas]);

//   useEffect(() => {
//     setClickConsonant(consonant);
//     setClickSeoji(requestId.substr(0, 5));
//     setClickGwoncha(requestId.substr(0, 9));
//     setClickMunche(requestId);
//   }, []);
//   const link4Seoji = '/gwoncha/';

//   if (
//     seojiListDatas === null ||
//     seojiListDatas === undefined ||
//     gwonchaListDatas === null ||
//     gwonchaListDatas === undefined ||
//     muncheListDatas === null ||
//     muncheListDatas === undefined
//   )
//     return <div>zz</div>;
//   return (
//     <>
//       <button
//         onClick={() => {
//           setClickConsonant('A');
//         }}>
//         가
//       </button>
//       <button
//         onClick={() => {
//           setClickConsonant('B');
//         }}>
//         나
//       </button>

//       {seojiListDatas.map((seoji) => (
//         <li
//           style={{ cursor: 'pointer' }}
//           onClick={() => {
            
//             setClickSeoji(seoji.childId);
//             navigate(link4Seoji + seoji.childId, {
//               state: {
//                 seojiListDatas: seojiListDatas,
//                 gwonchaListDatas: gwonchaListDatas,
//                 muncheListDatas: muncheListDatas,
//                 finalListDatas: finalListDatas,
//               },
//             });
//           }}>
//           {seoji.childTitle}

//           {gwonchaListDatas.map(
//             (gwoncha) =>
//               gwoncha.childId.includes(seoji.childId) && (
//                 <li
//                   style={{ textIndent: '15px', cursor: 'pointer' }}
//                   onClick={() => setClickGwoncha(gwoncha.childId)}>
//                   {gwoncha.childTitle}

//                   {muncheListDatas.map(
//                     (munche) =>
//                       munche.childId.includes(gwoncha.childId) && (
//                         <li
//                           style={{ textIndent: '30px', cursor: 'pointer' }}
//                           onClick={() => setClickMunche(munche.childId)}>
//                           {munche.childTitle}

//                           {finalListDatas.map(
//                             (final) =>
//                               final.childId.includes(munche.childId) && (
//                                 <li
//                                   style={{
//                                     textIndent: '45px',
//                                     cursor: 'pointer',
//                                   }}
//                                   //onclick: content
//                                 >
//                                   {final.childTitle}
//                                 </li>
//                               ),
//                           )}
//                         </li>
//                       ),
//                   )}
//                 </li>
//               ),
//           )}
//         </li>
//       ))}
//     </>
//   );
// }

// export default TestEachSidebar;
