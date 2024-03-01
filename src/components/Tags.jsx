import React from 'react'
import Badge from 'react-bootstrap/Badge';

function Tags({texto, color}) {
    return (
        <>
            <Badge style={{width:'100%'}} bg={color}>{texto}</Badge>
        </>
    )
}

export default Tags