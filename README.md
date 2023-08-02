# TAING 반응형 웹페이지_JS 프로젝트

- [TAING 반응형 웹페이지\_JS 프로젝트](#taing-반응형-웹페이지_js-프로젝트)
  - [배포 주소](#배포-주소)
  - [프로젝트 소개](#프로젝트-소개)
  - [참여 인원](#참여-인원)
    - [담당 페이지](#담당-페이지)
  - [기술 스택](#기술-스택)
  - [화면 구성](#화면-구성)
    - [화면 플로우](#화면-플로우)


## 배포 주소
[TAING 반응형 웹페이지_JS 프로젝트][]

## 프로젝트 소개
*[테킷 멋쟁이 사자처럼]* 프론트엔드 스쿨 6기에서 진행한 JavaScript 프로젝트.  
페이지별 JS 기능에 중점을 두어 작업.  

## 참여 인원


<table>
  <tbody>
    <tr>
      <td align="center"><a href=""><img src="./client/image/profile/mobile/profile_이.png"width="100px;" alt=""/><br /><sub><b>조장: 이동호 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="./client/image/profile/mobile/profile_정.png" width="100px;" alt=""/><br /><sub><b> 팀원: 정소이 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="./client/image/profile/mobile/profile_진.png" width="100px;" alt=""/><br /><sub><b>팀원: 김남진 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="./client/image/profile/mobile/profile_효.png" width="100px;" alt=""/><br /><sub><b>팀원: 장효윤 </b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>
*[테킷 멋쟁이 사자처럼]* 프론트엔드 스쿨 6기 3조 `정진이효`   
김남진, 이동호(스크럼 마스터), 장효윤, 정소이(깃 마스터) (가나다 순)

### 담당 페이지
**김남진** : [로그인][], [아이디 찾기][], [비밀번호 찾기][],  
**이동호** : [메인 페이지][], 메인 페이지 모달,  
**장효윤** : [랜딩 페이지][], [회원 가입][], 헤더, 푸터,  
**정소이** : [프로필 선택][], [프로필 편집][], [검색 페이지][], [로그아웃][]

## 기술 스택
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img alt="tailwind" src ="https://img.shields.io/badge/Tailwind-06B6D4.svg?&style=for-the-badge&logo=tailwindCSS&logoColor=white"/><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## 화면 구성
- [메인 페이지][] : swiper 슬라이드, 섹션별 슬라이드는 바닐라 JS 이용 구현, 프로그램 목록 JSON 렌더링
- [랜딩 페이지][] : swiper 슬라이드
- [로그인][], [로그아웃][] : 아이디, 비밀번호 유효성 검사 및 JSON 회원 목록 체크 후 로그인
- [회원 가입][], [아이디 찾기][], [비밀번호 찾기][] : 아이디, 비밀번호, 비밀번호 확인, 이메일, 필수 목록 체크 유효성 검사 및 통과 시 가입 완료(JSON 회원 목록에 추가)
- [프로필 선택][], [프로필 편집][] : 프로필 JSON 렌더링
- [검색 페이지][] : 실시간 인기 검색어 JSON 렌더링, 검색어 입력 시 검색어 목록 추가 및 개별 삭제, 모두 삭제 가능, 쿠키에 담아 검색어 저장 가능

### 화면 플로우  
1. [랜딩 페이지][] => [로그인][] => [프로필 선택][] => [메인 페이지][] => 검색 아이콘 클릭 => [검색 페이지][]
2. [랜딩 페이지][] => [로그인][] => ( => [아이디 찾기][], [비밀번호 찾기][], [회원 가입][] => [로그인][])   
3. 메뉴 => 프로필 아이콘 클릭 => 프로필 전환 클릭 => [프로필 선택][] => [프로필 편집][]  


[TAING 반응형 웹페이지_JS 프로젝트]: https://javascript-project-3.github.io/project-JS-3/client/index.html
[메인 페이지]: https://javascript-project-3.github.io/project-JS-3/client/index.html
[랜딩 페이지]: https://javascript-project-3.github.io/project-JS-3/client/landing.html
[로그인]: https://javascript-project-3.github.io/project-JS-3/client/login.html
[로그아웃]: https://javascript-project-3.github.io/project-JS-3/client/logout.html
[회원 가입]: https://javascript-project-3.github.io/project-JS-3/client/join.html
[아이디 찾기]: https://javascript-project-3.github.io/project-JS-3/client/findId.html
[비밀번호 찾기]: https://javascript-project-3.github.io/project-JS-3/client/findPw.html
[프로필 선택]: https://javascript-project-3.github.io/project-JS-3/client/profile_select.html
[프로필 편집]: https://javascript-project-3.github.io/project-JS-3/client/profile.html
[검색 페이지]: https://javascript-project-3.github.io/project-JS-3/client/search.html
