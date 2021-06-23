// person variable

let person = [
    {
        img: "./images/avatar-anisha.png",
        fullName: "Anisha Li",
        comment: '“Manage has supercharged our team’s workflow. The ability to maintain\
        visibility on larger milestones at all times keeps everyone motivated.”'
    },
    {
        img: "./images/avatar-ali.png",
        fullName: "Ali Bravo",
        comment: '“We have been able to cancel so many other subscriptions since using \
        Manage. There is no more cross-channel confusion and everyone is much\
        more focused.”'
    },
    {
        img: "./images/avatar-richard.png",
        fullName: "Richard Watts",
        comment: '“Manage allows us to provide structure and process. It keeps us organized \
        and focused. I can’t stop recommending them to everyone I talk to!”'
    },
    {
        img: "./images/avatar-shanai.png",
        fullName: "Shanai Gough",
        comment: '“Their software allows us to track, manage and collaborate on our projects \
        from anywhere. It keeps the whole team in-sync without being intrusive.”'
    }
    
]
// person index
let first = 0, sec = 1, third = 2, fourth = 3;
// target elements
let toggleBtn = document.querySelectorAll("#img")

let pics = document.getElementById("avatar-img");
let fName = document.querySelector('.author');
let comment = document.querySelector('.comment')
let icon = document.querySelector('#icon')
let navBar = document.getElementById('nav')
let toggleImage = document.getElementById('img-icon')

icon.addEventListener('click', function(){
    navBar.classList.toggle('show-nav')
    if(navBar.classList.contains('show-nav')){
        toggleImage.src = './images/icon-close.svg'
    }
    else{
        toggleImage.src = './images/icon-hamburger.svg'
    }
})


window.addEventListener('DOMContentLoaded', function(){
    updateAvatar(first);
    document.body.style.overflowX="hidden";
})
// program to activate the changing process.
toggleBtn.forEach(function(btn){  // iteration through collection of buttons
    btn.addEventListener("click", function(e){
        currentBtn = e.currentTarget.classList;
        if(currentBtn.contains("zero")){ // checks if first button was pressed
            updateAvatar(first)
        }
        if(currentBtn.contains("one")){ // checks if sec button was pressed
            updateAvatar(sec)
        }
        if(currentBtn.contains('two')){ // checks if third button was pressed
            updateAvatar(third)
        }
        if(currentBtn.contains('three')){ // checks if last button was pressed
            updateAvatar(fourth)
        }
    })
})
  
// function to change each persons on web page.
function updateAvatar(pos){
    pics.src = person[pos].img;
    fName.textContent = person[pos].fullName;
    comment.textContent = person[pos].comment;

}

let goBtn = document.getElementById('go-btn');
let form = document.getElementById('my_form');
let message = document.getElementById('message');
goBtn.addEventListener('click', ()=>{
    if(form.value == ''){
        message.textContent = "Form field is empty!"
        message.style.color = 'hsl(12, 88%, 59%)'

    }
    else{
        message.textContent = '';
    }
})
