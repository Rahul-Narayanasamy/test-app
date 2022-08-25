import React from 'react'
import { useGetUsersQuery } from '../services/user'

export default function RemoteUser() {
    const {data, isLoading, isFetching, isError, isSuccess} = useGetUsersQuery(undefined);
  return (
    <div className='container text-center'>
        <h2 className="fw-bold m-4">
            RemoteUsers - Fetching data from API using RTK Query
        </h2>

        <div>
            {isLoading && <p>Loading...</p>}
            {isFetching && <p>Data fetching is in progress!!!</p>}
            {isError && <p>Something went wrong!!!</p>}
            {isSuccess && (
                <div>
                    {data?.map((user: any) => {
                        return <div key={user.id} className="p-2 border border-primary m-2">
                            <span>User ID: {user.id} : </span> 
                            <span> Title: {user.title}</span>
                        </div>
                    })}
                </div>
            )}
        </div>
    </div>
  )
}
