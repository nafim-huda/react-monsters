import { Component } from "react";

import './card-list.styles.css'

import Card from "../card/card.component";

class CardList extends Component {

    /* Whenever our props change -> React makes the intuitive decision to re-render 
    any components that utilize the props -> Why? Because React understands that only through
    a setState() or update to props cause a change to our DOM which means a re-render()!!!
    */
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'> 
                { // we need => () instead of => {} to render back the <h1> component
                monsters.map((monster) => {
                    return (
                    <Card monster={monster} />
                    )
            })}
            </div>
        );
    }
}

export default CardList;