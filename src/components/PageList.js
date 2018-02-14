import React from 'react'
import '../styles/PageList.css'

const PageListItem = () => {
  return (
    <li className='list-item'>
      <h1>기본적인 문서 작성툴입니다.</h1>
      <p className='content'>
        작성법은 상당히 간단합니다. 쓰고 싶은 글의 내용을 생각하고 그걸 적으면 됩니다. That's easy.
      </p>
      <p className='date'>
        Feb 12, 2018
      </p>
    </li>
  )
}

const PageList = () => {
  return (
    <section className='page-list'>
      <header className='page-header'>
        <h1 className='sr-only'>
          노트 보기
        </h1>
      </header>
      <ul className='list'>
        <PageListItem />
      </ul>
    </section>
  )
}

export default PageList