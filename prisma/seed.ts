const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.program.deleteMany();

  // Data dummy untuk model Scholar
  const dummyPrograms = [
    {
      title: "Scholarship A",
      openDate: new Date("2024-06-01"),
      closeDate: new Date("2024-06-01"),
      category: "Science",
      criteria: "High GPA",
      image: "http://example.com/imageA.jpg",
      link: "http://example.com/scholarshipA",
      uploader: "user1"
    },
    {
      title: "Scholarship B",
      openDate :new Date("2024-07-01"),
      closeDate: new Date("2024-07-01"),
      category: "Arts",
      criteria: "Artistic skills",
      image: "http://example.com/imageB.jpg",
      link: "http://example.com/scholarshipB",
      uploader: "user2"
    },
    {
      title: "Scholarship C",
      openDate : new Date("2024-08-01"),
      closeDate: new Date("2024-08-01"),
      category: "Technology",
      criteria: "Innovative project",
      image: "http://example.com/imageC.jpg",
      link: "http://example.com/scholarshipC",
      uploader: "user3"
    }
  ];

  for (const program of dummyPrograms) {
    await prisma.program.create({
      data: program,
    });
  }

  console.log("Dummy data for Program created!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
