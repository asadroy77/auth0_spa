import React from 'react';
import { useQuery } from 'react-query';
import axios from "axios";
 

const AllUsers = () => {
 

    const { isLoading, error, data } = useQuery('allusers', async() =>{
        
        let res = await axios.get("https://www.anapioficeandfire.com/api/characters")
        return res.data
        
    }
 )

 console.log(isLoading  + "loading")
 console.log(data)
 console.log(error + "error")

return (<>
{/* {data && data.map((item,i)=>(
<div key={i}> <h3>{item.name}</h3> </div>
))} */}
</>
)
}

export default AllUsers