/*
    REST(Representational State Transfer)

    정의
    - 자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미한다
    - 즉, 자원(resource)의 표현(representation)dp eogks tkdxo wjsekf
        a. 자원의 표현
            a.1 자원: 해당 소프트웨어가 관리하는 모든 것
             ex) 문서, 그림, 데이터, 해당 소프트웨어 자체 등
            a.2 자원의 표현 : 그 자원을 표현하기 위한 이름
             ex) DB의 학생정보가 자원일때, 'students'를 자원의 표현으로 정한다
        b. 상태(정보)전달
            b.1 데이터가 요청되어지는 시점에서 자원의 상태(정보)를 전달한다
            b.2 JSON 또는 XML를 통해 데이터를 주고 받는 것이 일반적이다.

    - 월드 와이드 웹(www)과 같은 하이퍼 미디어 시스템을 위한 소프트웨어 개발 아키텍쳐의 한 형식
    - REST는 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는
        아키텍쳐 스타일이다
    - REST는 네트워크 상에서 Client와 Server 사이의 통신 방식 중 하나이다.

    REST의 구체적인 개념
        HTTP URI(Uniform Resource Identifier)를 통해 자원(Resource)을 명시하고, 
        HTTP Method(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.
        즉, REST는 자원 기반의 구조(ROA, Resource Oriented Architecture) 설계의 중심에 Resource가 있고 
        HTTP Method를 통해 Resource를 처리하도록 설계된 아키텍쳐를 의미한다.
        웹 사이트의 이미지, 텍스트, DB 내용 등의 모든 자원에 고유한 ID인 HTTP URI를 부여한다.

            CRUD Operation
            Create : 생성(POST)
            Read : 조회(GET)
            Update : 수정(PUT)
            Delete : 삭제(DELETE)
            HEAD: header 정보 조회(HEAD)
*/