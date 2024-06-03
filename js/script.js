document.addEventListener('DOMContentLoaded', function () {
  const homeTab = document.getElementById('home-tab');
  const galleryTab = document.getElementById('gallery-tab');
  const aboutTab = document.getElementById('about-tab');
  const content = document.getElementById('content');

  loadHome();

  homeTab.addEventListener('click', function () {
    loadHome();
  });

  galleryTab.addEventListener('click', function () {
    loadGallery();
  });

  aboutTab.addEventListener('click', function () {
    loadAbout();
  });

  function loadHome() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        content.innerHTML = `
              <h1>Users</h1><br>
              <ul class="list-group">
                ${data.map(user => `
                  <li class="list-group-item" style="background-color: #B7B597; color: #254336;">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="d-flex align-items-center">
                        <img src="images/profile.webp" alt="${user.name}" class="img-thumbnail mr-3" style="width: 70px; height: 70px; border-radius: 50%;">
                        <div>
                          <h4 class="mb-1">${user.name}</h4>
                          <p class="mb-0"><strong>Email:</strong> ${user.email}</p>
                        </div>
                      </div>
                      <button class="btn" type="button" data-toggle="collapse" data-target="#user-${user.id}" aria-expanded="false" aria-controls="user-${user.id}" style="background-color: #254336; color: #DAD3BE;">
                        More Info
                      </button>
                    </div>
                    <div class="collapse" id="user-${user.id}">
                      <div class="card card-body mt-3">
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                        <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                        <p><strong>Geo:</strong> Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}</p>
                        <p><strong>Company:</strong> ${user.company.name}</p>
                        <p><strong>Catch Phrase:</strong> ${user.company.catchPhrase}</p>
                        <p><strong>Business:</strong> ${user.company.bs}</p>
                      </div>
                    </div>
                  </li>
                `).join('')}
              </ul>
            `;
      });
  }


  function loadGallery() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        content.innerHTML = `
            <h1>Gallery</h1><br>
            <div class="row">
              ${data.slice(0, 20).map(photo => `
                <div class="col-md-3">
                  <div class="card mb-4">
                    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                    <div class="card-body" style="color: #DAD3BE;">
                      <h5 class="card-title">${photo.title}</h5>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
      });
  }

  function loadAbout() {
    content.innerHTML = `
        <h1>About</h1><br>
        <div class="profile-container">
        <div class="profile_card">
        <div class="user_img">
            <img src="images/dp.jpg" height="100" width="100" alt="">
        </div>
        <div class="user_details">
            <h5>Marc Louis Bruto</h5>
            <span>LSPU BSINFO student</span>
            <p>Third Year - Web and Mobile Application Development Major</p>
            
        </div>
      </div>
    </div>
    <br><br><br>
    <h6 style="text-align: center; color: #DAD3BE">References: Profile Card - Piyush Patil <br> JSON Data: https://jsonplaceholder.typicode.com</h6>
      `;
  }
});
