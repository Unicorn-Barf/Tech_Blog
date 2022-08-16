// Comment HTML elements
const commentInputEl = document.getElementById('comment-input');
const commentBtn = document.getElementById('comment-btn');
const blogId = commentBtn.dataset.blogid;
console.log(blogId);

commentBtn?.addEventListener('click', async (event) => {
    event.preventDefault();
    const comment = commentInputEl.value;
    
    

    if (comment.trim() === 0) {
        return alert('Enter a comment to submit.');
    }

    try {
        // fetch to post new comment
        const response = await fetch(`/api/comment/${blogId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment,
            }),
        });
        await response.json();
        if (response.ok) window.location.reload();
    } catch (error) {
        console.log(error);
    }


});