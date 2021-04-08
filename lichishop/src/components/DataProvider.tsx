import React, { Component } from 'react'

export const DataContext = React.createContext({})

export default class DataProvider extends Component {

    state = {
        categories: 
        [
            {   
                cat_id: 1,
                cat_name: "Dresses",
                cat_image: "https://static.lichi.com/product/38986/99defa25244803368bac228315f8301b.jpg?v=0_3885823&resize=size-middle",
                cat_image2: "https://static.lichi.com/product/38986/66e55d470cb1153f953f370e807cf51b.jpg?v=1_3885822",
            },
            {
                cat_id: 2,
                cat_name: "Pants & Jeans",
                cat_image: "https://static.lichi.com/product/38724/a91d05759771a57c321cdb6110527cc1.jpg?v=0_3883108&resize=size-middle",
                cat_image2: "https://static.lichi.com/product/38724/6f95d115d895d00ba0cd01f7cb3536c8.jpg?v=0_3883109&resize=size-middle"
            },
            {
                cat_id: 3,
                cat_name: "Skirts",
                cat_image: "https://static.lichi.com/product/39013/1c017f83ccb6b4cfc7588b5d55f8e955.jpg?v=0_3885946&resize=size-middle",
                cat_image2: "https://static.lichi.com/product/39013/f0a1508c395e759f42ffc1e95ab595ea.jpg?v=3_3885949"
            },
            {
                cat_id: 4,
                cat_name: "Owterwear",
                cat_image: "https://static.lichi.com/product/39009/9b7562206880bbdfe1a710d39365896c.jpg?v=0_3885930&resize=size-middle",
                cat_image2: "https://static.lichi.com/product/39009/ab2f60b5be7315866708feff8b5d3bb3.jpg?v=6_3885936"
            },
            {
                cat_id: 5,
                cat_name: "Jackets & Blazers",
                cat_image: "https://static.lichi.com/product/38963/9575ba988bec53332d993c8d34421de0.jpg?v=0_3885517&resize=size-middle",
                cat_image2: "https://static.lichi.com/product/38963/334f807294367dff35640584eccc8917.jpg?v=4_3885521"
            },
            {
                cat_id: 6,
                cat_name: "Swimwear",
                cat_image: "https://static.lichi.com/product/38646/19dae9ab3b13c73f12f485fff3ed2a7e.jpg?v=0_3850147&resize=size-middle",
                cat_image2: "https://static.lichi.com/product/38646/62e4592611764056726b686fd1b3c745.jpg?v=3_3850148"
            },
            {
                cat_id: 7,
                cat_name: "Shorts",
                cat_image: "https://static.lichi.com/product/39008/8e2b3378408ceba1c62b6ded6d81bebb.jpg?v=0_3885925&resize=size-middle",
                cat_image2: "https://static.lichi.com/product/39008/22d5371ccf3e5f1535c28eabbe22a210.jpg?v=3_3885928"
            },
            {
                cat_id: 8,
                cat_name: "Knitwear & Sweatshirts",
                cat_image: "https://static.lichi.com/product/38984/872f2feaa6544660e34fb5fac7a65e89.jpg?v=0_3885786&resize=size-middle",
                cat_image2: "https://static.lichi.com/product/38984/0a62d75fb83314cf9f30d895e63847c8.jpg?v=4_3885790"
            },
            {
                cat_id: 9,
                cat_name: "Shoes",
                cat_image: "https://static.lichi.com/product/38644/ced2735d7ac3605a178382a3fb87373f.jpg?v=0_3850134&resize=size-middle",
                cat_image2: "https://static.lichi.com/product/38644/1fed80ca76b4862c592890360b81fd1e.jpg?v=1_3850135"
            },
        ],
    }

    

    render() {
        const {categories} = this.state;
        return (
            <DataContext.Provider value = {{categories}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
