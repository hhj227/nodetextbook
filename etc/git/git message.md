# Git Commit Message 작성 요령

출처: https://djkeh.github.io/articles/How-to-write-a-git-commit-message-kor/

### 커밋 메시지 목표

1. 커밋 로그 가독성
2. 더 나은 협업과 리뷰 프로세스
3. 더 쉬운 코드 유지보수


### 1. 제목과 본문을 한 줄 띄워 분리하기

50자 이내의 요약문장
빈 줄 하나
설명문

```
git log --oneline

git short log
```

### 2. 제목은 영문 기준 50자 이내로

### 3. 제목 첫 글자를 대문자로

### 4. 제목 끝에 . 금지

### 5. 제목은 `명령조`로

git 빌트인 컨벤션 따르기

제목 앞에 다음 문장 넣었을 때 어울리나 확인
```
If applied, this commit will {제목}
```

### 6. Github - 제목(이나 본문)에 이슈 번호 붙이기

```
Refactor #28 - getPersonID()
Test #411 - Company class and its public methods
Implement #58 - Company 클래스 메소드 3개
```

### 7. 본문은 영문 기준 72자마다 줄 바꾸기

### 8. 본문은 `어떻게`보다 `무엇을`, `왜`에 맞춰 작성하기

### 9. 커밋 메시지로 github 이슈 자동 종료

```
키워드 #번호
```

close
closes
closed
fix
fixes
fixed
resolve
resolves
resolved


`close` 계열은 일반 개발 이슈
`fix` 계열은 버그 픽스나 핫 픽스 이슈
`resolve` 계열은 문의나 요청 사항에 대응한 이슈

