<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ambient Portraiture - Gallery</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.html">Ambient Portraiture</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="services.html">Our Services</a></li>
                    <li class="nav-item"><a class="nav-link active" href="gallery.html">Gallery</a></li>
                    <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    <li class="nav-item ms-lg-3">
                        <a class="btn btn-tan rounded-pill px-4 py-2" href="contact.html">GET IN TOUCH</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Gallery Header Section -->
    <section class="gallery-header-section text-center py-5">
        <div class="container" data-aos="fade-up">
            <p class="text-muted-sub">ALBUM COLLECTION</p>
            <h2 class="display-5 fw-bold">OUR CREATIVITY IN PICTURES. We make memories that last a lifetime.</h2>
            <div class="row justify-content-center mt-4">
                <div class="col-md-6">
                    <div class="input-group">
                        <input type="text" class="form-control rounded-pill" placeholder="Search...">
                        <span class="input-group-text bg-transparent border-0"><i class="fas fa-search"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Tabs Section -->
    <section class="gallery-categories-section py-3 bg-light-brown">
        <div class="container">
            <ul class="nav nav-pills justify-content-center" id="galleryTabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="photo-tab" data-bs-toggle="tab" href="#photo-content" role="tab">Photo Gallery</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="cinema-tab" data-bs-toggle="tab" href="#cinema-content" role="tab">Cinematography</a>
                </li>
            </ul>
        </div>
    </section>

    <!-- Gallery Content Section -->
    <section class="gallery-content-section py-5">
        <div class="container">
            <div class="tab-content mt-4" id="galleryTabContent">
                <!-- Photo Gallery Tab Content -->
                <div class="tab-pane fade show active" id="photo-content" role="tabpanel">
                    <div id="album-gallery" class="row g-3" data-aos="fade-up"></div>
                    <div id="photo-gallery" class="row g-3" data-aos="fade-up" style="display:none;"></div>
                </div>
                <!-- Cinematography Tab Content -->
                <div class="tab-pane fade" id="cinema-content" role="tabpanel">
                    <div id="album-gallery-video" class="row g-3" data-aos="fade-up"></div>
                    <div id="video-gallery" class="row g-3" data-aos="fade-up" style="display:none;"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Video Modal -->
    <div class="modal fade" id="videoModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content bg-dark">
                <div class="modal-body p-0">
                    <video id="modalVideo" controls autoplay class="w-100"></video>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white pt-5 pb-3">
        <div class="container">
            <div class="row text-center mb-4">
                <div class="col-md-4">
                    <h5 class="fw-bold">Mobile</h5>
                    <p><a href="tel:+947576969143" class="text-white text-decoration-none">7576 969143</a></p>
                </div>
                <div class="col-md-4">
                    <div class="footer-logo mb-3">
                        <img src="assets/img/logo/LOGO 1.png" alt="Ambient Portraiture Logo" class="img-fluid logo-footer">
                    </div>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/ambient_portraiture.uk/" class="social-icon-btn d-inline-block p-2 rounded-1 me-2"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/Ambient.Portraiture.co" class="social-icon-btn d-inline-block p-2 rounded-1 me-2"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon-btn d-inline-block p-2 rounded-1 me-2"><i class="fab fa-tiktok"></i></a>
                        <a href="#" class="social-icon-btn d-inline-block p-2 rounded-1"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-md-4">
                    <h5 class="fw-bold">Email</h5>
                    <p><a href="mailto:ambientportaiture.co@gmail.com" class="text-white text-decoration-none">ambientportaiture.co@gmail.com</a></p>
                </div>
            </div>
            <hr class="text-white-50">
            <div class="row text-center mt-3">
                <div class="col-12">
                    <ul class="list-inline footer-nav">
                        <li class="list-inline-item"><a href="index.html" class="text-white text-decoration-none mx-2">HOME</a></li>
                        <li class="list-inline-item"><a href="about.html" class="text-white text-decoration-none mx-2">ABOUT</a></li>
                        <li class="list-inline-item"><a href="services.html" class="text-white text-decoration-none mx-2">OUR SERVICES</a></li>
                        <li class="list-inline-item"><a href="gallery.html" class="text-white text-decoration-none mx-2">Gallery</a></li>
                        <li class="list-inline-item"><a href="contact.html" class="text-white text-decoration-none mx-2">CONTACT US</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="text-center py-4">
            <p>&copy; 2025 Ambient Portraiture. All rights reserved.</p>
        </div>
    </footer>

    <a href="https://wa.me/947576969143" class="whatsapp-float" target="_blank">
        <i class="fab fa-whatsapp my-float"></i>
    </a>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"></script>
    <script>
      AOS.init();
      // Ensure lightbox is initialized after the document is fully loaded
      document.addEventListener('DOMContentLoaded', (event) => {
          if (typeof lightbox !== 'undefined') {
              lightbox.init();
          }
      });
    </script>
    <script src="js/gallery-loader.js"></script>
</body>
</html>
