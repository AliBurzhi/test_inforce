import s from "./ProductsList.module.css";
import { useState, useEffect } from "react";
import ProductView from "../ProductView/ProductView";
// import data from "../../db.json";

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState(["ASC"]);
    useEffect(() => {
        fetch(`http://localhost:3000/products?_sort=count&&_order=${sort}`)
            .then((res) => res.json())
            .then(setProducts);
    }, [sort]);

    const handleSelect = (e) => {
        setSort(e.currentTarget.value);
    };
    return (
        <div>
            <h1>Product List</h1>
            <div className={s.ProductListSort}>
                <select onChange={handleSelect}>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>
            </div>
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
