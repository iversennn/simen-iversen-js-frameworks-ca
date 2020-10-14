import React from 'react';

export default function ErrorMessage({children}) {
    return (
        <div className='error text-danger ml-2 mt-1' >{children}</div>
    );
}