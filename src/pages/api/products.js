export default function handler(req,res){
    const products = [
  {
    id: 1,
    name:"Volcano Blast",
    price: "700",
    image: "https://img.freepik.com/free-photo/delicious-looking-3d-burger-with-simple-background_23-2150914861.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740",
    

  },
 {
    id: 2,
    name:"Grilled Cheese Burger",
    price: "800",
    image:"https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740",
    

  },
   {
    id: 3,
    name:"Tokyo Fire",
    price: "600",
    image:"https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-french-fries-dark-background_140725-89714.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740",
    

  },
   {
    id: 4,
    name:"Texas Tokyo",
    price: "700",
    image:"https://img.freepik.com/free-photo/meat-burger-wooden-board-french-fries-side-view_141793-2388.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740",
    

  },
   {
    id: 5,
    name:"Steakhouse Royale",
    price: "800",
    image:"https://img.freepik.com/free-photo/delicious-burger-studio_23-2151846493.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740",
    

  },
   {
    id: 6,
    name:"Mushroom Swiss",
    price: "900",
    image:"https://img.freepik.com/free-photo/huge-burger-with-fried-meat-vegetables_140725-971.jpg?ga=GA1.1.823138888.1747781968&semt=ais_hybrid&w=740",
    

  },
]
res.status(200).json(products);

}
