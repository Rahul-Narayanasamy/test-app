import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { getUsers } from '../data'
import { QueryNavLink } from './NavQuery';

export default function Users() {
    let users = getUsers();
    const [searchParams, setSearchParams] = useSearchParams()
  return (
    <div style={{ display: "flex"}}>
        {/* <h3 >Users List </h3> */}
        <nav style={{ borderRight: "1px solid", padding: "1rem"}}>
        <input value={searchParams.get("filter") || ""} 
        onChange={(event) => {
            let filter = event.target.value;
            if(filter) {
                setSearchParams({filter})
            } else {
                setSearchParams({})
            }
        }} />

        {users
            .filter((user) => {
                let filter = searchParams.get("filter");
                if(!filter) return true;
                let name = user.name.toLowerCase();
                return name.startsWith(filter.toLowerCase())
            })
            .map((user) => (
            <QueryNavLink to={`/users/${user.number}`} style={{display: "block", padding: "1rem"}} key={user.number}>{user.name}</QueryNavLink>
        ))}
        </nav>
        
        <Outlet />
    </div>
  )
}
