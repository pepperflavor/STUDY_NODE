const UserRepository = require('./user.repository')

describe('UserRepository', ()=>{
    let User, repository
    beforeEach(()=>{
        User= {
            // user로 객체를 만들었고 그 상수로 레파지토리
            create: jest.fn().mockRejectedValue({}), // bool 함수, 프로미스 객체의 resolve의 값을 이 메서드 안의 인자값으로 지정해주겠다 라는 뜻
            // 왜 빈 객체 {}로 설정하느냐? 단위 테스트에서는 값이 들어가는지만 확인, 어떤 값이 들어가는지는 통합 테스트에서 하는 일이기 때문이다
        /* 위의 방법이 싫다면
            create:()=>{
                return new Promise((resolve, reject)=>{
                    return resolve
                })
            }
        */
        }
        repository = new UserRepository({User}) // UserRepository { User: {} }
        console.log(repository);
    })
    it('UserRepository 를 잘 가져오는가', ()=>{
        expect(typeof UserRepository).toBe("function")
    })

    // let a
    // beforeEach(()=>{ // 선언 시점 이후의 함수들이 실행 될때마다 실행되는 함수, 만약 아래에서 a =20 으로 값이 바뀌어도, 다른함수를 실행하면 이 함수가 실행돼서 a =10이 된다
    //     a = 10
    //     expect(a).toBe(20)
    // })

    // db에 insert해주는 메서드, 클래스 내부의 메서드를 테스트 하는 코드
    describe("addUser",()=>{
        it('[try] assUser 메서드 확인', async()=>{
           const user = await repository.addUser()
           expect(user).toEqual({})
        })

        it('[try] addUser 오류', ()=>{

        })
    })
})

// it() 은 별 뜻없이 코드 블럭만 구분해준다

