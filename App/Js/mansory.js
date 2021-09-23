
const grid = document.querySelector('.grid');
if (typeof (grid) != 'undefined' && grid != null) {
    imagesLoaded(grid).on('progress', function () {
        const msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-item',
            percentPosition: true,
            gutter: 30,

        });
    });
}
