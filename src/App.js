import CategoryMenu from "./components/category-menu/category-menu.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Bonnets",
      imageUrl: "https://m.media-amazon.com/images/I/61X17sOdHXL._SL1000_.jpg",
    },
    {
      id: 2,
      title: "Skirts",
      imageUrl:
        "https://media3.newlookassets.com/i/newlook/811377747/womens/clothing/skirts/teal-satin-high-waist-pleated-midi-skirt.jpg?w=1200&h=630",
    },
    {
      id: 3,
      title: "Tops",
      imageUrl:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/O/K/5318_1636309762.jpg",
    },
    {
      id: 4,
      title: "Trousers",
      imageUrl:
        "https://cdna.lystit.com/photos/2013/08/25/asos-teal-asos-trousers-with-high-waist-and-soft-pleats-product-1-13029682-235338164.jpeg",
    },
    {
      id: 5,
      title: "Shorts",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0059/6253/0904/products/NS51400-60193_WmsEssentialShorts-2_flat-1_800x.jpg?v=1648749872",
    },
  ];
  return (
  <CategoryMenu categories={categories}/>
  );
};

export default App;
