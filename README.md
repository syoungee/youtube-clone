### REACT YOUTUBE CLONE CODING

#### 기능 정리

- 전체 video list 보여주기 ✔️
- video list에서 video 이름, 생성한 채널 이름, 올라간 시간 데이터 보여주기 ✔️
- video 검색 기능 ✔️
- UI 반응형(사이트가 작아지면 영상 3줄 -> 2줄 -> 1줄로 정렬) ✔️
- video 클릭 시 해당 영상으로 이동(router로 구현) ✔️
- video 클릭 시 상세 화면 UI구현(관련 영상들도 노출) ✔️
- 상세 화면 UI 반응형 구현
- 상세 화면 채널 UI 구현 -> 프로필 라운드 처리 및 좌우 여백
- 상세 화면 realted videos ui 한 줄로 처리 -> 커지면 오른쪽 & 작아지면 아래로

#### 구현 과정에서 겪은 시행착오들
api를 통해 데이터를 무지성으로 가져오려고 했는데 어느 순간 403 error 발생!
호출할 수 있는 api양이 한정되어 있기 때문
-> public/data폴더에 sampleData.json으로 더미데이터를 넣어두었다.

