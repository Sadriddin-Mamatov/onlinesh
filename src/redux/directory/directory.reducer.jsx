const INITIAL_STATE = {
    sections: [
        {
            title: "Headphones",
            imageUrl: "img/head1.jpg",
            id: 1,
            linkUrl: "shop/headphone",
        },
        {
            title: "Powerbanks",
            imageUrl: "img/power.jpg",
            id: 2,
            linkUrl: "shop/powerbanks"
        },
        {
            title: "Glasses",
            imageUrl: "img/glass.jpg",
            id: 3,
            linkUrl: "shop/glasses"
        },
        {
            title: "Laptops",
            imageUrl: "img/lap2.jpg",
            size: "large",
            id: 4,
            linkUrl: "shop/laptop"
        },
        {
            title: "Phones",
            imageUrl: "img/tel1.jpg",
            size: "large",
            id: 5,
            linkUrl: "shop/phone",
            
        }
    ]
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer