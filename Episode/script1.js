var viewsCount = 3100;
var likesCount = 1300;
var liked = false; // state to track whether the video is liked

// Function to format views count
function formatViews(viewCount) {
  if (viewCount < 1000) {
    return viewCount; // return the exact number if below 1000
  }
  if (viewCount < 1000000) {
    return (viewCount / 1000).toFixed(1) + 'k'; // convert to 'k' for thousands
  }
  return '1M+'; // use '1M+' as a placeholder for 1 million views or more
}

// Function to format likes count
function formatLikes(likesCount) {
  if (likesCount < 1000) {
    return likesCount; // return the exact number if below 1000
  }
  return (likesCount / 1000).toFixed(1) + 'k'; // convert to 'k' for thousands
}

// Update view counter on page load
window.onload = function() {
  viewsCount++;
  document.getElementById('viewCounter').innerText = 'Views: ' + formatViews(viewsCount);
};

// Toggle like button text and icon
document.getElementById('likeBtn').addEventListener('click', function() {
  var icon = this.querySelector('i');
  var buttonText = this.querySelector('span'); // Assuming there is a span for the text
  if (!liked) {
    likesCount++; // Increment likes count if not already liked
    icon.className = 'fa-solid fa-thumbs-up';
    icon.style.color = '#1E76FF'; // Set the color to blue after click
    buttonText.textContent = ' Liked'; // Update the button text to 'Liked'
    liked = true;
  } else {
    likesCount--; // Decrement likes count if already liked
    icon.className = 'fa-regular fa-thumbs-up fa-beat';
    icon.style.color = '#1E76FF'; // Reset the color after unliking
    buttonText.textContent = ' Like'; // Update the button text to 'Like'
    liked = false;
  }
  // Update the like counter text
  document.getElementById('likeCounter').innerText = 'Likes: ' + formatLikes(likesCount);
  document.getElementById('likeCounter').style.display = 'block'; // Show like counter
});



// playlist
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effect to video thumbnails
  const videos = document.querySelectorAll('.video');
  videos.forEach(function(video) {
    video.addEventListener('mouseenter', function() {
      this.style.opacity = '0.7';
    });
    video.addEventListener('mouseleave', function() {
      this.style.opacity = '1';
    });
  });

  // Dynamically load video descriptions
  videos.forEach(function(video) {
    video.addEventListener('click', function() {
      const videoTitle = this.querySelector('h3').textContent;
      fetch('path-to-description/' + videoTitle + '.txt')
        .then(response => response.text())
        .then(description => {
          this.querySelector('p').textContent = description;
        })
        .catch(error => console.error('Error loading description:', error));
    });
  });
});
// JavaScript for play.js

// Function to create the modal and append it to the body
function createModal(content) {
  // Create the modal container
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '1000';

  // Create the modal content box
  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fff';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '5px';
  modalContent.style.textAlign = 'center';
  modalContent.innerHTML = content;

  // Append modal content to modal container
  modal.appendChild(modalContent);

  // Function to close the modal
  modal.addEventListener('click', function() {
    document.body.removeChild(modal);
  });

  // Append the modal to the body
  document.body.appendChild(modal);
}

// Add click event listener to all video elements
document.querySelectorAll('.video').forEach(function(video) {
  video.addEventListener('click', function() {
    const videoTitle = this.querySelector('h3').textContent;
    createModal('<h1>' + videoTitle + '</h1><p>Please Wait 10s...</p><p>If it not playing, Try again...</p><a href="https://www.facebook.com/doraemonworld23" target="_blank" style="color: blue; text-decoration: none;"><img src="img/mr-dw2.0copy.png" alt="logo" style="display: block;margin: 0 auto;">Follow Us On Facebook</a>  <button style="background-color: #007bff; color: white; border-radius: 10px; padding: 7px 12px; margin-top: 10px; cursor: pointer;">Ok</button>');
  });
});




// pop up
const openPopupButton = document.getElementById('openPopup');
const closePopupButton = document.getElementById('closePopup');
const popupOverlay = document.getElementById('popupOverlay');

openPopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});
