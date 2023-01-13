// 데코레이터로 유효성 검사하기
// 사용자에게 입력받은 값의 유효성 검사하기

// 저장소 역할
interface ValidatorConfig{
    [property: string]:{
        [validatableProp: string]: string[] // ['required', 'positive'] 같이 담길 수 있다. validator 목록으로 추가될 수 있다.
                                            // 키가 문자열이고, value도 스트링이 담긴 배열이
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string){
    console.log("@ ");
    console.log(registeredValidators);
    registeredValidators[target.constructor.name] = { // 새로운 이름으로 객체 덮어씀
        ...registeredValidators[target.constructor.name],
        [propName]: ['required']
    }
    console.log("@ + a ");
}

function PositiveNumber(target: any, propName: string){
    console.log("@@ ");
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName] : ['positive']
    }

    console.log("@@  + b ");
}

// 등록된 모든 validator를 조사한 후 찾아낸 validator를 바탕으로 로직 실행해야함
// 객체가 기초하고 있는 생성자 함수가 무엇인지 찾아낸후
// 해당 객체에 대해 설정한 유효성 검증 구성이나 프로퍼티 validator를 여기에 매핑해야한다
function validate(obj: any){
    // obj.constructor.name => constructor 프로퍼티에 접근했는데 이것은 객체의 프로타입에 존재하는 것이기 때문에
    // 객체에서 직접 접근할 수 있다. 프로토타입 체인 덕분에 프로토타입을 가져온다
    // 객체 자체에서 constructor 프로퍼티를 찾지 못하는 경우에도 작동할 것이다
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig){ // objValidatorConfig 에 아무것도 없다면 true를 반환 == 무조건 유효하다는 뜻
        return true
    }

    // for-in 루프로 objValidatorConfig 객체 안의 값을 돌면서 볼 것이다. 
    //루프를 돌때 validator가 있는 모든 프로퍼티 이름에 접근할 수 있다. 그리고 validator가 하나만 있어도 배열이어야 한다.
    for(const prop in objValidatorConfig){
        console.log(prop); // price라고 찍힘== 유효성을 검사한 첫번째가 price라는 말
        for( const validator of objValidatorConfig[prop]){ // positive, required 이름으로 넣었던 것들을 갖고오게 되고 모두 validator 상수에 저장됐다
            switch(validator){
                case 'required':
                    return !!obj[prop]; // 다른 validator를 상관하지 않고 바로 반환한다 즉, title price둘중하나만 제대로된 값이어도 ok해준다는것
                case 'positive':
                    return obj[prop] > 0;
            }
        }
    }
    return true;
}

class Course{
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;


courseForm.addEventListener('submit', event => {
    event.preventDefault();
    // 타입 캐스팅해줘서 앞단의 값 받아오도록 해주기
    const titleEl = <HTMLInputElement>document.getElementById('title');
    const priceEl = <HTMLInputElement>document.getElementById('price');

    const title = titleEl.value;
    const price = +priceEl.value;

    // 유효성 검사 조건 추가...?  데코레이터로 추가해보기
    // if(title.trim().length > 0){
    //      ...
    // }

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)){
        alert('유효하지 않은 입력값입니다.');
        return;
    }
    console.log(createdCourse);
    
})
