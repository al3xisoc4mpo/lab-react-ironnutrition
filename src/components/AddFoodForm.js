import React, { useState } from 'react'
import { Divider, Input } from 'antd';

export default function AddFoodForm(props) {
    console.log(props)

    const [newfood,setNewFood] = useState({
        name: "",
        image: "",
        calories: "",
        servings: ""
    })

    const [error, setError] = useState("")

    const handleChange = (event) => {

        setNewFood({
			...newfood,
		 	[event.target.name]: event.target.value
		})

    }
    
    const handleSubmit = (event) => {

        event.preventDefault()

        if(!newfood.name || !newfood.image || !newfood.calories || !newfood.servings ) {
			setError("All fields must be filled. Please verify.")
			return
		}

        // setFoodList({
        //     ...foodList,
        //     food
        // })

        props.addFood(newfood)

        setNewFood({
            name: "",
            image: "",
            calories: "",
            servings: ""
        })

        setError("")
    }

  return (
    <>
    <form onSubmit={ (event) => { handleSubmit(event) } }>

      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={newfood.name} type="text" name="name" onChange={(event) => { handleChange(event) }} />

      <label>Image</label>
      <Input value={newfood.image} type="text" name="image" onChange={(event) => { handleChange(event) }} />

      <label>Calories</label>
      <Input type="number" min={1} max={10000} value={newfood.calories} name="calories" onChange={(event) => { handleChange(event) }} />

      <label>Servings</label>
      <Input type="number" min={1} max={10000} value={newfood.servings} name="servings" onChange={(event) => { handleChange(event) }} />

    <button type="submit">Create</button>

    </form>
    </>
  )
}
