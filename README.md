# 원티드 프리온보딩 프론트엔드 - 사전 과제
이 레파지토리는 원티드 프리온보딩 프론트엔드 과정 사전 과제로서, 로그인/회원가입 및 Todolist를 구현하는 프로젝트입니다.

## 지원자
홍종문

## 실행방법
git clone 후, npm install & npm start 명령어를 통해 실행시켜주세요

## 과제
1. 로그인 / 회원가입

2. TODO LIST

## 구현 기능
* ✅Assignment 1
  * 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
  * 이메일 조건: @ 포함
  * 비밀번호 조건: 8자 이상

* ✅Assignment 2
  *  회원가입 페이지에서 회원가입 버튼 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동

* ✅Assignment 3
  * 로그인 페이지에서 로그인 버튼 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동
  * 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답
  * 응답받은 JWT는 로컬 스토리지에 token으로 저장 저장

* ✅Assignment 4
  * 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  * 로컬 스토리지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트
  * 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 /signin 경로로 리다이렉트

  * ✅ Assignment 5
  * /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 구현
  * 투두 리스트의 내용과 완료 여부 표시
  * 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가

* ✅ Assignment 6
  * 투두 리스트의 수정, 삭제 기능 구현
  * 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화 및 내용 수정
  * 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출 및 취소
  * 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제

## 배포 링크

(https://reliable-granita-4c30ae.netlify.app)