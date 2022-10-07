export default function finalContentParsing() {
    let parsing =
    '<내용>   <단락 align="left" indent="0">天上回寅柄。人閒老甲雄。<원주>南坡。</원주> 鼎聯軒大唱。匏竅屈<line/>      <페이지 number="ITKC_MO_1237A_B137_264D"/>全空。<원주>直敎。</원주> 窘步夸追日。騰翰鄭馭風。<원주>伯陽。</원주> 賞音時幸<line/>     並。打話夜幾中。<원주>景源。</원주> 鴈信南將北。草根白欲紅。<원주>稺敬。</원주> <line/>    隙駒維者寡。翔鳳志焉同。<원주>景道。</원주> 貂續儂何敢。蒼凉覺<line/>     報東。<원주>元瑞。</원주></단락>      </내용>';

  // 부모태그 내용 삭제 OK
  if (parsing.includes("내용")) {
    parsing = parsing.replace("<내용>", "");
    parsing = parsing.replace("</내용>", "");
    console.log("내용 파싱 끝난: ", parsing);
  }

  // 공백 모두 삭제
  while (parsing.includes(" ")) {
    parsing = parsing.replace(" ", "");
  }
  console.log("공백 파싱 끝난: ", parsing);

  // 페이지 태그는 1개만 OK
  if (parsing.includes("페이지")) {
    //console.log(parsing.indexOf("<페이지"));
    let before = parsing.substring(0, parsing.indexOf("<페"));
    let after = parsing
      .substring(parsing.indexOf("<페"))
      .substring(parsing.substring(parsing.indexOf("<페")).indexOf("/>") + 2);
    parsing = before.concat(after);
    console.log("페이지 파싱 끝난: ", parsing);
  }

  // line은 여러개 OK
  while (parsing.includes("line")) {
    parsing = parsing.replace("<line/>", "");
    console.log("라인 파싱 끝난: ", parsing);
  }

  // 단락 삭제
  if (parsing.includes("단락")) {
    const annotationStartEnd = parsing
      .substring(parsing.indexOf("<단락"))
      .indexOf(">");

    parsing = parsing.replace(
      parsing.substr(parsing.indexOf("<단락"), annotationStartEnd + 1),
      ""
    );
    parsing = parsing.replace("</단락>", "");
  }
  // 원주
  //const [title, setTitleArray] = useState({});
  let titleArray = [];
  while (parsing.includes("원주")) {
    const wonjuStart = parsing.indexOf("<원주>");
    const wonjuEnd = parsing.indexOf("</원주>");
    if (parsing.substr(wonjuEnd + 5)[0] === "。") {
      console.log("。");
      titleArray.push({
        title: parsing.substr(0, wonjuStart),
        wonju: parsing
          .substr(wonjuStart + 4, wonjuEnd - (wonjuStart + 4))
          .concat(parsing.substr(wonjuEnd + 5)[0])
      });
      parsing = parsing.substring(wonjuEnd + 6);
    } else if (parsing.substr(wonjuEnd + 5)[0] === "，") {
      titleArray.push({
        title: parsing
          .substr(0, wonjuStart)
          .concat(parsing.substr(wonjuEnd + 5)[0]),
        wonju: parsing.substr(wonjuStart + 4, wonjuEnd - (wonjuStart + 4))
      });
      parsing = parsing.substring(wonjuEnd + 6);
    } else {
      titleArray.push({
        title: parsing.substr(0, wonjuStart),
        wonju: parsing.substr(wonjuStart + 4, wonjuEnd - (wonjuStart + 4))
      });
      parsing = parsing.substring(wonjuEnd + 5);
    }
  }
  //console.log(titleArray);

  //원주 파싱이 끝나면 원주가 없는 타이틀은 array 들어가지 못하므로 넣어줌.
  titleArray.push({
    title: parsing,
    wonju: ""
  });
  parsing = "";

  console.log(parsing);
}
