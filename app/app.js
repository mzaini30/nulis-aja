$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

if (localStorage.getItem('jumlah-halaman') === null){
	localStorage.setItem('jumlah-halaman', '[]')
}

$('.nama').val(localStorage.getItem('nama'))
$('.judul-buku').val(localStorage.getItem('judul-buku'))
$('.genre').val(localStorage.getItem('genre'))
$('.premis').val(localStorage.getItem('premis'))

$('.kirim').click(function(){
	localStorage.setItem('nama', $('.nama').val())
	localStorage.setItem('judul-buku', $('.judul-buku').val())
	localStorage.setItem('genre', $('.genre').val())
	localStorage.setItem('premis', $('.premis').val())
	data_jumlah_halaman = JSON.parse(localStorage.getItem('jumlah-halaman'))
	data_jumlah_halaman.push($('.jumlah-halaman').val())
	localStorage.setItem('jumlah-halaman', JSON.stringify(data_jumlah_halaman))
	// location.reload()
})

// autocomplete(document.getElementById("myInput"), countries);
autocomplete(document.getElementById('nama'), nama)
autocomplete(document.getElementById('genre'), genre)