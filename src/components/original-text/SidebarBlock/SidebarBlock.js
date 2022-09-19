import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import getSeojiList from '../../../api/explore1/getSeojiList';

const Container = styled.div`
  border: 1px solid #d9d9d9;
  border-right: none;
  height: 85vh;
  overflow: auto;
  overflow-x: scroll;
`;

function SidebarBlock({ depth = 5, test = [] }) {
  const { state } = useLocation();
  //console.log(state);
  const container = useRef();
  const test1 = useRef();
  
  useEffect(() => {
    if (state !== null) {
      container.current.scrollTo(0, state.height);
    }
  }, [container]);
  depth = parseInt(depth);

  const seojiTitle = [
    { id: 0, consonant: '서지명1' },
    { id: 1, consonant: '서지명1' },
    { id: 2, consonant: '서지명1' },
    { id: 3, consonant: '서지명1' },
    { id: 4, consonant: '서지명1' },
    { id: 5, consonant: '서지명1' },
    { id: 6, consonant: '서지명1' },
    { id: 7, consonant: '서지명1' },
    { id: 8, consonant: '서지명1' },
    { id: 9, consonant: '서지명1' },
    { id: 10, consonant: '서지명1' },
    { id: 11, consonant: '서지명1' },
    { id: 12, consonant: '서지명1' },
    { id: 13, consonant: '서지명1' },
  ];

  return (
    <Container ref={container}>
      {depth >= 2 && (
        <ul style={{ fontSize: '17px' }}>
          {seojiTitle.map((item) => (
            <>
              <li>{item.consonant}</li>
            </>
          ))}

          <Link to="/test/seoji/1" ref={test1} state={{ height: '300' }}>
            <li>서지명</li>
          </Link>
          {depth >= 3 && (
            <ul>
              <Link to="/test/gwoncha/1" state={{ height: '300' }}>
                <li>권차명</li>
              </Link>
              {depth >= 4 && (
                <ul>
                  <Link to="/test/munche/1" state={{ height: '300' }}>
                    <li>문체명</li>
                  </Link>
                  {depth >= 5 && (
                    <ul>
                      <Link to="/test/final/1" state={{ height: '300' }}>
                        <li>최종정보타이틀</li>
                      </Link>
                      <li>최종정보타이틀</li>
                      <li>최종정보타이틀</li>
                      <li>최종정보타이틀</li>
                      <li>최종정보타이틀</li>
                      <li>최종정보타이틀</li>
                    </ul>
                  )}

                  <li>문체명</li>
                  <li>문체명</li>
                  <li>문체명</li>
                  <li>문체명</li>
                  <li>문체명</li>
                  <li>문체명</li>
                  <li>문체명</li>
                  <li>문체명</li>
                  <li>문체명</li>
                  <li>문체명</li>
                  <li>문체명</li>
                </ul>
              )}

              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
              <li>권차명</li>
            </ul>
          )}
          <li>서지명</li>
          <li>서지명</li>
          <li>서지명</li>
          <li>서지명</li>
          <li>서지명</li>
          <li>서지명</li>
          <li>서지명</li>
          <li>서지명</li>
          <li>서지명</li>
          <li>서지명</li>
        </ul>
      )}
    </Container>
  );
}

export default SidebarBlock;
