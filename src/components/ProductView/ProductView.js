import products from "../../db.json";
import { useState, useEffect } from "react";
import s from "./ProductView.module.css";
export default function ProductView(data, sort) {
    const [products, setProducts] = useState(data.data);
    useEffect(() => {
        fetch(`http://localhost:3000/products?_sort=count&_order=acs`)
            .then((res) => res.json())
            .then(setProducts);
    }, []);
    return (
        <div>
            <ul className={s.ProductList}>
                {products.map((product) => (
                    <li key={product.id} className={s.ProductListItem}>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className={s.ProductImage}
                        ></img>
                        <p>Name: {product.name}</p>
                        <p>Weight: {product.weight}</p>
                        <p>Count: {product.count}</p>
                        <button type="button">Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
