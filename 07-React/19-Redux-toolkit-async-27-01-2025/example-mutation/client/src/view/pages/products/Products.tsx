import { Product } from '../../../model/models/productModel'
import { useGetAllProductsQuery, useAddProductMutation } from '../../../services/productsService'

const Products = () => {
    const { data } = useGetAllProductsQuery();
    const [addProduct] = useAddProductMutation();
    console.log(data)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            name: { value: string };
            category: { value: string };
            description: { value: string };
            image: { value: string };
            price: { value: number };
            inStock: { checked: boolean };
        };
        addProduct({
            name: target.name.value,
            category: target.category.value,
            description: target.description.value,
            image: target.image.value,
            price: target.price.value,
            inStock: target.inStock.checked,
        });
    }

    const products = data?.products;
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="text" name="category" placeholder="Category" required />
                <input type="text" name="description" placeholder="Description" required />
                <input type="text" name="image" placeholder="Image URL" required />
                <input type="number" name="price" placeholder="Price" required />
                <input type="checkbox" name="inStock" id="inStock" /><label htmlFor='inStock' >In Stock</label> 
                <button type="submit">add product</button>
            </form>

            <div>
                {products?.map((product: Product) => (
                    <div key={product._id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                ))}


            </div>
        </>
    )
}

export default Products