const onClickButton = () => {
    const dropdownbutton = document.getElementById('dropdown_button');
    const lists = document.getElementById('lists');
    document.addEventListener('click', function(event) {
        const clickInside = dropdownbutton && dropdownbutton.contains(event.target);
        if (!clickInside) {
            if (lists && lists.style && lists.style.display == 'block') {
                lists.style.display = 'none';
            }
        }
        else {
            if (lists && lists.style && lists.style.display !== 'block') {
                lists.style.display = 'block';
    
            }
            else if (lists && lists.style && lists.style.display == 'block') {
                lists.style.display = 'none';
            }

        }
    });
    selectFromLists();

}

const selectFromLists = () => {
    const listOptions = document.querySelectorAll('.lists li');
    const dropdownButton = document.getElementById("dropdown_button");
    listOptions && listOptions.forEach((itemList) => {
        itemList && itemList.addEventListener('click', function () {
            if (dropdownButton && itemList) {
                dropdownButton.textContent = itemList.textContent;
            }
        })
    })


}

document.addEventListener("DOMContentLoaded", function () {
    onClickButton();
});