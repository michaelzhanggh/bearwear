import React from 'react'
import { Link } from 'react-router-dom'

function Button(props){
        return (
            <p>
                <Link className='mt-2 w-48 p-2 border rounded-3xl text-center'
                to={`/${props.name}`}>{props.name}</Link>
            </p>
        );
}
export default Button


