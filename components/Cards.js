// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of 
// the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.





// const topics = document.querySelector('.topics')

// axios.get('https://lambda-times-api.herokuapp.com/topics')
//     .then( response => {
//         response.data['topics'].forEach( topic => {
//             const tab = createTabs( topic )
//             topics.appendChild(tab)
//         })
//     })
//     .catch( error => {
//         debugger;
//         return console.log(error)
//     })

const cards = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( response => {
        // console.log(response)
        // console.log(response.data['articles']['bootstrap'][0])
        // console.log(response.data['articles'])

        response.data['articles']['bootstrap'].forEach( item => {
            const tabArticle = createCard( item )
            cards.appendChild(tabArticle)
        })
        response.data['articles']['javascript'].forEach( item => {
            const tabArticle = createCard( item )
            cards.appendChild(tabArticle)
        })
        response.data['articles']['jquery'].forEach( item => {
            const tabArticle = createCard( item )
            cards.appendChild(tabArticle)
        })
        response.data['articles']['node'].forEach( item => {
            const tabArticle = createCard( item )
            cards.appendChild(tabArticle)
        })
        response.data['articles']['technology'].forEach( item => {
            const tabArticle = createCard( item )
            cards.appendChild(tabArticle)
        })

        // response.data['articles']['bootstrap'][0].forEach( tab => {
        //     console.log(tab[0])
        //     tab.forEach( article => {
        //         console.log(article)
        //         const tabArticle = createCard( article )
        //         cards.appendChild(tabArticle)
        //     })
        // })
    })
    .catch ( error => {
        debugger;
        return console.log(error)
    })


function createCard( articleObj ) {
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardImgContainer = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardName = document.createElement('span')

    card.appendChild(cardHeadline)
    card.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImgContainer)
    cardImgContainer.appendChild(cardImg)
    cardAuthor.appendChild(cardName)

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthor.classList.add('author')
    cardImgContainer.classList.add('img-container')
    
    cardHeadline.textContent = articleObj['headline'];
    cardImg.src = articleObj['authorPhoto'];
    cardAuthor.textContent = `By: ${articleObj['authorName']}`;

    card.addEventListener('click', () => {
        console.log(cardHeadline.textContent)
    })

    return card;
}