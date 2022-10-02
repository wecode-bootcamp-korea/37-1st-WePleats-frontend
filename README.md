## WePleats 프로젝트 Front-end 소개

- 개발자들의 개성있는 책상을 만들 수 있도록 보다 다채로운 색상의 프로덕트 판매하는 사이트를 기획하였습니다.
- 밋밋하고 칙칙한 개발자 책상이라는 편견은 이제 그만, `WePleats`는 하루종일 에서 일하는 개발자들의 개성을 표현해줄 수 있는 아이템을 추천해주는 곳입니다.

### 개발 인원 및 기간

- 개발기간 : 2022/9/19 ~ 2022/9/30
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/37-1st-WePleats-backend)

### 프로젝트 선정이유

- 커머스 사이트 중에서 개발하는 데 기본적인 flow를 모둔 갖춘 사이트로 회원가입/로그인, 장바구니, 상품구매, 리뷰평 작성까지 모두 경험할 수 있어 선정하게 되었습니다.

### 데모 영상(이미지 클릭)

[프로젝트 영상](https://www.youtube.com/watch?v=Mao03-WqfxQ)

<br>

## 구현한 기능 소개

1. Nav
- 마우스 hover시 드롭다운 메뉴가 생김
- 제품 카테고리 클릭 시 해당 페이지로 이동
- '+5000P' 클릭 시 회원 가입 페이지로 이동
- 회원가입 완료 후 로그인 시 '+5000P' text가 유저아이디로 변경
- 로그인 후 장바구니에 담은 제품 개수 표시
- 로그아웃 버튼 클릭시 로그아웃 

2. 제품 상세 페이지
- 페이지 스크롤 시 오른쪽 가격정보 부분은 고정되어 있고 왼쪽 이미지 정보만 계속 보여짐
- 계속 스크롤 되다가 Footer 부분에 도달 시에 고정되어 있던 부분이 풀리고 Footer내용만 보여줌
- 작은 이미지 마우스 hover시 큰 이미지에서 보여짐
- 배송/교환/반품/사이즈 정보 버큰 클릭시 펼져보이게 구현
- 수량 버튼 클릭시 자동으로 총 금액 변경
- 장바구니/구매하기 버큰 클릭시 해당 페이지로 이동

3. 구매평
- 제품 상세 페이지 안에 해당 제품에 대한 리뷰평을 각각 작성 가능
- 회원제 사이트이기 때문에 구매를 해야 구매평 작성이 가능하며 한 제품 당 하나의 구매평만 작성이 가능
- 구매평 등록 버큰 클릭시 이미지 업로드와 코멘트 작성이 가능한 모달창이 뜸
- 구매평 작성 완료 후에는 자신이 작성한 구매평에만 수정과 삭제 버튼이 생성
- 수정 버튼 클릭시 작성했던 이미지와 구매평이 적혀있는 모달창이 뜸
- 수정 완료 버튼 클릭 시 구매평 리스트에 수정됨
- 삭제 버튼 클릭 시 해당 구매평 삭제 가능

### 적용 기술

- Front-End : <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">

- Back-End : <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-D22128?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/JSON Web TOKENS-FDEE21?style=for-the-badge&logo=JSON Web TOKENS&logoColor=white"> <img src="https://img.shields.io/badge/Bcrypt-003A70?style=for-the-badge&logo=Let's Encrypt&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/multer-1BB76E?style=for-the-badge&logo=Imgur&logoColor=white"> 
 
- Common : <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"> <img src="https://img.shields.io/badge/RestFul API-009688?style=for-the-badge&logo=FastAPI&logoColor=white">

### 회고
[기술블로그](https://velog.io/@gamangee/series/Projects)

### 전체 페이지 소개

1. Nav, Footer
![nav](https://user-images.githubusercontent.com/84329979/193393550-cafb8a2b-aa6a-4826-9ffb-cd43e47f1548.gif)
![image](https://user-images.githubusercontent.com/84329979/193393566-d8bec7f6-d49b-448e-9650-c87b8cbdf55d.png)


2. 회원가입 & 로그인
![signup-login](https://user-images.githubusercontent.com/84329979/193393340-f1ce0258-8beb-4e09-85c6-ebbbff382f69.gif)


3. 메인
![main-min](https://user-images.githubusercontent.com/84329979/193393407-e6015e16-540d-45ee-8a14-df259709d5ff.gif)


4. 제품 리스트(상품 카테고리/색상 필터)
![list](https://user-images.githubusercontent.com/84329979/193393383-f1ad1398-5ac3-4474-816a-3fc55c1a6946.gif)


5. 제품 상세 & 리뷰
![detail-review](https://user-images.githubusercontent.com/84329979/193393386-4a6a6562-762b-4775-bb9c-ae391d9f8dd7.gif)


6. 장바구니
![cart](https://user-images.githubusercontent.com/84329979/193393390-888a1199-d5c3-457f-88fd-1fa530517302.gif)


7. 결제
![order](https://user-images.githubusercontent.com/84329979/193393397-e8420349-bacb-43ef-8c7a-e7968af02c7f.gif)


<br>

## Reference

- 이 프로젝트는 [플리츠마마](https://pleatsmama.com/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
