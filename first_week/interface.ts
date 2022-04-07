interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti: string[];
}

const ServerPart: ServerPart = {
    name: '김소령',
    age: 5,
    group: 'YB',
    mbti: ['ENFJ', 'ANGEL']
}

console.log(ServerPart);

const serverMembers: Array<ServerPart> = [
    {
        name: '김소령',
        age: 5,
        group: 'YB',
        mbti: ['ENFJ', 'ANGEL']
    },
    {
        name: '김소령',
        age: 5,
        group: 'YB',
        mbti: ['ENFJ', 'ANGEL']
    }
]

console.log(serverMembers);

// 선택적 프로퍼티
interface Closet {
    name: string;
    shirt: number;
    pants: number;
    sunglass?: number;
    hat?: number;
}

const ohmygirl: Closet[] = [
    {
        name: '정훈',
        shirt: 1,
        pants: 2,
        sunglass: 2
    },
    {
        name: '정훈',
        shirt: 1,
        pants: 2,
        hat: 2
    }
]

/**
 * funciton interface
 */

 const showOhmygirl = (arr: Closet[]) => {
    arr.map(e => {
        console.log(e.name);
        console.log(e.pants);
        console.log(e.shirt);
        console.log(e.hat);
        console.log(e.sunglass);
    })
};

showOhmygirl(ohmygirl);

const returnOhmygirl = (arr: Closet[]): Closet[] => {
    return arr;
};

console.log(returnOhmygirl(ohmygirl));


interface Sopt {
    season: number;
    group: string[];
    part: string[];
    president: string;
    introduce(): string[];
}

const currentSopt: Sopt = {
    season: 30,
    group: ['YB', 'OB'],
    part: ['서버', '기획', '디자인', '안드로이드', '웹', 'iOS'],
    president: '김규민',
    introduce: function () {
        return this.part.map(name => {
            // console.log(`솝트 내 파트는 ${name} 파트가 있어요!`)
            return `솝트 내 파트는 ${name} 파트가 있어요!`
        });
    }
}

console.log(currentSopt.introduce());