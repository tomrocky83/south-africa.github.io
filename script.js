$(document).ready(function() {
    $('#bloe').on('click', citypic);

    function citypic() {
        $('.bloe').show();
    }

    $('#cape').on('click', citypic1);

    function citypic1() {
        $('.cape').show();
    }

    $('#pre').on('click', citypic2);

    function citypic2() {
        $('.pre').show();
    }
});