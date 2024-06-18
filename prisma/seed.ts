const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	await prisma.program.deleteMany();

	// Data dummy untuk model Scholar
	const dummyPrograms = [
		{
			title: "Volunteer Pengabdian Masyarakat",

			openDate: new Date("2024-02-04"),

			closeDate: new Date("2024-02-25"),

			category: "Volunteer",

			criteria: "Student",

			image:
				"https://cdn.kibrispdr.org/data/41/contoh-program-kerja-pengabdian-masyarakat-4.jpg",

			link: "https://www.kibrispdr.org/detail-3/contoh-program-kerja-pengabdian-masyarakat.html",

			uploader: "Kibrispdr",

			profil: "https://cdn.kibrispdr.org/aset/images/logo_kibris.webp",

			benefits: "E-Certificate",

			eligibility: "Minimum GPA B",

			about:
				"Kegiatan KKN pemberian materi psikologi yang bertema sekolah, lansia, konseling, dan community development",
		},

		{
			title: "Volunteer WBSK",

			openDate: new Date("2024-03-01"),

			closeDate: new Date("2024-03-20"),

			category: "Volunteer",

			criteria: "General",

			image:
				"https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/02/07/540468224",

			link: "https://semarangku.pikiran-rakyat.com/ekonomi/pr-316224629/lowongan-kerja-volunteer-wsbk-mandalika-2023-resmi-dibuka-ini-alur-pendaftaran-dan-syaratnya",

			uploader: "Semarangku.com",

			profil:
				"https://assets.pikiran-rakyat.com/www/network/mobile/images/ico/31-shareicon.jpg?v=957",

			benefits: "E-Certificate",

			eligibility: "minimal usia 18 tahun, memiliki pemahaman tentang MotoGP",

			about:
				"Kegiatan volunteer MotoGP yang membuka volunteer pada posisi crowd control, steward, waste management, cleaning service, administration, media centre, art director, graphic designer, medical, logistik, race secretary, government relation, hospitality, ticketing, help desk, commercial, Youtuber, videographer, camera person.",
		},

		{
			title: "Volunteer Ramadhan",

			openDate: new Date("2024-03-01"),

			closeDate: new Date("2024-03-10"),

			category: "Volunteer",

			criteria: "General",

			image:
				"https://www.lokerjogja.id/wp-content/uploads/2024/02/Laznas-Yakesma-Banner.jpg",

			link: "https://www.lokerjogja.id/lowongan/volunteer-ramadhan-yakesma-2024-di-laznas-yakesma/",

			uploader: "lokerjogja",
			profil:
				"https://www.lokerjogja.id/wp-content/themes/loker-v2/assets/img/logo/header/loker-jogja.svg",

			benefits: "E-Certificate",

			eligibility: "Muslim, domisili Jogja",

			about: "Event volunteer yang memiliki job bidang fundraising",
		},

		{
			title: "Volunteer Astra Motor Diversity",

			openDate: new Date("2024-05-01"),

			closeDate: new Date("2024-05-15"),

			category: "Volunteer",

			criteria: "General",

			image:
				"https://www.unika.ac.id/wp-content/uploads/2023/10/Lowongan-Kerja-Oktober-2023-Astra-Motor-Volunteer.png",

			link: "https://www.unika.ac.id/lowongan/lowongan-kerja-oktober-2023-astra-motor-volunteer/",

			uploader: "unika",

			profil:
				"https://www.unika.ac.id/wp-content/uploads/2023/02/Logo-Soegijapranata-Catholic-University-SCU-White.png",

			benefits: "E-Certificate",

			eligibility: "Fresh Graduate, berdomisili di semarang",

			about:
				"Event yang dilakukan oleh astra grup yang bertujuan untuk sharing pengetahuan, bermain bersama, dan story telling ke beberapa panti asuhan",
		},
		{
			title: "Marine Conservation - Research Assistant ",

			openDate: new Date("2024-07-01"),

			closeDate: new Date("2024-07-10"),

			category: "Volunteer",

			criteria: "General",

			image:
				" https://image.volunteerworld.com/8950eb6072e4ac0959b0f1a51d37503c5a847c9a/Barefoot-Volunteers-Manta-Ray-Survey.jpg?auto=format&fit=crop&max-h=560&max-w=560",

			link: " https://www.volunteerworld.com/en/volunteer-program/marine-conservation-research-assistant-in-indonesia-raja-ampat-1",

			uploader: "Volunteer World",

			profil:
				"https://id.images.search.yahoo.com/search/images;_ylt=AwrKEbimHGtmCH4JbR_LQwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=volunteer+world&fr2=piv-web&type=E210ID91215G0&fr=mcafee#id=0&iurl=https%3A%2F%2Fwww.eu-startups.com%2Fwp-content%2Fuploads%2Fwpbdm%2F1434121897_0-1013x420.png&action=click",

			benefits: "E-Certificate",

			eligibility: "Minimum age 16, Single",

			about:
				"Conduct Manta Ray research, Reef Check surveys, and assist with community projects as a Barefoot Conservation Research Assistant",
		},
		{
			title: "Phyton Training",

			openDate: new Date("2024-03-01"),

			closeDate: new Date("2024-03-25"),

			category: "Training",

			criteria: "SMP/SMA/Kuliah",

			image:
				"https://tse2.mm.bing.net/th?id=OIP.JdB4BJROixuW02O350cKpAHaD4&pid=Api&P=0&h=180",

			link: "https://www.riset.guru.pubiway.com/python-certification-course-2019-livewire-training-institution/",

			uploader: "Aderlaine Marietha",

			profil:
				"https://tse2.mm.bing.net/th?id=OIP.JdB4BJROixuW02O350cKpAHaD4&pid=Api&P=0&h=180",

			benefits:
				"1. Peserta akan memperoleh keterampilan pemrograman yang kuat dalam bahasa Phyton.\n 2. Peserta akan menerima sertifikat setelah menyelesaikan pelatihan.\n 3.  Peserta akan mendapatkan akses ke berbagai sumber daya pembelajaran seperti e-book, tutorial video.\n",

			eligibility:
				"- Terbuka untuk individu dengan latar belakang pendidikan. Pengalaman sebelumnya dalam pemrograman adalah nilai tambah, namun tidak wajib. - Memiliki pemahaman dasar tentang komputer dan teknologi yang dijadwalkan. - Peserta harus mampu berkomitmen untuk menyelesaikan seluruh sesi pelatihan yang dijadwalkan.",

			about:
				"Phyton Training adalah program pelatihan untuk membantu peserta mempelajari bahasa pemrograman Phyton dari dasar hingga tingkat lanjut. Program ini ditujukan untuk individu yang ingin mengembangkan keterampilan pemrograman mereka untuk aplikasi dalam pengembangan web, analisis data, kecerdasan buatan, dan bidang teknologi lainnya. Melalui pelatihan ini, peserta akan belajar konsep-konsep dasar Phyton, serta penggunaan framework Phyton yang populer.",
		},

		{
			title: "Programming Courses",

			openDate: new Date("2024-05-01"),

			closeDate: new Date("2024-05-15"),

			category: "Training",

			criteria: "SMP/SMA/Kuliah",

			image:
				"https://img.graphicsurf.com/2020/06/Online-programming-training-vector-design.jpg",

			link: "https://graphicsurf.com/item/online-programming-training-vector-design/",

			uploader: "Amali Radifan",

			profil:
				"https://img.graphicsurf.com/2020/06/Online-programming-training-vector-design.jpg",

			benefits:
				"1. Peserta akan mempelajari beberapa bahasa pemrograman, memberikan mereka fleksibilitas dalam berbagai proyek teknologi.\n 2. Meningkatkan peluangan karir diberbagai bidang teknologi seperti pengembangan web, aplikasi mobile, perangkat lunak, dan analisis data.\n 3. Peserta akan menerima sertifikat setelah menyelesaikan kursus.\n 4. Peserta akan mendapatkan akses ke berbagai sumber daya pembelajaran seperti e-book, tutorial video, dan komunitas online.\n",

			eligibility:
				"1. Terbuka untuk individu dengan latar belakang pendidikan.\n 2. Memiliki pemahaman dasar tentang komputer dan teknologi informasi.\n 3. Peserta harus mampu berkomitmen untuk menyelesaikan seluruh sesi kursus yang dijadwalkan.\n",

			about:
				"Programming Courses adalah program pelatihan komprehensif yang dirancang untuk membantu peserta mempelajari berbagai bahasa pemrograman dan konsep pemrograman yang penting. Program ini mencakup kursus dalam bahasa-bahasa pemrograman populer seperti Phyton, Java, C++, JavaScript, dan lainnya. Tujuannya adalah untuk membekali peserta dengan keterampilan yang diperlukan untuk karir dalam bidang teknologi informasi dan pengembangan perangkat lunak",
		},

		{
			title: "Training Enviromental Education",

			openDate: new Date("2024-07-01"),

			closeDate: new Date("2024-07-18"),

			category: "Training",

			criteria: "SMA/Sederajat",

			image:
				"https://tse4.mm.bing.net/th?id=OIP.nr8CQlTkdULF0qgcE0JtoAHaEK&pid=Api&P=0&h=180",

			link: "https://www.infodidaktik.com/2022/02/dibuka-pendaftaran-training-course-eesd.html",

			uploader: "Fikri Alridho",

			profil:
				"https://tse4.mm.bing.net/th?id=OIP.nr8CQlTkdULF0qgcE0JtoAHaEK&pid=Api&P=0&h=180",

			benefits:
				"- Peserta akan memperoleh pemahaman yang lebih baik tentang isu-isul lingkungan global dan lokal. - Peserta akan dilatih dalam teknik mengajar yang efektif untuk berbagai audiens. - Peserta akan menerima sertifikat setelah menyelesaikan pelatihan.",

			eligibility:
				"Terbuka untuk individu dengan latar belakang pendidikan minimal SMA/Sederajat. Pengalaman mengajar atau bekerja dibidang lingkungan adalah nilai tambah, namun tidak wajib. Memiliki minat yang kuat terhadap isu-isu lingkungan dan pendidikan.",

			about:
				"Training Environmental Education adalah program pelatihan yang dirancang untuk meningkatkan pengetahuan dan keterampilan peserta dalam bidang pendidikan lingkungan. Program ini bertujuan untuk membekali peserta dengan pemahaman mendalam tentang isu-isu lingkungan dan cara mengajarkannya kepada berbagai kelompok masyarakat. Melalui pelatihan ini, peserta akan mendapatkan wawasan tentang pentingnya menjaga lingkungan serta teknik dan metode yang efekti",
		},

		{
			title: "English Course Training",

			openDate: new Date("2024-05-01"),

			closeDate: new Date("2024-05-15"),

			category: "Training",

			criteria: "SD/SMP/SMA/Kuliah",

			image: "https://img.pikbest.com/origin/06/46/05/20WpIkbEsTqFt.jpg!w700wp",

			link: "https://pikbest.com/free-templates/english-course-flyer.html",

			uploader: "Fathimah Azzahra",

			profil:
				"https://img.pikbest.com/origin/06/46/05/20WpIkbEsTqFt.jpg!w700wp",

			benefits:
				"1. Peserta akan meningkatkan kemampuan berbicara, mendengarkan, membaca, dan menulis dalam bahasa inggris.\n 2. Peserta akan menerima sertifikat setelah menyelesaikan pelatihan.\n 3. Peserta akan mendapatkan akses ke berbagai sumber daya pembelajaran seperti e-book, tutorial video, dalam interaktif.\n",

			eligibility:
				"1. Terbuka untuk individu dengan latar belakang pendidikan.\n 2. Peserta harus mampu berkomitmen untuk menyelesaikan seluruh sesi pelatihan yang dijadwalkan.\n 3. Memiliki minat yang kuat untuk belajar dan meningkatkan kemampuan berbahasa inggris.\n",

			about:
				"English Course Training adalah program pelatihan bahasa inggris untuk membantu peserta meningkatkan kemampuan berbahasa inggris mereka. Mulai dari dasar hingga tingkat lanjutan. Program ini mencakup berbagai aspek bahasa inggris, termasuk keterampilan berbicara, mendengarkan, membaca dan menulis. Melalui pelatihan ini, peserta akan mendapatkan pemahaman yang lebih baik tentang tata bahasa, kosakata, dan budaya berbahasa inggris, serta kemampuan untuk menggunakan bahasa inggris secara efektif dalam berbagai konteks.",
		},
		{
			title: "English Course Margonda",

			openDate: new Date("2024-08-01"),

			closeDate: new Date("2024-08-25"),

			category: "Training",

			criteria: "SMA/Kuliah",

			image:
				"https://1.bp.blogspot.com/-zZ1xd5f22LM/Xo7MCKLhY7I/AAAAAAAABwQ/k6fe86oIoMIANdVetnFXH8jq2xN8kLFGQCLcBGAsYHQ/s1600/english%2Bcourse%2Blpia.png",

			link: "https://lpiamargondadepokraya.blogspot.com/2020/01/kursus-bahasa-inggris.html",

			uploader: "Haura Dzikratul",

			profil:
				"https://1.bp.blogspot.com/-zZ1xd5f22LM/Xo7MCKLhY7I/AAAAAAAABwQ/k6fe86oIoMIANdVetnFXH8jq2xN8kLFGQCLcBGAsYHQ/s1600/english%2Bcourse%2Blpia.png",

			benefits:
				"1. Peserta akan meningkatkan kemampuan berbicara, mendengarkan, membaca, dan menulis dalam bahasa inggris.\n 2. Peserta akan menerima sertifikat setelah menyelesaikan pelatihan.\n 3. Peserta akan mendapatkan akses ke berbagai sumber daya pembelajaran seperti e-book, tutorial video, dalam interaktif.\n",

			eligibility:
				"1. Terbuka untuk individu dengan latar belakang pendidikan minimal SMA/Sederajat.\n 2. Peserta harus mampu berkomitmen untuk menyelesaikan seluruh sesi pelatihan yang dijadwalkan.\n 3. Memiliki minat yang kuat untuk belajar dan meningkatkan kemampuan berbahasa Inggris.\n",

			about:
				"English Course Margonda adalah program pelatihan bahasa inggris yang diselenggarakan daerah Margonda, Depok. Program ini untuk membantu peserta dari berbagai latar belakang meningkatkan kemampuan berbahasa inggris mereka. Dengan instruktur yang berpengalaman dan metode pembelajaran yang interaktif, peserta akan mendapatkan pemahaman yang lebih mendalam tentang bahasa inggris serta kemampuan untuk menggunakan dengan percaya diri dalam berbagai situasi.",
		},
		{
			title: "Scholarship Cendikia Baznas",

			openDate: new Date("2024-04-10"),

			closeDate: new Date("2024-04-30"),

			category: "Scholarship",

			criteria: "Diploma IV and Bachelor students",

			image: "https://beasiswa.baznas.go.id/images/lbb-program/1666845130.jpeg",

			link: "https://beasiswa.baznas.go.id/program-beasiswa",

			uploader: "Lembaga Beasiswa BAZNAZ",

			profil:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBwj2sm6n4Vl1QDLeCQTiANxHkb1_ouJcFw&s",

			benefits:
				"1. Subsidi Uang Kuliah Tunggal (UKT) hingga 2.700.000 (dua juta tujuh ratus ribu rupiah) per semester \n2. Pengembangan diri:\n(a) bersama mentor kampus\n(b). bersama tokoh nasional per 3 bulan oleh BAZNAS.",

			eligibility:
				"1. Mahasiswa S1/D4 semester 5 program reguler di kampus mitra BAZNAS \n2. IPK minimal 3,00 (skala 4,00)",

			about:
				"BCB PTDN adalah program beasiswa pendidikan tinggi bagi para mahasiswa tingkat Diploma-IV (D4) atau sarjana (S1) yang sedang menempuh studi (on going) di kampus mitra Beasiswa BAZNAS.",
		},

		{
			title: "Scholarship Bestari",

			openDate: new Date("2024-08-01"),

			closeDate: new Date("2024-08-20"),

			category: " Scholarship ",

			criteria: " D3/D4/S1",

			image:
				"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip5oRPZrAvCfo2LyosXp2TIiGCfHnM_9OHowMVPmJt2yGdOeEr_agqVvgtjGN5k9fcayMdr0nu1-c_uli5o3A7FAukx7Z79dzelvcKPQu5YDDlvRJpt_IKqhIMpz7vd07IN1KnJgVd3uErvcb8xGvpveAsglISZXavyirwL32w_cH_u5CVusW1Fmy3/s1357/Beasiswa%20Bestari.jpg",

			link: "https://www.go-sinarbulan.com/2023/05/pendaftaran-beasiswa-bestari-untuk-anak.html?m=1",

			uploader: "IND Beasiswa",

			profil:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvVCXPvmlmThgWl4xg0Xc0-2km8CS5eB70Q&s",

			benefits:
				"Penerima Beasiswa akan mendapatkan bantuan pendidikan dengan batas nominal maksimal Rp 10.000.000,- (sepuluh juta rupiah) di setiap semesternya.",

			eligibility:
				"Warga Negara Indonesia \nPerempuan dengan usia antara 17 s.d 25 thn \nSiswi SMA/SMK/Sederajat Kelas 3 atau maks 2 thn dari kelulusan dengan nilai rapor rata-rata minimal 80 \nMahasiswi di perguruan tinggi setempat maks Semstr 2 dengan IPK min 3.00",

			about:
				"Beasiswa BESTARI adalah Beasiswa Untuk Perempuan Indonesia yang merupakan program kerjasama KemenPPPA, Yayasan Khouw Kalbe dan UNFPA yang bertujuan untuk menciptakan generasi perempuan yang teladan dan unggul untuk dapat menyuarakan hak-hak perempuan serta komunitasnya sebagai upaya dalam pencegahan perkawinan anak. Program ini dikhususkan untuk perempuan yang ingin melanjutkan pendidikan tinggi ke jenjang D3/D4/S1.",
		},

		{
			title: "Scholarship EKLES",

			openDate: new Date("2024-04-01"),

			closeDate: new Date("2024-04-10"),

			category: " Scholarship ",

			criteria: "SMA, SMK, MA, D3-S1",

			image:
				"https://assets-e.promediateknologi.id/photo/2023/04/14/Beasiswa-Ekles-1-3462727616.jpg",

			link: "https://www.dewantaranews.com/topik-khusus/detail/9747/program-beasiswa",

			uploader: "Dewantara News",

			profil:
				"https://static.promediateknologi.id/promedia/network/899/desktop/images/logo.png?v=1016",

			benefits:
				"1. Dana Beasiswa Entrepreneur \n2. Paket modal produk usaha hingga Rp 1.000.000 \n3. E-Certificate Awardee \n4. 6x Online Class dengan tokoh Entrepreneur inspiratif",

			eligibility:
				"Anda harus WNI dan merupakan pelajar SMA/SMK/MA kelas XII, D3-S1, atau seorang Ibu.",

			about:
				"Beasiswa Ekles merupakan program unggulan Yayasan I am Preneur Indonesia Terpadu yang mendukung peningkatan kualitas SDM, khususnya dalam hal meningkatkan jiwa entrepreneur. Program ini ditujukan untuk anak muda dan para Ibu di Indonesia agar dapat menjadi sosok entrepreneur inspiratif.",
		},

		{
			title: "Scholarship LPDP",

			openDate: new Date("2024-05-01"),

			closeDate: new Date("2024-05-15"),

			category: " Scholarship ",

			criteria: "S2",

			image:
				"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWC1U4Abjfn_M0VCo6rIPGfFmV7HAVlEtL2vw5MuzNtJf4nYKPQQOQIbbyDFPib9BcSONq11aXCCXZf15oW725tPjUXC8eDMnq8akXeXHN1rhWEZCLPte2GMkKNYgJk8qAxPCRBjB9QQd7cnwhLIVGfggBJhNp-aeF5yC0GcGlujUAmHJWuLCh_wHTLQ/s3938/Panduan%20Beasiswa%20LPDP.jpg",

			link: "https://www.idbeasiswa.id/2022/02/beasiswa-lpdp-2022-terbaru-syarat-dan.html",

			uploader: "IND Beasiswa",

			profil:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvVCXPvmlmThgWl4xg0Xc0-2km8CS5eB70Q&s",

			benefits:
				"1. WNI (Warga Negara Indonesia) \n2. Telah dinyatakan lulus atau sudah menyelesaikan studi program sarjana (S1) atupun diploma empat (D4) untuk beasiswa magister (S2) atupun beasiswa doktor yang telah dinyatakan lulus magister (S2) dengan ketentuan sebagai berikut: \na. Perguruan Tinggi Kedinasan (PTK) di dalam negeri, atau \nb. Perguruan tinggi yang telah diakui oleh Direktorat Jendral Pendidikan Tinggi Kemendikbud RI (Kementerian Pendidikan dan Kebudayaan Republik Indonesia) atau Kedutaan Besar RI (Republik Indonesia) di negara asal perguruan tinggi.",

			eligibility:
				"calon pendaftar bisa menyiapkan sejumlah syarat-syarat seperti ijazah S1 sebelumnya, transkip nilai, dan juga sertifikat bahasa Inggris.",

			about:
				"Lembaga Pengelolaan Dana Pendidikan (LPDP)  membuka pendaftaran beasiswa setiap tahunnya bagi mereka yang ingin melanjutkan studi magister atau S2.",
		},
		{
			title: "Scholarship Bank Indonesia",

			openDate: new Date("2024-07-01"),

			closeDate: new Date("2024-07-10"),

			category: " Scholarship ",

			criteria: "SMA/Diploma/S1",

			image:
				"https://statik.unesa.ac.id/profileunesa_konten_statik/uploads/fish/thumbnail/2b8f6e8f-ddba-478b-ae4a-4b5622bec308.jpg",

			link: "https://fish.unesa.ac.id/post/pengumuman-dan-pendaftaran-program-beasiswa-bank-indonesia-tahun-2023",

			uploader: "IND Beasiswa",

			profil:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvVCXPvmlmThgWl4xg0Xc0-2km8CS5eB70Q&s",

			benefits:
				"Tunjangan biaya kuliah dan juga uang sebesar Rp1 juta per bulan.",

			eligibility:
				"1. Berstatus sebagai mahasiswa aktif \n2. Sudah menyelesaikan minimal 40 SKS atau 3 semester bagi mahasiswa S1 \n 3. Sudah menyelesaikan minimal 24 SKS bagi mahasiswa D3 \n4. Tidak sedang menerima beasiswa atau berada dalam status ikatan dinas dengan lembaga lain",

			about:
				"beasiswa Bank Indonesia adalah program yang bertujuan untuk memberi bantuan keuangan bagi mahasiswa berprestasi yang tersebar di beberapa perguruan tinggi di Indonesia.",
		},
	];

	for (const program of dummyPrograms) {
		await prisma.program.create({
			data: program,
		});
	}

	console.log("Dummy data for Program created!");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
