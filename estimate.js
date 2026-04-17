function calculateTotal() {
    let total = parseFloat(document.getElementById("room").value);

    let boxes = document.querySelectorAll("input[type='checkbox']");
    
    boxes.forEach(box => {
        if (box.checked) {
            total += parseFloat(box.value);
        }
    });

    document.getElementById("totalCost").textContent = "Total: $" + total;
}