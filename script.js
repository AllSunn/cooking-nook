document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-card');
    const counter = document.getElementById('image-counter');
    if(counter) counter.innerText = images.length;

    const likeBtns = document.querySelectorAll('.like-btn');
    const totalLikesDisp = document.getElementById('total-likes');
    let totalCount = 0;

    likeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const span = this.querySelector('.like-count');
            let num = parseInt(span.innerText);
            if(this.classList.contains('liked')) {
                this.classList.remove('liked');
                num--; totalCount--;
            } else {
                this.classList.add('liked');
                num++; totalCount++;
            }
            span.innerText = num;
            if(totalLikesDisp) totalLikesDisp.innerText = totalCount;
        });
    });
});