$(document).ready(function() {
    // Array of image sources
    const images = [
        'pet_rock.jpg',   // Ensure this is a valid image path
        'pet_rock2.webp', // Ensure this is a valid image path
        'pet_rock3.jpg',  // Ensure this is a valid image path
        'pet_rock4.jpg',  // Ensure this is a valid image path
        'pet_rock5.jpg'   // Ensure this is a valid image path
    ];

    let currentIndex = 0; // Track the current image index

    $('#changeImage').click(function() {
        // Increment the index to get the next image
        currentIndex = (currentIndex + 1) % images.length; // Wrap around to the first image

        // Change the image source
        $('#rockImage').attr('src', images[currentIndex]);

        // Optional: Log the current image to the console for debugging
        console.log("Current image source: " + images[currentIndex]);
    });

    // Check if images load correctly
    $('#rockImage').on('error', function() {
        console.error('Error loading image:', $(this).attr('src'));
        alert('Image failed to load: ' + $(this).attr('src'));
    });

    // Respond to messages
    $('#talk-button').click(function() {
        const message = $('#message').val();
        const response = $('#response');

        // Check the message and provide a response
        if (message.toLowerCase().includes('hello')) {
            response.text('Your rock nods in acknowledgment.');
        } else if (message.toLowerCase().includes('how are you')) {
            response.text('Your rock remains silent, but looks content.');
        } else if (message.trim() === '') {
            response.text('Your rock stares at you blankly.');
        } else {
            response.text(`Your rock seems confused by: "${message}".`);
        }
    });
});
const activities = {
    happy: [
        "rolling down a hill",
        "playing catch with a pebble",
        "sunbathing on a warm rock",
        "hanging out with other happy rocks"
    ],
    sad: [
        "sitting alone in a corner",
        "watching the rain",
        "thinking about the good old days",
        "listening to soft music"
    ],
    angry: [
        "yelling at the clouds",
        "rolling away from annoying stones",
        "cracking open a nut",
        "hiding under a bush"
    ],
    neutral: [
        "just hanging out",
        "watching the world go by",
        "taking a nap",
        "sitting quietly"
    ]
};

// Respond to a question about activities
document.getElementById('activity-button').addEventListener('click', function() {
    const currentMood = document.getElementById('mood-selector').value;
    const activity = activities[currentMood][Math.floor(Math.random() * activities[currentMood].length)];
    document.getElementById('response').textContent = `Your rock loves ${activity}.`;
});
let journalEntries = [];

// Function to log an entry in the rock's journal
function logJournalEntry(message, mood) {
    const entry = `${new Date().toLocaleString()}: You said "${message}" and the rock was feeling "${mood}".`;
    journalEntries.push(entry);
    updateJournalDisplay();
}

// Function to update the journal display
function updateJournalDisplay() {
    const journalDisplay = document.getElementById('journal');
    journalDisplay.innerHTML = ""; // Clear previous entries
    journalEntries.forEach(entry => {
        const p = document.createElement('p');
        p.textContent = entry;
        journalDisplay.appendChild(p);
    });
}

// Update the existing message handling to log entries
document.getElementById('talk-button').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    const mood = document.getElementById('mood-selector').value;
    
    // Existing response logic...
    // (Add your existing response logic here)

    logJournalEntry(message, mood); // Log the journal entry
});