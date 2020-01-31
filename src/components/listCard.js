import React from 'react'
import { Card } from 'antd';
import { Link } from "react-router-dom"
const { Meta } = Card;

const ListCard = ({ data, small }) => (
  <Link to={`/${data.type}`} >
    <Card
      hoverable
      style={!small ? { width: 360, maxWidth: 360, minHeight: 200 } : { width: 260, maxWidth: 260, minHeight: 200 }}
      cover={<div alt="example"
        style={{
          background: `url(${data.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 180,
        }}></div>}
    >
      <Meta title={data.name} description={data.text} className="card-menta" />
    </Card>
  </Link>
);

export default ListCard