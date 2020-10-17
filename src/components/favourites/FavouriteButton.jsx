import React from 'react';
import { ToggleButton } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';

export default function FavouriteButton({id, title, image, rating, released}) {
    var mybutton;
    
    if(localStorage.getItem(id)){
        mybutton = true;
    } else {
        mybutton = false;
    }

    const [selected, setSelected] = React.useState(mybutton);
    
    const gamesArray = {id,title,image,rating,released};

    if(localStorage.getItem(id)){

    }

    function setFav(){
        if (localStorage.getItem(id) === null){
            localStorage.setItem(id , JSON.stringify(gamesArray))
        } else {
            localStorage.removeItem(id)
        }
    }

    return (
            <ToggleButton value="check" selected={selected} onChange={() => {setSelected(!selected)}} onClick={() => setFav(id, gamesArray)}>
                <StarIcon/>
            </ToggleButton>
    )
}

// export default function FavouriteButton({id}) {
//     var mybutton;
    
//     if(localStorage.getItem(id) === 'true'){
//         mybutton = true;
//     } else {
//         mybutton = false;
//     }

//     const [selected, setSelected] = React.useState(mybutton);

//     if (localStorage.getItem(id) === null){
//         localStorage.setItem(id,selected)
//     };

//     function setFav(){
//         if(localStorage.getItem(id) === 'true'){
//             localStorage.setItem(id,'false')
//         } else {
//             localStorage.setItem(id,'true')
//         }
//     }

//     return (
//             <ToggleButton value="check" selected={selected} onClick={() => setFav(id)} onChange={() => {setSelected(!selected)}}>
//                 <StarIcon/>
//             </ToggleButton>
//     )
// }

