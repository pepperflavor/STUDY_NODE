/*
    선택적 체이닝(optional chainig)  ? 가 키워드인 셈
    TS 3.7 버전이상 지원
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
/*  또는 DB 구조가 변경될 수 도 있고, 규모가 크고 복잡한 애플리케이션이라 이 시점에 일부 데이터가
    설정되지 않았을 수 도 있다. 즉, 객체의 일부 속성이 설정되어있는지 또는 정의되지 않았는지 확실히 알 수 없는
    중첩된 데이터로 구조화를 할 수 도 있다.


    즉 예1) job이라는 속성이 아직 설정되었는지 확신이 없을때
    js
    => if(fetchedUserData.job && fetchedUserData.job.title) 이런식으로 두가지 값이 다 존재하면~ 이렇게 접근
    하지만 더 나은 접근 방법이 있다. 체이닝!!!!
*/

// 이렇게 요소뒤에 ?를 붙이면 된다
console.log(fetchedUserData?.job?.title) // 물음표의 역할은 해당 부분이 존재하는지 알려주는 것이다. 즉, fetchedUserData이 정의되어있고 job이 정의 되어있다면 title에 접근 할 수 있게 해주는 것