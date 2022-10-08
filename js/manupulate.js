/**
 * DOM and Event checklist.
 * 
 * You've make a website named Panda Commerce few days ago. Now open that project again. Then perform the tasks below.
 * 
 * 1. Create a new JS file. Can you connect that with index.html?
 * 
 * 2. Transform the text color to lightblue of all the element containing "h2" tag
 * 
 * 3. That website has a section with id named "bags". Can you apply 'tomato' color as background color to that section?
 * 
 * 4. Can you apply 30px border radius to all places having class name "card"
 * 
 * 5. Write a named function. Console log will happen inside it and add that function as a click handler to a button
 * 
 * 6. Now newly add event handler to all "buy now" button as when a "buy now" is clicked then that will be removed from the website. Think and try to implement.
 * 
 * 7. There is a thing named "LET'S STAY IN TOUCH" at the bottom. There you'll disable the "submit" button. Then if someone exactly write "email" in the above input field, button will be active and if anything else is written then buttion will not be active.
 * 
 * 8. (optional) A fun challenge. Image will be changed when "mouseenter" to that image area. Search on google to find how it can be done
 * 
 * 9. (optional) If someone double clicked on the blank area of the bottom "LET'S STAY IN TOUCH" area, background color will be changed.
 * 
 * .
 * 
 * See if you can do 7 of these 9 tasks yourself. If you can do it. That would be great. If not, take help from the group. Join the support session.
 * 
 */


const h2All = document.getElementsByTagName('h2');
for (const h2 of h2All) {
    h2.style.color = 'lightblue';
}

document.getElementById('bags').style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

function btnClicked() {
    console.log('button clicked');
}

document.getElementById('user-email').addEventListener('keyup', function (event) {
    const element = event.target;
    if (element.value === 'email') {
        document.getElementById('btn-submit').removeAttribute('disabled');
    }
    else {
        document.getElementById('btn-submit').setAttribute('disabled', true);
    }
});