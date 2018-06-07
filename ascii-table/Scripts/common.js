function deleteAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function createElement(tagName, classList) {
    let element = document.createElement(tagName)

    if (classList) {
        for (var i = 0; i < classList.length; i++) {
            element.classList.add(classList[i]);
        }
    }

    return element;
}