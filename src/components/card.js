
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

import axios from "axios";

const Card = (article) => {
  article[{
    headline: cardHeadline,
    authorPhoto: cardImg,
    authorName: cardAuthor
  }];
    // declarations
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardImgCon = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardSpan = document.createElement('span')

    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImgCon)
    cardImgCon.appendChild(cardImg)
    cardAuthor.appendChild(cardSpan)

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    cardImgCon.classList.add('img-container')

   
    cardImg.src = article.authorPhoto
    cardHeadline.textContent = article.headline
    cardSpan.textContent = `By ${article.authorName}`

    card.addEventListener('click', () => {
      console.log(`${cardHeadline}`);
    })

    return card;
    // console.log(card);
}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(res => {
    // const headlines = document.values(articles.articles).flat().map(art => art.headline)
    const parent = document.querySelector(selector);    
    res.articles.forEach(item  => {
      const boyCard = Card({headline, authorPhoto, authorName});
      console.log( boyCard );
      parent.appendChild( boyCard);

    })
    return parent;
  
  })
  .catch( (err) => {
    console.log(err, 'this is an error')
  })

}

export { Card, cardAppender }
