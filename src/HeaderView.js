import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderView = () => {
  return (
    <div>
      <Header>
        <Link>
          <div
          style={{
            color:"white"
          }}
          >Take the Quiz</div>
        </Link>
      </Header>
    </div>
  )
}

export default HeaderView
