/*
    RESTful API
    - 일반적으로 REST라는 아키텍쳐를 구현하는 웹서비스를 나타내기 위해 사용되는 용어이다.
        즉 REST API를 제공하는 웹서비스와 같은말

    REST API 의 제약 조건들

    1. client-server
        a. client는 server에서 어떤 일을 수행하더라도 내부 작업을 알지 않아도 된다
        b. 이는 플랫폼의 이식성을 향상시킨다
        c. 클라이언트(프론트)와 서버가 서로 독립적이라 별도의 진화가 가능하다

    2. Stateless
        a. 클라이언트에서 서버로 각 요청에는 그 요청에 필요한 모든 정보가 포함되어야 한다.

    3. Cache
        a. 요청에 대한 응답 내의 데이터에 해당 요청은 캐시가 가능한지 불가능 한지 명시해야한다.
        b. HTTP Header에 cache-control 헤더를 이용한다.

    4. Uniform interface
        a. URL로 지정된 리소스에 대한 조작을 통일하고 한정된 인터페이스로 수행하는 아키텍쳐 스타일이다
        b. 4가지 제약 조건이 있다.



    Uniform Interface의 4가지 제약 조건

        1. Resource-Based
        2. Manipluation Of Resources Through Representations
        3. Self-Descriptive Message
            - 메세지 스스로가 자신에 대한 설명을 할 수 있어야 한다.
                즉, API문서가 REST API 응답 본문에 존재해야한다는 것이다. API 문서 전체를 응답에 넣는 것은 불가능하기 때문에
                    적어도 API문서가 어디 있는지는 알려줘야 한다
                    이렇게 했을때의 장점은 서버가 변해서 Response Date가 변경 되었을때 클라이언트단에서 어떤 데이터가 변경되었는지 알 수 있게 된다.

        4. Hypermedia As The Engine of Application State(HATEOAS)
            - Hypermedia(하이퍼링크) 를 통해서 애플리케이션의 상태 전이가 가능해야한다. 또한 링크에 자기 자신에 대한 정보가 담겨야한다.는 뜻



        1 과 2를 합치면 URI로 지정한 리소스를 HTTP Method를 통해서 표현하고 구분한다


        ex) 과거 HTML을 불러오는 방식
        https://my-server.com/page?user=guest/menu=login

            => page의 파라미터로 guest인지 user인지 admin인지ㅏ 구분하고 menu 파라미터를 통해 어떤 메뉴인지 불러오는 방식
            
        REST API 적용 후
            HTTP Method : get
            https://my-server.com/user/login    

        ex2)
            HTTP Method : POST
            https://my-server.com/user/login

                => URL은 login이라는 URI로 POST 요청을 보낸다는 뜻이 되는데, 사용자 정보가 POST 요청이 되는 것이니 로그인을 할 것이라고 짐작 가능



*/