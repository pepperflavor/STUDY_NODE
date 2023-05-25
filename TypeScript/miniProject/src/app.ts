// app 태그 안의 템플릿을 랜더링하는 것이 목적
// 해당 태그에 접근하기 위해서
class ProjectInput{
    templateElement: HTMLTemplateElement; // null 을 허용하지 않음
    hostElement: HTMLDivElement;// HTMLTemplateElement 보다 조금더 구체적
    element: HTMLFormElement;

    constructor(){
        // 1. 타입스크립트가 내 html을 분석하지 않기 때문에 getElementById를 써도 null이라고 생각함
        // 그래서 뒤에 !를 붙여서 null이 절대 아니고 값을 가져올 거라는 것을 명시해준 것
        // 2. 그다음 어떤 html element를 가져올지 모르니까 타입캐스팅 <HTMLTemplateElement> 또는 뒤에 as HTMLTemplateElement 라고 명시해주기
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!; 
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        // importNode: 전역 문서객체에 제공되는 메서드. 이안에 템플릿 엘리먼트 포인터를 입력한다.
        // 인자를 두개 받을 수 있다. 두번째 인자로 깊은 복사를 할지, 템플릿 내부에 있는 모든 것을 참조할지 결정한다.
        // .content : templateElement에 존재하는 프로퍼티. 템플릿 코드 사이의 html 코드를 참조한다.
        const importNode = document.importNode(this.templateElement.content, true);
        this.element = importNode.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach(){
        // insertAdjacentElement : 대상으로 삼은 엘리먼트의 처음, 뒤 등에 삽입할 수 있다.
        // afterbegin: 여는 태그가 시작되는 부분
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prInput = new ProjectInput();