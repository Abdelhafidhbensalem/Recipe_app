import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import {Link} from 'react-router-dom';
import './SingleRecipe.css';

const SingleRecipe = (props) => {
    const { idrecipe } = props.match.params;
    const [singleRecipe, setSingleRecipe] = useState(null)
    const getSingleRecipe = () => {
        axios.get(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${idrecipe}&app_id=4fa2acd8&app_key=f77a53a8f4c08f5ae1a4331af65089b6`)
            .then((res) => {
                setSingleRecipe(res.data)
            })
            .catch((error) => {
                alert("Oh snap! you got an error\n" + error)
            });
    };
    useEffect(() => {
        getSingleRecipe();
    }, []);

    return (
        <div>
            {singleRecipe===null?<h1>load</h1>:
            <div className="card_single">
            <div>
            <Card style={{ width: '18rem' }}>
                <Link to='/'><Card.Img variant="top" src={singleRecipe[0].image} /></Link>
                <Card.Body>
                    <Card.Title>{singleRecipe[0].label}</Card.Title>
                    <Card.Text>Ingredients</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {singleRecipe[0].ingredientLines.map(element=><ListGroupItem>{element}</ListGroupItem>)}
                </ListGroup>
            </Card>
            </div>
            </div>
}
        </div>
    )
}

export default SingleRecipe
