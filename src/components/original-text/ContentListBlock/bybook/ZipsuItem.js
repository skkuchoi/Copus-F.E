import React, { useState } from 'react';
import styled from 'styled-components';

const Item = styled.p`
  font-size: 15px;
  padding: 5px 0px;
  margin: 0;
`;

function CalculateZipsuSok(zipsuAlphabet) {
  console.log('zipsuSok: ', zipsuAlphabet);
  if (zipsuAlphabet === 'a') return '';
  else return '속';
}

function CalculateZipsuNumber(zipsuNumber) {
  console.log('zipsu Number는: ', zipsuNumber);
  const [firstNumber, setFirstNumber] = useState(true);
  const [secondNumber, setSecondNumber] = useState(true);
  const thirdNumber = true;
  if (zipsuNumber.substr(0, 1) === '0') setFirstNumber(false);
  if (zipsuNumber.substr(1, 2) === '0') setSecondNumber(false);
  // 123
  if (firstNumber) return zipsuNumber;
  // 012
  else if (secondNumber) return zipsuNumber.substr(1);
  // 001
  else if (thirdNumber) return zipsuNumber.substr(2);
}

function CalculateZipsu(zipsuStart, zipsuEnd) {
  let zipsu = '';
  // 집수 번호가 같을 때
  if (zipsuStart === zipsuEnd) {
    console.log('집수 번호가 같습니다.');
    zipsu.concat(CalculateZipsuSok(zipsuStart.substr(0, 1))); // a or b
    zipsu.concat(CalculateZipsuNumber(zipsuStart.substr(1)));
    zipsu.concat('집');
  }
  // 집수 번호가 다를 때
  else {
    zipsu.concat(CalculateZipsuSok(zipsuStart.substr(0, 1))); // a or b
    zipsu.concat(CalculateZipsuNumber(zipsuStart.substr(1)));
    zipsu.concat('~');
    zipsu.concat(CalculateZipsuNumber(zipsuEnd.substr(1)));
    zipsu.concat('집');
  }
  return zipsu;
}

function ZipsuItem({ zipsuStart = '', zipsuEnd = '' }) {
  let zipsu;
  if (zipsuStart && zipsuEnd) {
    zipsu = CalculateZipsu(zipsuStart, zipsuEnd);
  }
  if (zipsuStart && zipsuEnd) return <Item>{zipsu}</Item>;
  return <Item />;
}

export default ZipsuItem;
