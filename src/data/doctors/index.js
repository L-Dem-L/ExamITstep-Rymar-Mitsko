// Щоб підключити дані до компоненти або сторінки потрібно:
// імпортувати ці дані
// import dataDoctors from "@/components/data/doctors"
// потім їх записати в реактивну змінну
// const [data, setData] = useState(dataDoctors);

// import doctorsImg
import doctor1 from "./dataImg/doctor1.jpg";
import doctor2 from "./dataImg/doctor2.jpg";
import doctor3 from "./dataImg/doctor3.jpg";
// import departament
import departament1 from "./dataImg/Departament/star.png"
import departament2 from "./dataImg/Departament/hospital.png"

const dataDoctors = [
    {
        id: 1,
        name: "Мар’яна",
        lastName: "Мицько",
        fatherName: "Степанівна",
        specialty: "Лікар-невропатолог",
        education: "Львівський державний медичний університет",
        category: "Вища",
        experience: 20,
        office: 407,
        department: "Відділення  невідкладної  (екстреної)  медичної  допомоги",
        image: doctor1,
        departamentImg: departament1,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 2,
        name: "Оксана",
        lastName: "Саковець",
        fatherName: "Романівна",
        specialty: "Лікар-гастроентеролог",
        education: "Чернівецький державний медичний інститут",
        category: "Вища",
        experience: 32,
        office: 417,
        department: "Поліклінічне відділення",
        image: doctor2,
        departamentImg: departament2,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 3,
        name: "Олексій",
        lastName: "Проценко",
        fatherName: "Миколайович",
        specialty: "Лікар-гастроентеролог",
        education: "Львівський державний медичний університет",
        category: "Вища",
        experience: 19,
        office: 414,
        department: "Поліклінічне відділення",
        image: doctor3,
        departamentImg: departament2,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 4,
        name: "Мар’яна",
        lastName: "Мицько",
        fatherName: "Степанівна",
        specialty: "Лікар-невропатолог",
        education: "Львівський державний медичний університет",
        category: "Вища",
        experience: 20,
        office: 407,
        department: "Відділення  невідкладної  (екстреної)  медичної  допомоги",
        image: doctor1,
        departamentImg: departament1,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 5,
        name: "Оксана",
        lastName: "Саковець",
        fatherName: "Романівна",
        specialty: "Лікар-гастроентеролог",
        education: "Чернівецький державний медичний інститут",
        category: "Вища",
        experience: 32,
        office: 417,
        department: "Поліклінічне відділення",
        image: doctor2,
        departamentImg: departament2,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 6,
        name: "Олексій",
        lastName: "Проценко",
        fatherName: "Миколайович",
        specialty: "Лікар-гастроентеролог",
        education: "Львівський державний медичний університет",
        category: "Вища",
        experience: 19,
        office: 414,
        department: "Поліклінічне відділення",
        image: doctor3,
        departamentImg: departament2,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 7,
        name: "Мар’яна",
        lastName: "Мицько",
        fatherName: "Степанівна",
        specialty: "Лікар-невропатолог",
        education: "Львівський державний медичний університет",
        category: "Вища",
        experience: 20,
        office: 407,
        department: "Відділення  невідкладної  (екстреної)  медичної  допомоги",
        image: doctor1,
        departamentImg: departament1,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 8,
        name: "Оксана",
        lastName: "Саковець",
        fatherName: "Романівна",
        specialty: "Лікар-гастроентеролог",
        education: "Чернівецький державний медичний інститут",
        category: "Вища",
        experience: 32,
        office: 417,
        department: "Поліклінічне відділення",
        image: doctor2,
        departamentImg: departament2,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 9,
        name: "Олексій",
        lastName: "Проценко",
        fatherName: "Миколайович",
        specialty: "Лікар-гастроентеролог",
        education: "Львівський державний медичний університет",
        category: "Вища",
        experience: 19,
        office: 414,
        department: "Поліклінічне відділення",
        image: doctor3,
        departamentImg: departament2,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 10,
        name: "Мар’яна",
        lastName: "Мицько",
        fatherName: "Степанівна",
        specialty: "Лікар-невропатолог",
        education: "Львівський державний медичний університет",
        category: "Вища",
        experience: 20,
        office: 407,
        department: "Відділення  невідкладної  (екстреної)  медичної  допомоги",
        image: doctor1,
        departamentImg: departament1,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 11,
        name: "Оксана",
        lastName: "Саковець",
        fatherName: "Романівна",
        specialty: "Лікар-гастроентеролог",
        education: "Чернівецький державний медичний інститут",
        category: "Вища",
        experience: 32,
        office: 417,
        department: "Поліклінічне відділення",
        image: doctor2,
        departamentImg: departament2,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
    {
        id: 12,
        name: "Олексій",
        lastName: "Проценко",
        fatherName: "Миколайович",
        specialty: "Лікар-гастроентеролог",
        education: "Львівський державний медичний університет",
        category: "Вища",
        experience: 19,
        office: 414,
        department: "Поліклінічне відділення",
        image: doctor3,
        departamentImg: departament2,
        workSchedule: {
            monday: "8:00 – 15:12",
            tuesday: "8:00 – 15:12",
            wednesday: "8:00 – 15:12",
            thursday: "8:00 – 15:12",
            friday: "8:00 – 15:12", 
        }
    },
];

export default dataDoctors