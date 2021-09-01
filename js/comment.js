function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayComments(data))
}
function displayComments(data) {
    console.log(data);
     const ul = document.getElementById('comment'); 
     
     for (const comment of data) {  
         console.log(comment);
         const li = document.createElement('li');
         li.classList.add('comment-css');
         li.innerText = `name: ${comment.name}>>> email: ${comment.email} >>>> comment: ${comment.body}`;
         ul.appendChild(li);
     }
}

// loadComments();
