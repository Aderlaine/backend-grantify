const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	await prisma.program.deleteMany();
	await prisma.user.deleteMany();

	// Data dummy untuk model User
	const dummyUsers = [
		{
			username: "john_doe",
			email: "john.doe@example.com",
			password: "password123",
			company: "Acme Inc.",
			experience: "5 years",
		},
		{
			username: "jane_smith",
			email: "jane.smith@example.com",
			password: "password456",
			company: "Globex Corp",
			experience: "2 years",
		},
	];

	for (const user of dummyUsers) {
		await prisma.user.create({
			data: user,
		});
	}

	console.log("Dummy data for User created!");

	// Data dummy untuk model Scholar
	const dummyPrograms = [
		{
			title: "Scholarship Cendikia Baznas",
			openDate: new Date("2024-04-10"),
			closeDate: new Date("2024-04-30"),
			category: "University",
			criteria: "Diploma IV and Bachelor students",
			image: "https://beasiswa.baznas.go.id/images/lbb-program/1666845130.jpeg",
			description:
				"pores Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://beasiswa.baznas.go.id/program-beasiswa",
			uploader: "User Baznas",
		},
		{
			title: "Scholarship Bestari",
			openDate: new Date("2024-08-01"),
			closeDate: new Date("2024-08-20"),
			category: "University",
			criteria: "Woman Student and active student",
			image:
				"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip5oRPZrAvCfo2LyosXp2TIiGCfHnM_9OHowMVPmJt2yGdOeEr_agqVvgtjGN5k9fcayMdr0nu1-c_uli5o3A7FAukx7Z79dzelvcKPQu5YDDlvRJpt_IKqhIMpz7vd07IN1KnJgVd3uErvcb8xGvpveAsglISZXavyirwL32w_cH_u5CVusW1Fmy3/s1357/Beasiswa%20Bestari.jpg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://www.go-sinarbulan.com/2023/05/pendaftaran-beasiswa-bestari-untuk-anak.html?m=1",
			uploader: "User Bestari",
		},
		{
			title: "Scholarship EKLES",
			openDate: new Date("2024-04-01"),
			closeDate: new Date("2024-04-10"),
			category: "Scholarship",
			criteria: "Active Student",
			image:
				"https://assets-e.promediateknologi.id/photo/2023/04/14/Beasiswa-Ekles-1-3462727616.jpg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://www.dewantaranews.com/topik-khusus/detail/9747/program-beasiswa",
			uploader: "User Ekles",
		},
		{
			title: "Scholarship LPDP",
			openDate: new Date("2024-05-01"),
			closeDate: new Date("2024-05-15"),
			category: "Volunteer",
			criteria: "Diploma and bachelor student",
			image:
				"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWC1U4Abjfn_M0VCo6rIPGfFmV7HAVlEtL2vw5MuzNtJf4nYKPQQOQIbbyDFPib9BcSONq11aXCCXZf15oW725tPjUXC8eDMnq8akXeXHN1rhWEZCLPte2GMkKNYgJk8qAxPCRBjB9QQd7cnwhLIVGfggBJhNp-aeF5yC0GcGlujUAmHJWuLCh_wHTLQ/s3938/Panduan%20Beasiswa%20LPDP.jpg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://www.idbeasiswa.id/2022/02/beasiswa-lpdp-2022-terbaru-syarat-dan.html",
			uploader: "User Lpdp",
		},
		{
			title: "Scholarship Bank Indonesia",
			openDate: new Date("2024-07-01"),
			closeDate: new Date("2024-07-10"),
			category: "Training",
			criteria: "Diploma and Bachelor student",
			image:
				"https://statik.unesa.ac.id/profileunesa_konten_statik/uploads/fish/thumbnail/2b8f6e8f-ddba-478b-ae4a-4b5622bec308.jpg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://fish.unesa.ac.id/post/pengumuman-dan-pendaftaran-program-beasiswa-bank-indonesia-tahun-2023",
			uploader: "user BI",
		},
		{
			title: "Scholarship Cendikia Baznas",
			openDate: new Date("2024-04-10"),
			closeDate: new Date("2024-04-30"),
			category: "University",
			criteria: "Diploma IV and Bachelor students",
			image: "https://beasiswa.baznas.go.id/images/lbb-program/1666845130.jpeg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://beasiswa.baznas.go.id/program-beasiswa",
			uploader: "User Baznas",
		},
		{
			title: "Scholarship Bestari",
			openDate: new Date("2024-08-01"),
			closeDate: new Date("2024-08-20"),
			category: "University",
			criteria: "Woman Student and active student",
			image:
				"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip5oRPZrAvCfo2LyosXp2TIiGCfHnM_9OHowMVPmJt2yGdOeEr_agqVvgtjGN5k9fcayMdr0nu1-c_uli5o3A7FAukx7Z79dzelvcKPQu5YDDlvRJpt_IKqhIMpz7vd07IN1KnJgVd3uErvcb8xGvpveAsglISZXavyirwL32w_cH_u5CVusW1Fmy3/s1357/Beasiswa%20Bestari.jpg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://www.go-sinarbulan.com/2023/05/pendaftaran-beasiswa-bestari-untuk-anak.html?m=1",
			uploader: "User Bestari",
		},
		{
			title: "Scholarship EKLES",
			openDate: new Date("2024-04-01"),
			closeDate: new Date("2024-04-10"),
			category: "Student",
			criteria: "Active Student",
			image:
				"https://assets-e.promediateknologi.id/photo/2023/04/14/Beasiswa-Ekles-1-3462727616.jpg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://www.dewantaranews.com/topik-khusus/detail/9747/program-beasiswa",
			uploader: "User Ekles",
		},
		{
			title: "Scholarship LPDP",
			openDate: new Date("2024-05-01"),
			closeDate: new Date("2024-05-15"),
			category: "University",
			criteria: "Diploma and bachelor student",
			image:
				"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWC1U4Abjfn_M0VCo6rIPGfFmV7HAVlEtL2vw5MuzNtJf4nYKPQQOQIbbyDFPib9BcSONq11aXCCXZf15oW725tPjUXC8eDMnq8akXeXHN1rhWEZCLPte2GMkKNYgJk8qAxPCRBjB9QQd7cnwhLIVGfggBJhNp-aeF5yC0GcGlujUAmHJWuLCh_wHTLQ/s3938/Panduan%20Beasiswa%20LPDP.jpg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://www.idbeasiswa.id/2022/02/beasiswa-lpdp-2022-terbaru-syarat-dan.html",
			uploader: "User Lpdp",
		},
		{
			title: "Scholarship Bank Indonesia",
			openDate: new Date("2024-07-01"),
			closeDate: new Date("2024-07-10"),
			category: "University",
			criteria: "Diploma and Bachelor student",
			image:
				"https://statik.unesa.ac.id/profileunesa_konten_statik/uploads/fish/thumbnail/2b8f6e8f-ddba-478b-ae4a-4b5622bec308.jpg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://fish.unesa.ac.id/post/pengumuman-dan-pendaftaran-program-beasiswa-bank-indonesia-tahun-2023",
			uploader: "user BI",
		},
		{
			title: "Phyton Training",
			openDate: new Date("2024-03-01"),
			closeDate: new Date("2024-03-25"),
			category: "Technology",
			criteria: "High GPA",
			image:
				"https://tse2.mm.bing.net/th?id=OIP.JdB4BJROixuW02O350cKpAHaD4&pid=Api&P=0&h=180",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://www.riset.guru.pubiway.com/python-certification-course-2019-livewire-training-institution/",
			uploader: "User Pubiway",
		},
		{
			title: "Programming Courses",
			openDate: new Date("2024-05-01"),
			closeDate: new Date("2024-05-15"),
			category: "Technology",
			criteria: "High GPA",
			image:
				"https://img.graphicsurf.com/2020/06/Online-programming-training-vector-design.jpg",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://graphicsurf.com/item/online-programming-training-vector-design/",
			uploader: "User Graphic",
		},
		{
			title: "Training Enviromental Education",
			openDate: new Date("2024-07-01"),
			closeDate: new Date("2024-07-18"),
			category: "Science",
			criteria: "High GPA on Science",
			image:
				"https://tse4.mm.bing.net/th?id=OIP.nr8CQlTkdULF0qgcE0JtoAHaEK&pid=Api&P=0&h=180",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://www.infodidaktik.com/2022/02/dibuka-pendaftaran-training-course-eesd.html",
			uploader: "User Infodidactic",
		},
		{
			title: "English Course Training",
			openDate: new Date("2024-05-01"),
			closeDate: new Date("2024-05-15"),
			category: "Course language",
			criteria: "have the intention to learn English",
			image: "https://img.pikbest.com/origin/06/46/05/20WpIkbEsTqFt.jpg!w700wp",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://pikbest.com/free-templates/english-course-flyer.html",
			uploader: "User Course",
		},
		{
			title: "English Course Margonda",
			openDate: new Date("2024-08-01"),
			closeDate: new Date("2024-08-25"),
			category: "Course language",
			criteria: "have the intention to learn English",
			image:
				"https://1.bp.blogspot.com/-zZ1xd5f22LM/Xo7MCKLhY7I/AAAAAAAABwQ/k6fe86oIoMIANdVetnFXH8jq2xN8kLFGQCLcBGAsYHQ/s1600/english%2Bcourse%2Blpia.png",
			description:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			link: "https://lpiamargondadepokraya.blogspot.com/2020/01/kursus-bahasa-inggris.html",
			uploader: "User LPI",
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
