// Comment HTML elements
const commentInputEl = document.getElementById('comment-input');
const commentBtn = document.getElementById('comment-btn');

commentBtn?.addEventListener('click', (event) => {
    event.preventDefault();
    const comment = commentInputEl.value;

    if (comment.trim() === 0) {
        return alert('Enter a comment to submit.');
    }

    // fetch to post new comment
    
})