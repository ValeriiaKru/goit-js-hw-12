export function photoTemplate(image) {
    return `<li class="gallery-item">
      <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" class="gallery-item-image"></a>
        <ul class="image-info-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes-js">${image.likes}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views-js">${image.views}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments-js">${image.comments}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads-js">${image.downloads}</p>
          </li>
        </ul>
    </li>`;
}

export function galleryTemplate(array) {
    return array.map(photo => photoTemplate(photo)).join('');
}

export function showElem(elem) {
    elem.classList.remove('visually-hidden');
}

export function hideElem(elem) {
    elem.classList.add('visually-hidden');
}