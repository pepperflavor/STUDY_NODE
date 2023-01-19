/*
    데이터를 넘겨줄때 body에서 꺼냈으나

    로그인같은 경우 req.header에서 정보를 받아야함
    req.header.Authorization() // 이런 메서드가 있다고 함



    ## Autorization

    GET / http / 1.1
    header..
    Authozation :Bearer token   // 인증방법 중 하나
    Content-type : body의 내용이 어떻게 이뤄졌는지 명시해준다. ex) application/json 
    // 클라이언트가 이렇게 헤더 내용을 만들어서 전송하면
    // 서버에서 응답을

    body...



    POST / http / 1.1
    header..
    Authozation :Bearer token   // 인증방법 중 하나
    Content-type : application/json 

    body...

    {
        subject: 'asda'
        consten: 'asdasd',
        ...
        token:
    }
    // body에 인증말고 여러 정보가 같이 담겨와서 분배를 어떻게 할지 생각을 잘해여ㅑ한다
    
*/