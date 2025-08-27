/*
  This CSS file contains custom styles for the website.
  It includes general body styling, a custom scrollbar for better aesthetics,
  and keyframes for animations that are not provided by Tailwind.
*/
body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1f2937;
}

/* Smooth scroll for anchor links */
html {
    scroll-behavior: smooth;
}

/* Custom scrollbar for better aesthetics */
::-webkit-scrollbar {
    width: 8px;
    background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

/* Keyframes for simple card hover animation */
.card-hover {
    transition-property: transform, box-shadow;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Keyframes for simple bounce animation on search results */
@keyframes bounce-up {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.result-card {
    animation: bounce-up 0.5s ease-in-out;
}
