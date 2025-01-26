import { useSelector } from 'react-redux'
import { selectImage } from '../model/slices/imageSlice'
import { useEffect } from 'react';
import { fetchImageToStore } from './imageVM';

const Image = () => {

    useEffect(() => {
        fetchImageToStore();
    }, []);

    const image = useSelector(selectImage);

    return (
        <div>
            <h1>Image</h1>
            {image && <img src={image.message} alt="image" />}
            <button onClick={fetchImageToStore}>Get New Image</button>
        </div>
    )
}

export default Image