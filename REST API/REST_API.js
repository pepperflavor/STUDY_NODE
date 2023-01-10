/*  

    REST API란
        - 데이터와 기능의 집합을 제공하여 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환 가능하도록 하는 것
        - 정의
            = REST 기반으로 서비스 aPI를 구현한 것
            = Open API(구글 맵이 누구나 사용할 수 있게 공개된 API),


    장점
        1. HTTP 프로토콜의 인프라를 그대로 사용하므로 REST API 사용을 위한 별도의 인프라를 구축할 필요가 없다
        2. HTTP 프로토콜의 표준을 최대한 활용해 여러 추가적인 장점을 함께 가져갈 수 있게 해준ㅇ다.
        3. HTTP 프로토콜에 따르는 모든 플랫폼에서 사용이 가능하다
        4. Hypermedia API의 기본을 충실히 지키면서 범용성을 보장한다.
        5. REST API 메세지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있다.
        6. 여러가지 서비스 디자인에서 생길 수 있는 문제를 최소화 한다
        7. 서버과 클라이언트의 역할을 명확하게 분리한다.

    단점
        1. 표준이 존재하지 않는다
        2. 사용할 수 있는 메소드가 4가지 밖에 없다 (CRUD), HTTP method 형태가 제한적이다
        3. 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL보다 Header값이 더 어렵게 느껴질 수 있다
        4. 구형 브라우저가 아직 제대로 지원해주지 못하는 부분이 있다.



    REST API 설계 기본규칙
        1. 
            resource는 동사보다는 명사를, 대문자보다는 소문자를 사용한다.
            resource의 도큐먼트 이름으로는 단수 명사를 사용해야 한다.
            resource의 컬렉션 이름으로는 복수 명사를 사용해야 한다
            resource의 스토어 이름으로는 복수 명사를 사용해야 한다
                Ex) GET /Member/1 -> GET /members/1


        2.

            자원에 대한 행위는 HTTP Method(GET, PUT, POST, DELETE 등)로 표현한다.
            URI에 HTTP Method가 들어가면 안된다.
                Ex) GET /members/delete/1 -> DELETE /members/1

            URI에 행위에 대한 동사 표현이 들어가면 안된다.(즉, CRUD 기능을 나타내는 것은 URI에 사용하지 않는다.)
                Ex) GET /members/show/1 -> GET /members/1
                Ex) GET /members/insert/2 -> POST /members/2

            경로 부분 중 변하는 부분은 유일한 값으로 대체한다.(즉, :id는 하나의 특정 resource를 나타내는 고유값이다.)
                Ex) student를 생성하는 route: POST /students
                Ex) id=12인 student를 삭제하는 route: DELETE /students/12


        4. 슬래시 구분자는 계층 관계를 나타내는데 사용한다
            ex) http://restapi.example.com/houses/apartments
        
        5. URI 마지막 문자로 슬래시를 포함하지 않는다
            -> URL에 포함되는 모든 글자는 리소스릐 유일한 식별자로 사용되어야 하며 URI가 다르다는 것은 리소스가 다르다는 것이고, 역으로 리소스가 다르면
                URI도 달라져야 한다
            -> # URI URL 의 차이 참고

        6. 파일 확장자는 URI에 포함하지 않는다.
            - REST API에서는 메세지 바디 내용의 포멧을 나타내기 위함 파일 확장자를 URI안에 포함시키지 않는다
            - Accept header를 사용한다.
                ex) http://restapi.example.com/members/soccer/345/photo.jpg (X)
                ex) GET / members/soccer/345/photo HTTP/1.1 Host: restapi.example.com 
                    Accept: image/jpg (O)




            +) URI(Uniform Resource Identifier) / URL 
                특정 리소스를 식별하는 통합자원 식별자를 의미한다. 웹 기술에서 사용하는 논리적 또는 물리적 리소스를 식별하는 고유한 문자열 시퀀스이다.

            +) URL 
                웹주소 이며, 컴퓨터 네트워크 상에서 리소스가 어디 있는지 알려주기 위한 규약이자 URI의 서브셋이다.

                ex) "최하진" 은 내 이름이자 식별자!!! 이다. URI와 비슷하지만 내 위치나 연락처에 대한 정보다 없기때문에 URL은 될 수 없다.
                "서울시 강동구 천호강변호 13" 은 주소이다. 즉 URL URI와 비슷하면 간접적으로 내가 있는 장소를 식별한다.

                ex2) 
                    https://www.hajin.com/index.html  => URI: O, URL: O
                    https://www.hajin.com/index => URI: O, URL: X

                    두 주소는 모두 index.html을 가리키고 있지만 첫번째 주소는 웹서버의 실제 파일위치를 나타내는 주고이므로 URI 이자 URL이다
                    두번째 주소는 실제로 index라는 파일이 웹서버에 존재하지 않으므로 URL은 아니다. 
                    하지만 서버 내부에서 이를 처리하여 결국 inde.html을 가리키기 때문에 URI라고 볼 수 있다.




            



*/