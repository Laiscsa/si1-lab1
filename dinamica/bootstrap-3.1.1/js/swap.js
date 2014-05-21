function swapSelectOptions(selectFrom,selectTo,swapAll) { 
    if (typeof(selectFrom) == "string") {
        availableitems = document.getElementById(selectFrom); 
    }
    if (typeof(selectTo) == "string") { 
        selecteditems= document.getElementById(selectTo); 
    } 
    for (var i = 0; i < availableitems.length; i++) { 
        if (availableitems.options[i].selected || swapAll) { 
            selecteditems.options[selecteditems.options.length] = new Option(availableitems.options[i].text);
            selecteditems.options[selecteditems.options.length-1].value = availableitems.options[i].value;
            availableitems.options[i].selected = false; availableitems.options[i] = null; i--;
        }
    }
}
