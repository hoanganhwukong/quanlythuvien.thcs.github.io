
function showAudiobookMessage() {
    alert('Sách đang được cập nhật sau');
}
function searchBooks() {
    const searchQuery = document.querySelector('.search-input').value.toLowerCase();
    const books = document.querySelectorAll('.book-item');
    
    books.forEach(book => {
        const title = book.querySelector('h3').textContent.toLowerCase();
        book.style.display = title.includes(searchQuery) ? 'block' : 'none';
    });
}
