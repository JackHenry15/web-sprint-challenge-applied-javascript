
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>

import axios from "axios"


  //
const Header = (title, date, temp) => {
  //declaring
  const head = document.createElement('div')
  const dateSpan = document.createElement('span')
  const titleH = document.createElement('h1')
  const tempSpan = document.createElement('span')
  //text content and class assignments
  dateSpan.textContent = date
  titleH.textContent = title
  tempSpan.textContent = temp
  head.classList.add('header')
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp')
  //structure
  head.appendChild(dateSpan)
  head.appendChild(titleH)
  head.appendChild(tempSpan)

  return head;
}

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


const headerAppender = (selector) => {
  const headerThing = document.querySelector(selector)
  const headChild = Header();

  headerThing.append(headChild);

  return headerThing;
}



export { Header, headerAppender }
