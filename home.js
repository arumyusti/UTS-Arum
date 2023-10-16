document.addEventListener("DOMContentLoaded", function () {
    const filmTitles = document.querySelectorAll('.sidenav > div');
    filmTitles.forEach((titleElement) => {
        titleElement.addEventListener('click', () => {
            const filmId = titleElement.id;
            const sinopsisElement = document.getElementById('sinopsis-' + filmId);

            if (sinopsisElement.style.display === 'block') {
                sinopsisElement.style.display = 'none';
            } else {
                sinopsisElement.style.display = 'block';
            }
        });
    });
});