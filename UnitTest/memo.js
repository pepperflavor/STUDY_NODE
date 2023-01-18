/*
    단위테스트
    선에러!!! 후 고침!!!


    실코드 == 테스트 코드

    단위테스트 조건
    1. 독립적이어야 하며ㅑ 어떤 테스트도 다른테스트에 의존하지 말아야한다
    2. 격리 되어야 한다. Ajax, Axios, LocalStorage등 테스트 대상이 의존하는 것을
    다른 것으로 대체 해야한다.

    
    
    Jest
    ----------------------------------------------
        npm install -D jest node-mocks-http supertest
    ----------------------------------------------

    테스트 파일명 지을때 파일면.test.js 이런 식으로 짓기

    package.json 에서
    "test":"jest" 이렇게 설정되어있으면
    npm run test 를 실행했을때 파일명에 test가 포함되어있는 것들을 해줌

    jest가 원래 리액트를 테스트를 하기 위해 만들어진 라이브러리여서
    다른 환경을 테스트할거라면 환경 설정을 해줘야한다.

    jest.config.unit.js파일을 생성하고
    ==========================================================================
    module.exports = {
            testEnviroments: "node",
            verbose: true, // 코드를 예쁘게 뽑아주는 설정
        }
    ==========================================================================

    적어주기 그리고 apckage.json 수정

    "scripts": {
    "test": "jest -c jesr.config.unit.js"
         },


    그다음 테스트 코드 작성



        // 첫번재 인자값: 설명, 두번째 인자값: 함수
        describe('JWT class 테스트', ()=>{
            it('decode', ()=>{
                console.log('HELL');
            })
            it('encode', ()=>{
                console.log('go to HELL');
            })
        })


        ex)
        describe('controller', ()=>{
            const service ={} // 컨트롤러에서 사용할 공통 변수는 위에 선언 미리 해주기

            it('컨트롤러 함수 하나 실험', ()=>{

            })
        })



    ## router

===========================================================
    console.log(this) // {} 빈객체가 나옴
    console.log(module.exports)
    console.log(this === module.exports) // true, 헠,... 같다....

    // function a(){
    //     console.log(this); // 이건 글로벌 객체가 됨
    // }
    // a();

    exports.a = ()=>{

    }
this.a();
*/