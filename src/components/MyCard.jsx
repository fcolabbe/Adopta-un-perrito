import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tags from './Tags';

function MyCard({ imagen, nombre, descripcion, texto, color }) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                       {descripcion}
                    </Card.Text>
                </Card.Body>
                <Tags color={color} texto={texto}/>
            </Card>
        </>
    )
}

export default MyCard