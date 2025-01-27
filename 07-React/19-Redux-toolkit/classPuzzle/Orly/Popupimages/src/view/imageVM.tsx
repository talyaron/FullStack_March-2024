import { setImage } from "../../../model/slices/imageSlice";
import { store } from "../../../model/store";

export function fetchImageToStore() {

    const dispatch = store.dispatch;
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            dispatch(setImage(data))
        })

}