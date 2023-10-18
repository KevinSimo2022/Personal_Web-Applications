const parentContainer = document.querySelector('#about-content');

parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.classList.contains('read-more-btn');
    
    if (!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
});

const experienceContainer = document.querySelector('#exp-content');

experienceContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.classList.contains('read-more-btn');

    if (!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
});

