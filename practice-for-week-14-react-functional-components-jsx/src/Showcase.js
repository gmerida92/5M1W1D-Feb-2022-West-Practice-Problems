import bulbasaur from './images/bulbasaur.jpg'
import './Showcase.css';

function Showcase() {
    let favPokemon = 'Charmander';
    let pokeCharacteristics = {
        type: "Fire",
        move: "Flamethrower"
    };

    // let styleObj1 = {
    //     backgroundColor: 'green',
    //     color: 'white'
    // };

    // let styleObj2 = {
    //     backgroundColor: 'white',
    //     color: 'green'
    // };

    return (
        <div className='container'>
            <h1>{favPokemon}'s Showcase Component</h1>
            <img src={bulbasaur} alt={favPokemon}/>
            <h2>Charmander's type is <span className='Type'>{pokeCharacteristics.type}</span> and one of their moves is <span className='Move'>{pokeCharacteristics.move}</span></h2>
        </div>
    );
};

export default Showcase;