
// autoBind 만들기
// 

// Log3 참고
// 방법 2 해답
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value; // 이렇게 하면 원래 메서드에 접근가능
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this); // 여기서 this 바인드, 이렇게 해주면 addEventListner로 재정의되지 않는다. 
            return boundFn;                                        // getter는 실행되고 있는 함수와 그것이 속한 객체, 그리고 이벤트 리스너 사이의 추가적인 계층같은 것
        }
    }
    return adjDescriptor; // 이렇게 디스크립터 객체를 반환하면 이전의 디스크립터를 덮어쓴다. 이렇게 getter 계층추가
}

class Printer{
    message = 'This works!';

    @Autobind
    showMessage(){
        console.log(this.message)
    }
}

const myPrinter = new Printer()

const button = document.querySelector('button')!;
button.addEventListener('click', myPrinter.showMessage); // undefined가 뜸 myprinter.showMessage() 와 같은 결과가 안나옴. 
// 왜? 이벤트 리스너를 사용하면 this는 이벤트의 대상을 참조한다. addEventListener가 결국 실행되어야 하는 함수 안에 있는 this를 이벤트의 대상과 바인딩하기 때문이다
// 즉 이때의 this는 저 함수가 아니라 Printer 클래스 자체를 참조하기 때문이다.

// 방법 1. 메서드나 showMessage를 myPrinter에 바인딩 하거나
//      button.addEventListener('click', myPrinter.showMessage.bind(myPrinter));

// 방법 2. showMessage의 this를 myPrinter에 바인딩해 이벤트 리스너가 원래 참조하려던 showMessage 대신 myPrinter를 참조해 다시 이 객체를 참조하도록한다

