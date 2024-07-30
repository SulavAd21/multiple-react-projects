import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './style.css'


export default function ImageSlider({ url }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(url) {
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=1&limit=10`)
            const data = await response.json()

            if (data) {
                setImages(data);
                setLoading(false);
                console.log(images)
            }

        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
    }, [url])

    if (loading) {
        return <div>Loading data! Please wait ...</div>
    }

    if (error) {
        return <div>Error occured! {error}</div>
    }

    function handleBefore() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    return <div className='container'>
        < BsArrowLeftCircleFill onClick={handleBefore} className=' arrow arrow-left' />
        {
            images && images.length
                ? images.map((item, index) => {
                    return <img key={item.id} alt={item.author} src={item.download_url} className={currentSlide === index ? "currentImage" : "currentImage hide-image"} />
                })
                : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
        <span className='circle-indicators'>
            {
                images && images.length
                    ? images.map((_, index) => {
                        return <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator update-indicator"} onClick={() => setCurrentSlide(index)}></button>
                    })
                    : null
            }
        </span>
    </div>
}