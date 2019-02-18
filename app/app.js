$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

ke_atas = function(){
	$('html, body').animate({
		scrollTop: 0
	}, 700)
}

grafik = function(){
	data_grafik = JSON.parse(localStorage.getItem('jumlah-halaman')).reverse()
	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ["", "", "", "", "", ""],
	        datasets: [{
	            label: 'Jumlah Halaman',
	            // data: [12, 19, 3, 5, 2, 3],
	            data: [
	            	data_grafik[5],
	            	data_grafik[4],
	            	data_grafik[3],
	            	data_grafik[2],
	            	data_grafik[1],
	            	data_grafik[0]
	            ],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }]
	        }
	    }
	});

	if (data_grafik[0] != null){
		$('.angka').html(Math.max(...data_grafik.map(Number)))
	}
}

if (localStorage.getItem('jumlah-halaman') === null){
	localStorage.setItem('jumlah-halaman', '[]')
}

$('.nama').val(localStorage.getItem('nama'))
$('.judul-buku').val(localStorage.getItem('judul-buku'))
$('.genre').val(localStorage.getItem('genre'))
$('.premis').val(localStorage.getItem('premis'))
grafik()

$('.kirim').click(function(){
	localStorage.setItem('nama', $('.nama').val())
	localStorage.setItem('judul-buku', $('.judul-buku').val())
	localStorage.setItem('genre', $('.genre').val())
	localStorage.setItem('premis', $('.premis').val())
	data_jumlah_halaman = JSON.parse(localStorage.getItem('jumlah-halaman'))
	data_jumlah_halaman.push($('.jumlah-halaman').val())
	localStorage.setItem('jumlah-halaman', JSON.stringify(data_jumlah_halaman))
	ke_atas()
	grafik()
	// location.reload()
	kirim_nama = $('.nama').val().replace(/ /g, '+')
	kirim_judul_buku = $('.judul-buku').val().replace(/ /g, '+')
	kirim_genre = $('.genre').val().replace(/ /g, '+')
	kirim_premis = $('.premis').val().replace(/ /g, '+')
	kirim_jumlah_halaman = $('.jumlah-halaman').val().replace(/ /g, '+')
	location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeybQuZ_-aldTdw3FwwhAIuNc_rj9kGn1V0cOTwSMhwyFbeRg/viewform?usp=pp_url&entry.1254118809=' + kirim_nama + '&entry.1071710605=' + kirim_judul_buku + '&entry.1653769640=' + kirim_genre + '&entry.46621118=' + kirim_premis + '&entry.816932494=' + kirim_jumlah_halaman
})

// autocomplete(document.getElementById("myInput"), countries);
autocomplete(document.getElementById('nama'), nama)
autocomplete(document.getElementById('genre'), genre)