import { Movies } from './resource.js';

const displayData = async () => {
  const list = document.querySelector('.list');
  const obj = new Movies();
  await obj.getData().then((response) => {
    let itemList = '';
    response.forEach((element) => {
      itemList += `<li class="list-item">
                          <img class="list-img" src="${element?.image?.original}" alt="Season ${element.number}">
                            <div class="series-title">
                                <p>Season ${element.number}</p>
                                <a href="#" class="fa-solid fa-heart like-icon" id="item${element.id}"> 0 likes</a>
                            </div>
                            <div class="buttons">
                                <button class="comments-button" type="button" id="${element.id}">Comments</button>
                            </div>
                        </li>`;
    });
    list.innerHTML = itemList;
  });
};

export default displayData;