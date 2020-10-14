import React from 'react';
import { ToggleButton } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';

export default function FavouriteButton({id, title, image, rating, released}) {
    const [selected, setSelected] = React.useState(false);
    
    const gamesArray = {title,image,rating,released};

    function setFav(){
        localStorage.setItem(id , JSON.stringify(gamesArray))
    }

    return (
            <ToggleButton value="check" selected={selected} onClick={setFav(id, gamesArray)} onChange={() => {setSelected(!selected)}}>
                <StarIcon/>
            </ToggleButton>
    )
}

// export default function FavouriteButton({id}) {
//     const [selected, setSelected] = React.useState(false);

//     if (localStorage.getItem(id) === null){
//         localStorage.setItem(id,selected)
//     };

//     function setFav(){
//         localStorage.setItem(id,selected)
        
//         console.log(localStorage.getItem(id));
//     }

//     return (
//             <ToggleButton value="check" selected={selected} onClick={setFav(id)} onChange={() => {setSelected(!selected)}}>
//                 <StarIcon/>
//             </ToggleButton>
//     )
// }

