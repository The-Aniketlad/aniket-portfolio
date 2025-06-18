const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const response = await fetch('https://formspree.io/f/mzzggvvz', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Something went wrong!");
  }
});
