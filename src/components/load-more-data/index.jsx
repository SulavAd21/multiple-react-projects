import { useEffect, useState } from 'react';
import './style.css'
import { GiConsoleController } from 'react-icons/gi';

export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProdcuts] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null)
    const [disableBtn, setDisableBtn] = useState(false)

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count + 20}`);

            const data = await response.json();

            if (data && data.products && data.products.length) {
                setLoading(false);
                setProdcuts((prevData)=>[...prevData, ...data.products]);
            }


        } catch (error) {
            setError(error.message)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [count])

    if (loading) {
        return <div>Loading data! Please wait ....</div>
    }


    return <div className='load-container'>
        <div className="product-container">
        {
            products && products.length 
            ? products.map(products=>{
                return <div key={products.id} className='product'>
               <img src={products.thumbnail} alt={products.description}/>
               <p>{products.title}</p>
                </div>
            })
            : null
        }
        </div>
        <div>
            <button disabled={disableBtn} className='btn-container' onClick={()=>setCount(count+1)}>More Products</button>
        </div>
    </div>
}