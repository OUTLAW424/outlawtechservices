document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;

  const li = document.createElement('li');
  li.innerHTML = `<strong>${name}</strong> (${contact || 'No contact'}) - Rating: ${rating}⭐<br>${comment} 
    <button onclick="editReview(this)">Edit</button> 
    <button onclick="deleteReview(this)">Delete</button>`;
  
  document.getElementById('reviewList').appendChild(li);
  document.getElementById('reviewForm').reset();
});

function editReview(btn) {
  const li = btn.parentElement;
  const text = li.innerText.split(' - Rating: ')[0];
  const parts = text.split(' (');
  document.getElementById('name').value = parts[0];
  document.getElementById('comment').value = li.innerText.split('⭐\n')[1] || '';
  li.remove();
}

function deleteReview(btn) {
  btn.parentElement.remove();
}