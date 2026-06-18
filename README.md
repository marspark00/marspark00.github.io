# 이력서

Astro와 TypeScript로 만든 GitHub Pages용 이력서 사이트입니다.

## Astro 구동방법

```bash
npm install
npm run dev
npm run build
```

## 이력서 갱신방법

이력서 내용은 `src/data/resume.json`에서 수정합니다.

- `profile`: 이름, 직무, 이메일, 소개글, 기타 사항
- `experience`: 경력
- `projects`: 프로젝트
- `skills`: 기술 스택
- `education`: 교육
- `certificates`: 자격증

이미지는 `public/images/profile.jpg`를 교체하면 웹페이지에 반영됩니다.
