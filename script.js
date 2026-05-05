function show(id) {
    document.querySelectorAll('.page').forEach(function(p) {
        p.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}