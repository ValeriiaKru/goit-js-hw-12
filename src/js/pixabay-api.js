import axios from 'axios';

export async function getPhotos(request, currentPage) {
    
    const response = await axios.get("https://pixabay.com/api/", {
        params: {
            key: '44402114-eddf09e8e038ad1f496236950',
            q: request,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 15,
            page: currentPage,
        }
    });

    return response.data;
}