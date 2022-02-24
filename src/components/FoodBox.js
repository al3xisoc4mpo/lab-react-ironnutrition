import React from 'react'
import { Card, Col, Button } from 'antd';

export default function FoodBox(props) {

    const totalCalories = () => {
        const totalCalories = props.food.calories * props.food.servings
        return totalCalories
    }


  return (
    <>
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>Calories: {props.food.calories}</p>
        <p>Servings: {props.food.serving}</p>
        <p>
          <b>Total Calories: {totalCalories()} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
    </>
  )
}
