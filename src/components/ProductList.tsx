import { PRODUCTS } from "../data/product.data";
import { Card } from "./Card";

export const ProductList = () => {
    return (
        <>
            <div className="w-full lg:basis-2/3">
                <h1 className="heading heading-1 mb-8">Desserts</h1>
                <div className="grid-cols-auto-fit grid gap-x-6 gap-y-8">
                    {PRODUCTS.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};
