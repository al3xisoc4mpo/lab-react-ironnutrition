import React from 'react'
import { Card, Col, Button } from 'antd';

export default function FoodBox(props) {

    const totalCalories = () => {
        const totalCalories = props.food.calories * props.food.servings
        return totalCalories
    }


  return (
    <>
      <Col xs={20} sm={16} md={12} lg={8} xl={4} >
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
          <Button type="primary" onClick={ () => { props.deleteFood(props.food.name) } }> Delete </Button>
        </Card>
      </Col>

    </>
  )
}
