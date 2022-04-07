const sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '기획', '디자인', '안드로이드', '웹', 'iOS'],
    president: '김규민',
    introduce: function () {
        this.part.map( name => {
            console.log(`솝트 내 파트는 ${name} 파트가 있어요!`);
        });
    }
}

console.log(sopt.group);
sopt.introduce();

let array = [1, 2, 3, 4];
console.log(array);

console.log(typeof array);

// function menu(dinner) {
//     return `오늘 메뉴는 ${dinner} 입니다.`;
// }

// console.log(menu('삼겹살'));

const menu = (dinner) => {
    return `오늘 메뉴는 ${dinner} 입니다.`;
}

const str = menu('곱창');
console.log(str);

const func = (num) => {
    return x * x;
}

const multiple = (func, num) => {
    console.log(func(num));
}