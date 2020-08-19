import React, {useState, useEffect, createContext} from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

export const ProductsContext = createContext()

export default function ProductsContextProvider(props) {
    const [products, setProducts] = useState({})
    var user = auth.currentUser
    const getproduct = (product) => {
        var section = []
        firestore()
        .collection(product)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                section.push(documentSnapshot.data())
            });
        });
        return section
    }
    useEffect(()=>{
        const food = getproduct('food')
        const drinks = getproduct('drinks')
        const clothes = getproduct('clothes')
        const parfumes = getproduct('parfumes')
        setProducts({Food:food,Drinks:drinks,Clothes:clothes,Parfumes:parfumes})
        console.log(products)
    },[user])

    return (
        <ProductsContext.Provider value={{products}}>
            {props.children}
        </ProductsContext.Provider>
    )
}
