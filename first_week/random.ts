// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기

enum Old {
    YB = 'YB',
    OB = 'OB',
}

interface Member {
    name: string;
    group: Old;
}

interface Alcohol {
    member: Member[];
    shuffle(array: Member[]): Member[];
    organize(array: Member[]): void;
}

const dinner: Alcohol = {
    member: [
        {
            name: '이우진',
            group: Old.YB
        },
        {
            name: '박정훈',
            group: Old.OB
        },
        {
            name: '유지원',
            group: Old.OB
        },
        {
            name: '박정무',
            group: Old.OB
        },
        {
            name: '김소현',
            group: Old.YB
        },
        {
            name: '박진형',
            group: Old.YB
        }
    ],
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array) {
        this.shuffle(array);
        let OB: Member = array.filter((member: Member) => (member.group === Old.OB))[0];
        let YB: Member = array.filter((member: Member) => (member.group === Old.YB))[0];

        let dinnerMember: string[] = [OB.name, YB.name];
       
        console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
    }
};

dinner.organize(dinner.member);