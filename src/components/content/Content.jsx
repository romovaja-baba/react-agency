import "./Content.css";
import Product from "../product/Product";
import DropDownMenu from "./DropDownMenu";
import { moreProductsData } from "../../state";
import { useState, useEffect } from "react";

const Content = (props) => {

    const [currentItem, setCurrentItem] = useState(0);
    const [productsData, setProductsData] = useState(props.productsData);

    useEffect(() => {document.addEventListener('keydown', handleProductDelete)})

    const markActive = (id) => {
        setCurrentItem(id);
    }

    const handleProductDelete = (event) => {
        if ((event.key === "Backspace" || event.key === "Del") && currentItem !== 0) {
            setProductsData(productsData.filter(product => product.id !== currentItem))
        }
    }

    let products = productsData.map(product => {
        return (<div className="contentProductItem" >
            <Product product={product} markActive={markActive} isActive={currentItem === product.id}/>
        </div>)
    });

    const loadMoreProducts = (event) => {
        setProductsData([...productsData, ...moreProductsData]);
        event.currentTarget.classList.add("hidden");
    };

    return (
        <div className="contentArea" >

            <div className="contentDropdownmenu">
                <DropDownMenu />
            </div>

            <div className="contentProducts">
                {products}
            </div>

            <button className="loadMoreBtn" onClick={loadMoreProducts}>Load more</button>
        </div>
    )
};

export default Content;