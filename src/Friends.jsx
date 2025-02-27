import './Friends.css'
import Friend from './Friend'
import {useEffect, useState } from "react";

export default function Friends(){
  const [friends,setFriends]=useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])
  return (
    <div className='box'>
      <h3>Friends: {friends.length}</h3>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
    </div>
  )
}
/**
 * 1.state to hold data
 * 2.useEffect with dependency array
 * 3.use fetch to load data
 * 4.set loaded a data to state
 * 5.diplayb data on the component
 */