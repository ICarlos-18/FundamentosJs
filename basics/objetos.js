// Los objetos nos permiten almacenar datos
// a partir de una clave
/*
miObjeto = { clave: valor, 'clave'; valor }
miObjeto.clave
miObjeto['clave']
*/
const subject = {
    name: 'Programación',
    totalHours: 90,
    weekHours: 7,
    classroom: 'Lab Progra',
    teacher: 'Jose Manuel',
    'practice hours': 60
}

console.log(subject.name);
console.log(subject.totalHours);
console.log(subject['weekHours']);
console.log(subject['practice hours']);

subject.classroom = 'Lab Programación';
console.log(subject.classroom);

console.log(subject);

subject['teorical hours'] = 30;
console.log(subject);

const group = {
    name: '4C',
    carrer: 'TIADSM',
    subjectS: [
        subject
    ],
    students: [
        { name: 'Gael', lastName: 'Pérez' },
        { name: 'Juan', lastName: 'Sánchez' },
        { name: 'Dani', lastName: 'Álvarez' },
    ]
}
console.log(group);
console.log(group.students);