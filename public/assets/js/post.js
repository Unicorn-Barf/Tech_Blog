// Post HTML Elements
const titleEl = document.getElementById('blogTitle-input');
const blogTextEl = document.getElementById('blogText-input');
const postBtn = document.getElementById('post-btn');

postBtn?.addEventListener('click', (event) => {
    event.preventDefault();
    title = titleEl.value;
    blogText = blogTextEl.value;
    if (title.trim() === 0) {
        alert('Blog must have a title.');
        return;
    };
    if (blogText.trim() < 20) {
        alert('Blog must be at least 20 characters long.');
        return;
    }

    try {
        
    } catch (error) {
        
    }
})