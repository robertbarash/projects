import React from "react"
import Card from "react-bootstrap/Card"

const CustomCard = (props) => {
  return (
    <Card className='card'>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className={'card-title'}><a href={props.link}>{props.title}</a></Card.Title>
        <Card.Text className={'card-body'}> 
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CustomCard;