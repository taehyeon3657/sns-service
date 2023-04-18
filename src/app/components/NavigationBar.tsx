import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <>
      <div>
        <Link to="/">메인</Link>
        <Link to="/write">글쓰기</Link>
        <Link to="/profile">내정보</Link>
      </div>
    </>
  );
}
