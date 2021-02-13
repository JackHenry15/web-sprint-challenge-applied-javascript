
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

import axios from "axios"
import { topics } from "../mocks/data"

  //
const Tabs = (topics) => {
  //declaring
  const topicsDiv = document.createElement('div')
  const t0Div = document.createElement('div')
  const t1Div = document.createElement('div')
  const t2Div = document.createElement('div')
  
  //text content and class assignments
  t0Div.textContent = topics[0]
  t1Div.textContent = topics[1]
  t2Div.textContent = topics[2]

  topicsDiv.classList.add('topics')
  t0Div.classList.add('tab')
  t1Div.classList.add('tab')
  t2Div.classList.add('tab')
 

  //structure
  topicsDiv.appendChild(t0Div)
  topicsDiv.appendChild(t1Div)
  topicsDiv.appendChild(t2Div)
  

  return topicsDiv;
}


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

const tabsAppender = (selector) => {
  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
  .then((res) => {

    const parent = document.querySelector(selector);

    for(let i = 0; i < topics.topics.length; i++){
      topics.topics[i];
    console.log(topics.topics[i]);
      parent.appendChild(Tabs(topics.topics[i]));
    
    console.log(parent)
      }
      parent.appendChild(Tabs(topics.topics[i]));
    return parent;
  })
  .catch((err) => {
    console.log(err, 'this is an error');
  })

}

export { Tabs, tabsAppender }
