fetch('gallery-loader.php')
    .then(response => response.json())
    .then(data => {
        const photoGallery = document.getElementById('photo-gallery');
        const videoGallery = document.getElementById('video-gallery');

        // Load Photos with Lightbox
        data.photos.forEach(photo => {
            let col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = `
                <a href="${photo}" data-lightbox="photo-set">
                    <img src="${photo}" class="img-fluid rounded shadow" alt="Photo">
                </a>
            `;
            photoGallery.appendChild(col);
        });

        // Load Videos with Modal
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

        // Stop video when modal closes
        document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
            document.getElementById('modalVideo').pause();
            document.getElementById('modalVideo').src = '';
        });
    })
    .catch(err => console.error("Error loading gallery:", err));
