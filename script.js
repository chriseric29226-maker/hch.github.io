# 홍창호 연구자 포트폴리오

GitHub Pages에 바로 배포할 수 있는 정적 웹사이트입니다.

## 파일 구조

```text
index.html
style.css
script.js
assets/
  profile.jpg
  esports-bg.jpg
  cv.pdf
```

## GitHub 저장소 생성

1. GitHub에서 `New repository`를 누릅니다.
2. 가장 깔끔한 주소를 원하면 저장소 이름을 `본인아이디.github.io`로 설정합니다.
3. 저장소 공개 범위를 `Public`으로 설정합니다.
4. 이 프로젝트의 파일을 저장소 최상위 경로에 업로드합니다.
5. `Settings → Pages`에서 다음 항목을 설정합니다.
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`
6. 저장 후 배포가 완료될 때까지 잠시 기다립니다.

## 반드시 수정할 항목

### GitHub 주소
`index.html`의 아래 코드를 본인의 실제 GitHub 주소로 변경합니다.

```html
<a href="https://github.com/" ...>GitHub</a>
```

### Google Scholar / LinkedIn
현재 주소가 `#`으로 설정되어 있습니다. 계정 주소가 있으면 실제 URL로 변경합니다.

### 문의 폼
문의 폼은 Formspree 연결을 전제로 합니다.

```html
action="https://formspree.io/f/YOUR_FORM_ID"
```

Formspree에서 발급받은 폼 ID로 `YOUR_FORM_ID`를 교체해야 실제 메시지가 전송됩니다.

### 프로필 사진
`assets/profile.jpg`는 제공된 디자인 이미지에서 잘라낸 미리보기용 이미지입니다.
가장 선명한 결과를 위해 원본 프로필 사진으로 교체하는 것을 권장합니다.

### CV
`assets/cv.pdf`를 본인의 실제 CV PDF 파일로 교체합니다.
