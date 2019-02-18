$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

$('.nama').val(localStorage.getItem('nama'))
$('.judul-buku').val(localStorage.getItem('judul-buku'))
$('.genre').val(localStorage.getItem('genre'))
$('.premis').val(localStorage.getItem('premis'))

$('.kirim').click(function(){
	localStorage.setItem('nama', $('.nama').val())
	localStorage.setItem('judul-buku', $('.judul-buku').val())
	localStorage.setItem('genre', $('.genre').val())
	localStorage.setItem('premis', $('.premis').val())

	swal('Selesai')
})

// autocomplete(document.getElementById("myInput"), countries);
autocomplete(document.getElementById('nama'), nama)
autocomplete(document.getElementById('genre'), genre)