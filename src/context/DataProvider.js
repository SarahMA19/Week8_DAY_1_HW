import { createContext, useState } from "react";

const DataProvider = props => {
    const [cart, setCart] = useState({size:0, total:0, products: {}});
    return(
        <DataContext.Provider value={{'cart' : cart, 'setCart' : setCart}}>
            {props.children}
        </DataContext.Provider>
    )

}
// const DataProvider = props => {
//     const [item, setItem] = useState({title:0, price:0, description: {}});
//     return(
//         <DataContext.Provider value={{'item' : item, 'setItem' : setItem}}>
//             {props.children}
//         </DataContext.Provider>
//     )
// }

export default DataProvider;
export const DataContext = createContext();