import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GiftGrid } from './Components/GiftGrid'

export const GifExpertApp = () => {
    //const categories = ["One punch", "Samurai X", "Naruto"];
    const [categories, setCategories] = useState(["Naruto"])
    /*const handleAdd = (e)=>{
        setCategories(['Mindhunter',...categories])
    }*/
    return (
        <>
            <h2>GifExpertApp</h2> 
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                { 
                    categories.map((category) => (
                        <GiftGrid 
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>


        </>
    )
}
