import "../style/style.css";
interface Products {
  catagories: string;
  image: string;
  title: string;
}

const Item: React.FC<Products> = ({ products }) => {
  const { catagories, image, title,id,price,rating } = products;
  console.log(products);
  return (
    <>
    <a href={`/product/${id}`} className="text-decoration-none">
    <div className="card">
      <span className='rate'>{rating.rate}</span>
        <div className="cat">{catagories}</div>
        <div className="image">
          <img  src={image} width={180} height={180} />
        </div>
        <div className="title">{title}</div>
        
        <div className="info">
          <span className="price">{price}$</span>
          <span className="count">count :{rating.count}</span>
        </div>
        <button className="btn btn-primary">Add</button>
      </div>
    </a>
      
    </>
  );
};

export default Item;
