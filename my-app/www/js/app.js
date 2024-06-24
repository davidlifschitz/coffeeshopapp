document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    const order = {
        location,
        item,
        quantity
    };
    localStorage.setItem('order', JSON.stringify(order));
    displayConfirmation();
});

document.getElementById('new-order').addEventListener('click', function() {
    resetForm();
});

function displayConfirmation() {
    document.getElementById('order-details').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
}

function resetForm() {
    document.getElementById('order-details').classList.remove('hidden');
    document.getElementById('confirmation').classList.add('hidden');
    document.getElementById('order-form').reset();
}
