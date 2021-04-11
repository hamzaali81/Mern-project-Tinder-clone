import React, {useState, useEffect} from 'react';
import './tinderCards.css';
import TinderCard from 'react-tinder-card'
import axios from './../../API/axios';


const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
      async function fetchData() {
          const req = await axios.get("/tinder/cards");
        // console.log(req);
            setPeople(req.data)
      }

      fetchData();
    }, []);

    console.log(people);

    const onSwipe = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        // setLastDirection(direction);
      }
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
      
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map(({imgUrl, name})=> (
                <TinderCard
                key={name}
                onSwipe={onSwipe} 
                onCardLeftScreen={() => onCardLeftScreen(name)} 
                preventSwipe={['right', 'left']}
                >
                <div 
                style={{backgroundImage: `url(${imgUrl})`}}
                className="card"
                >

                </div>
                </TinderCard>
            ))}        
            </div>
        </div>
    )
}

export default TinderCards
