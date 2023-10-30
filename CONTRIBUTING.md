# 의미 있는 commit message 작성 방법

## 명령형 사용

commit message 앞에 fix, refactor, add, remove 와 같은 명령형을 사용

commit message는 다음의 문장 뒤에 이어져야 한다:

> "If applied, this code will...' 

또한 다른 개발자에게 어떤것을 하는지 알려주어야 한다, 예를 들어:

> "If applied, this code will fix 로그인 버튼이 안 보이는 문제"

## 짧게 적자

commit message 는 대체로 50자 이내로 적는다.

개발자나 reviewer의 입장이 되어 보자. Git log를 볼때 어떤 것을 알고 싶은지 생각해보자.

- 뭐를 했는지?
- 왜 했는지?
- code base에 어떤 영향이 있는지?

간결하지만 유용한 commit message의 예시:

> fix 로그인 버튼이 안 보이는 문제

## commit message를 간결하지만 도움이 되게 하는 방법

commit message 에는 commit description을 추가하여 뭐를 했는지 더 구체적으로 설명 할 수 있다.

commit message 밑에 빈 줄을 추가하고 더 구체적인 설명을 할 수 있다:

> fix 로그인 버튼이 안 보이는 문제
>
> - 로그인 form 확인 업데이트
> - 로그인 버튼 스타일 업데이트

인제 다른 개발자들이 git log나 commit 을 리뷰하거나 코드를 이전 상태로 되돌릴때 어떤 효과를 주는지, 그리고 문제가 생길수 있는지 더 잘 알 수 있다.

## 도움이 안되는 commit message 예시

- `fixed 버그` - 어떤 버그를 고쳤지에 대한 이야기가 없기 때문에 git history / log에 도움이 되지 않는다. 실제로 이 commit이 뭘하는지 알기위해서는 각 commit을 일일이 다 열어봐야 이해 할수 있다.
- `PR 코멘트 때문에 refactor 함` - 뭐가 수정되었는지에 대한 설명이 없음. Pull request를 직접 보면서 뭐가 바뀌었는지 직접 찾거나 commit을 열어봐야 한다.
- `fix 이전 commit` - 문맥이 부족함
- `테스트 통과하게 수정` - 어떤 테스트를 말하는지 알 수 없음

위의 예시들은 구체적이지 않고 필요한 정보를 빠뜨렸으며 문맥이 없다. 그렇기 때문에 팀원들이 이 commit이 뭐를 했는지 이해하기 위해 추가적인 노력이 필요하다.

# commit 전략 세우기

## 작고 구체적인 commit 하기

작은 커밋들은 문제가 생겼을때 이전 상태로 되돌리기 쉽다. 만약 한 commit이 여러 곳의 코드를 수정한다면 되돌릴때 많은 code를 잃게 된다.

또한 하나의 목적과 관련있는 commit을 이해하기가 훨씬 쉽다.
