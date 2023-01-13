class ProjectInput{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;

    constructor(){
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        // 이 클래스의 새 인스턴스를 생성할때 여기에 속한 정보를 바로 랜더링하기 위한 설정
        const importedNode = document.importNode(this.templateElement.content, true)
        // content 는 HTMLTemplateElement에 있는 프로퍼티임. 단순하게 템플릿의 내용을 참조한다
        // 템플릿 코드 사이의 html코드를 참조하는 것
        this.element = importedNode.firstElementChild as HTMLFormElement; // index.html을 보면
        // <template id ='project-input'> 의 시작 태그가 <form>태그 이기 때문에 HTMLFormElement 라고 지정해준것
        this.attach();
    }

    // 랜더링 로직과 분리하기 위해 이렇게 선언
    private attach(){
        // insertAdjacentElement :  HTMLelement를 삽입하기 위해 자바스크립트 브라우저에서 제공하는 기본 메서드
        // 첫번째 인수로 어디에 랜더링 할지(옵션: 대상으로 삼은 엘리먼트의 처음부분 뒤에 hostElement 바로 뒤, 시작하기 전 여는태그 앞, 닫는 태그 앞
        //              또는 닫는 태그 뒤 등/ afterbegin: 여는 태그가 바로 시작되는 곳
        // 두번째 인수: 삽입할 것 importedNode를 넣어야 하는데 이것은 상수라 constructor에서만 사용할 수 있다.
        // 그리고 DocumentFragment라서 바로 인수로 집어 넣을 수 없다. 그래서 그안의 요소를 끄집어내서 다른 프로퍼티에 저장한다음 접근 
        this.hostElement.insertAdjacentElement('afterbegin', this.element); 
    }
}

const pjInput = new ProjectInput();