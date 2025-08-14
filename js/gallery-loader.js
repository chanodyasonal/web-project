document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    // Elements
    const photoTab = document.getElementById('photo-tab');
    const cinemaTab = document.getElementById('cinema-tab');
    const albumGallery = document.getElementById('album-gallery');
    const photoGallery = document.getElementById('photo-gallery');
    const videoGallery = document.getElementById('video-gallery');

    // Function to show albums
    const showAlbums = () => {
        albumGallery.style.display = 'flex';
        photoGallery.style.display = 'none';
        videoGallery.style.display = 'none';
        
        // Fetch album data from the PHP script
        fetch('gallery/photos/gallery-loader.php?albums=true')
            .then(response => response.json())
            .then(data => {
                albumGallery.innerHTML = '';
                data.albums.forEach(album => {
                    const albumName = album.split('/').pop().replace(/-/g, ' ').toUpperCase();
                    // Using a placeholder image since we don't have the first image path from the API
                    const firstImage = `${album}/${data.images[album][0]}`;
                    let col = document.createElement('div');
                    col.className = 'col-md-4';
                    col.innerHTML = `
                        <div class="image-overlay-card album-card" data-album-path="${album}">
                            <img src="${firstImage}" class="img-fluid rounded shadow" alt="${albumName} album cover">
                            <div class="overlay-content">
                                <h5 class="fw-bold">${albumName}</h5>
                            </div>
                        </div>
                    `;
                    albumGallery.appendChild(col);
                });

                // Add click listeners to album cards
                document.querySelectorAll('.album-card').forEach(card => {
                    card.addEventListener('click', (e) => {
                        const albumPath = e.currentTarget.getAttribute('data-album-path');
                        showAlbumPhotos(albumPath);
                    });
                });
            })
            .catch(err => console.error("Error loading albums:", err));
    };

    // Function to show photos from a specific album
    const showAlbumPhotos = (albumPath) => {
        albumGallery.style.display = 'none';
        photoGallery.style.display = 'flex';
        photoGallery.innerHTML = '';

        // Fetch photos for the selected album
        fetch(`gallery/photos/gallery-loader.php?album_path=${albumPath}`)
            .then(response => response.json())
            .then(data => {
                const albumName = albumPath.split('/').pop().replace(/-/g, ' ').toUpperCase();
                // Add a back button
                const backButton = document.createElement('div');
                backButton.className = 'col-12 mb-4';
                backButton.innerHTML = `
                    <button class="btn btn-outline-dark" id="back-to-albums">← Back to Albums</button>
                    <h3 class="mt-3 fw-bold">${albumName}</h3>
                `;
                photoGallery.appendChild(backButton);
                
                document.getElementById('back-to-albums').addEventListener('click', showAlbums);

                data.photos.forEach(photo => {
                    let col = document.createElement('div');
                    col.className = 'col-md-4';
                    col.innerHTML = `
                        <a href="${photo}" data-lightbox="photo-album">
                            <img src="${photo}" class="img-fluid rounded shadow" alt="Photo from ${albumName}">
                        </a>
                    `;
                    photoGallery.appendChild(col);
                });
            })
            .catch(err => console.error("Error loading album photos:", err));
    };

    // Function to show cinematography videos
    const showCinematography = () => {
        albumGallery.style.display = 'none';
        photoGallery.style.display = 'none';
        videoGallery.style.display = 'flex';
        
        fetch('gallery/photos/gallery-loader.php?videos=true')
            .then(response => response.json())
            .then(data => {
                videoGallery.innerHTML = '';
                data.videos.forEach(video => {
                    let col = document.createElement('div');
                    col.className = 'col-md-6';
                    col.innerHTML = `
                        <div class="video-thumbnail position-relative" style="cursor:pointer;">
                            <video class="w-100 rounded shadow" muted>
                                <source src="${video}" type="video/mp4">
                            </video>
                            <div class="play-overlay position-absolute top-50 start-50 translate-middle">
                                <span class="text-white fs-2">&#9658;</span>
                            </div>
                        </div>
                    `;
                    col.querySelector('.video-thumbnail').addEventListener('click', () => {
                        document.getElementById('modalVideo').src = video;
                        new bootstrap.Modal(document.getElementById('videoModal')).show();
                    });
                    videoGallery.appendChild(col);
                });
            })
            .catch(err => console.error("Error loading videos:", err));
    };

    // Event listeners for tabs
    photoTab.addEventListener('click', (e) => {
        e.preventDefault();
        showAlbums();
    });

    cinemaTab.addEventListener('click', (e) => {
        e.preventDefault();
        showCinematography();
    });

    // Initial load
    showAlbums();

    // Stop video when modal closes
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
        document.getElementById('modalVideo').pause();
        document.getElementById('modalVideo').src = '';
    });
});
