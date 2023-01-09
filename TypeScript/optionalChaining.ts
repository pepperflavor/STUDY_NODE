/*
    선택적 체이닝(optional chainig)
    백엔드에서 데이터를 가져오고 데이터 베이스나 객체 내 특정 속성이 정의되어있는지
    확실하지 않은 소스에서 데이터를 가져오는 애플리케이션이 있다고 가정하자 
*/

const fetchedUserData = {
    id : 'u1',
    name: 'Max',
    job : { title: 'CEO', decription: 'My own company' }
};

console.log(fetchedUserData.job.title) // => CEO가 잘 출력된다

// 하지만 백엔드에서 이 데이터를 가져오면서 필요한 데이터를 모두 다 가져오지 못할 수 있다.
/*  또는 DB
*/