document.getElementById('compra').addEventListener('click', function() {
    var form = document.getElementById('myForm');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});
document.getElementById('compra1').addEventListener('click', function() {
    var form = document.getElementById('myForm1');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});
document.getElementById('compra2').addEventListener('click', function() {
    var form = document.getElementById('myForm2');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});
document.getElementById('compra3').addEventListener('click', function() {
    var form = document.getElementById('myForm3');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('successMessage').style.display = 'block'; 
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none'; 
        document.getElementById('myForm').reset(); 
        document.getElementById('myForm').style.display = 'none'; 
    }, 3000);
});
document.getElementById('myForm1').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('successMessage1').style.display = 'block'; 
    setTimeout(function() {
        document.getElementById('successMessage1').style.display = 'none'; 
        document.getElementById('myForm1').reset(); 
        document.getElementById('myForm1').style.display = 'none'; 
    }, 3000);
});
document.getElementById('myForm2').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('successMessage2').style.display = 'block'; 
    setTimeout(function() {
        document.getElementById('successMessage2').style.display = 'none'; 
        document.getElementById('myForm2').reset(); 
        document.getElementById('myForm2').style.display = 'none'; 
    }, 3000);
});
document.getElementById('myForm3').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('successMessage3').style.display = 'block'; 
    setTimeout(function() {
        document.getElementById('successMessage3').style.display = 'none'; 
        document.getElementById('myForm3').reset(); 
        document.getElementById('myForm3').style.display = 'none'; 
    }, 3000);
});