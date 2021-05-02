import React from 'react'
import classes from './NewProduct.module.css'
import ProductPicture from '../../components/product/newproduct/leftsection/ProductPicture'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import ProductDescription from '../../components/product/newproduct/rightsection/ProductDescription'

function NewProduct() {
    return (
        <>
        <main className={classes["main-container"]}>
            <section className={classes["left-container"]}>
                <BreadCrumb/>
                <ProductPicture/>
            </section>
            <section className={classes["right-container"]}>
                <ProductDescription/>
            </section>
        </main>
            
        </>
    )
}

export default NewProduct
