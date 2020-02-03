import React from 'react'
import { Card, Icon, Avatar, Typography } from 'antd';
import { Link } from "react-router-dom"
const { Meta } = Card
const { Text, Title } = Typography


const FilteredCards = ({ data }) => (
  <Link to={`/detail/${data.id}`} >
    <Card
      hoverable
      style={{ width: 380, maxWidth: 380, minHeight: 200 }}
      cover={<div alt="example"
        style={{
          background: `url(${data.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 180,
        }}></div>}
      actions={[
        <div>
          <Icon type="compass" key="setting" />
        </div>,
        <div>Price: {data.price} sum</div>,
      ]}
    >
      <Meta title={data.name} description={data.location} className="card-menta" />
    </Card>
  </Link>
);

export default FilteredCards