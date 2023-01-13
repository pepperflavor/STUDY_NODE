// 인덱스 타입

interface Props {
    name : string
    [key: string] : string;
}

const p: Props = {
    name : 'dog',
    a : 'a',
    b : 'b',
    c : 'c',
    0 : '3',
    1 : 'd',
    2 : 'e'
}
console.log(p[0]);
console.log(p['a']);
console.log(p.a);
console.log(p.name);
console.log(p.abc);
console.log(p.ddd);
console.log(p[1]);
console.log(p[2]);




//let keys : keyof Props;

