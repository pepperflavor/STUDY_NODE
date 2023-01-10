// 클래스형 제네릭
/*

*/

class DataStorage<T>{
    //private data: []; // 클래스내 접근 가능, 인스턴스화 할때 생성되지도 호출도 안된다. getter,setter로 값 조회, 수정할 수 있다.
    private data: T[] =[]; // T 타입의 배열을 입력해 제네릭타입의 데이터가 저장되도록함

    addItem(item: T){
        this.data.push(item); // 'any' 형식의 인수는 'never' 형식의 매개 변수에 할당될 수 없습니다. 라고 뜸
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>(); // string 타입의 데이터를 갖는 것으로 설정됨
// textStorage.addItem(11); // 인수로 숫자를 넣으면 오류가 난다. string타입의 데이터를 갖는 것으로 설정되었기 때문

// indexof : 배열 메서드 이기때문에 객체를 전달해도 제대로 작동안함