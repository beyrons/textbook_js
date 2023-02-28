const message = (login) => login === 'Сотрудник' ? 'Привет' :
    login === 'Директор' ? 'Здравствуйте' :
    login === '' ? 'Нет логина' : '';

console.log(message('Директор'))
