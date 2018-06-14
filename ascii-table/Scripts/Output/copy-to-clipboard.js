function clipboardCopy() {
    var $asciiCardElement = $('.ascii-char-code-card');
    var asciiCharValueElement = '.ascii-char-value';
    $asciiCardElement.on('click', function () {
        var asciiCharValueElementText = $(this).children(asciiCharValueElement).text();
        var hiddenInputElement = document.createElement("input");
        hiddenInputElement.setAttribute('value', asciiCharValueElementText);
        document.body.appendChild(hiddenInputElement);
        hiddenInputElement.select();
        document.execCommand('copy');
        hiddenInputElement.remove();
    });
}
function showCopiedPopover() {
    var $popoverElement = $('.ascii-char-code-card');
    var $popoverInit = $('[data-toggle="popover"]');
    $popoverInit.popover();
    $popoverElement.on('click', function () {
        var that = $(this);
        that.popover();
        setTimeout(function () {
            that.popover('hide');
        }, 1500);
    });
}
