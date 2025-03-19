document.addEventListener('DOMContentLoaded', function () {
  const flashMessages = [
    'flash-message-success',
    'flash-message-error',
    'flash-message-info',
    'flash-message-warning',
  ]

  flashMessages.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      // Set a timeout to remove the element after a few minutes (e.g., 3 minutes = 180000 milliseconds)
      setTimeout(() => {
        element.remove() // Or element.style.display = 'none'; to hide instead of remove
      }, 4000) // Adjust the time in milliseconds as needed
    }
  })
})
