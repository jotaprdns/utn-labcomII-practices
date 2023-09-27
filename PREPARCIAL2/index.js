var changeProductImage = function () {

    var selectElement = document.getElementById("change_color");
    var selectedValue = selectElement.value;

    if (selectedValue == "grafito") {
        document.getElementById("div_img_grafito").style.display = "block";
        document.getElementById("div_img_sierra").style.display = "none";
        document.getElementById("div_img_silver").style.display = "none";
        document.getElementById("div_img_gold").style.display = "none";
    } else if (selectedValue == "sierra") {
        document.getElementById("div_img_grafito").style.display = "none";
        document.getElementById("div_img_sierra").style.display = "block";
        document.getElementById("div_img_silver").style.display = "none";
        document.getElementById("div_img_gold").style.display = "none";
    } else if (selectedValue == "silver") {
        document.getElementById("div_img_silver").style.display = "none";
        document.getElementById("div_img_sierra").style.display = "none";
        document.getElementById("div_img_silver").style.display = "block";
        document.getElementById("div_img_gold").style.display = "none";
    } else if (selectedValue == "gold") {
        document.getElementById("div_img_gold").style.display = "none";
        document.getElementById("div_img_sierra").style.display = "none";
        document.getElementById("div_img_silver").style.display = "none";
        document.getElementById("div_img_gold").style.display = "block";
    }

}

var calculatePrice = function () {
    var capacitySelect = document.getElementById("capacity");
    var quantityInput = document.getElementById("quantity");
    var selectedCapacity = capacitySelect.value;
    var selectedColor = document.getElementById("change_color").value;
    var capacityPrices = {
        "128": 150000,
        "256": 165000,
        "512": 180000
    };

    if (capacityPrices[selectedCapacity]) {
        var quantity = parseInt(quantityInput.value);
        if (selectedColor == "grafito" || selectedColor == "sierra" || selectedColor == "silver" || selectedColor == "gold") {
            if (quantity > 0) {
                var totalPrice = capacityPrices[selectedCapacity] * quantity;
                var resultElement = document.getElementById("result");
                resultElement.textContent = "Cotización: $" + totalPrice;
            } else {
                alert("La cantidad debe ser mayor a 0.");
            }
        }else{
            alert("Seleccione un color valido.");
        }


    } else {
        alert("Por favor, seleccione una capacidad y un color válida.");
    }
}