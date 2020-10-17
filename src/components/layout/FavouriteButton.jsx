import React from 'react';
import { ToggleButton } from '@material-ui/lab';
import StarIcon from '@material-ui/icons/Star';

// export default function FavouriteButton({id, title, image, rating, released}) {
//     const [selected, setSelected] = React.useState(false);

//     var myTestArray = {id,title,image,rating,released}

//     function setFav(){
//         localStorage.setItem(id,myTestArray)
//     }

//     return (
//             <ToggleButton value="check" selected={selected} onClick={() => setFav()} onChange={() => {setSelected(!selected)}}>
//                 <StarIcon/>
//             </ToggleButton>
//     )
// }

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
//     const [selected, setSelected] = React.useState(false);

//     if (localStorage.getItem(id) === null){
//         localStorage.setItem(id,selected)
//     };

//     function setFav(){
//         localStorage.setItem(id,selected)
        
//         console.log(localStorage.getItem(id));
//     }

//     return (
//             <ToggleButton value="check" selected={selected} onClick={()=>setFav(id)} onChange={() => {setSelected(!selected)}}>
//                 <StarIcon/>
//             </ToggleButton>
//     )
// }

