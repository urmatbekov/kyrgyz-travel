const initialState = {
    products:[
        {
            id:1,
            title:"Ysyk kol",
            description:"ysyyk kol sonun jer ysyyk kol sonun jer ysyyk kol sonun jer ysyyk kol sonun jer ",
            price:"120c"
        },
        {
            id:2,
            title:"Son kol",
            description:"ysyyk kol sonun jer ysyyk kol sonun jer ysyyk kol sonun jer ysyyk kol sonun jer ",
            price:"120c"
        },
        {
            id:3,
            title:"Chatyr kol",
            description:"ysyyk kol sonun jer ysyyk kol sonun jer ysyyk kol sonun jer ysyyk kol sonun jer ",
            price:"120c"
        }

    ]
}
const FeaturedProducts = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state
        }
    }
};

export default FeaturedProducts;