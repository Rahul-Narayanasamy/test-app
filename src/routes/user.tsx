import React from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../data';

interface User  {
    name: string;
    number: number;
    amount: string;
    due: string;
}
export default function User() {
    let params = useParams();
    let value = params?.userId;
    let user: User | undefined = getUser(parseInt(value!));
  return (
    <div style={{ padding: "1rem"}}>
        <h2>User details - {params.userId}</h2>
        <h3>Total Due: {user?.amount}</h3>
      <p>
        {user?.name}: {user?.number}
      </p>
      <p>Due Date: {user?.due}</p></div>
  )
}
