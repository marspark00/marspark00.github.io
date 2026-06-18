# marspark00.github.io

Astro와 TypeScript로 만든 GitHub Pages용 이력서 사이트입니다. 이력서 내용은 JSON 데이터로 분리되어 있어 코드 수정 없이 경력, 프로젝트, 스킬, 학력, 자격증 정보를 갱신할 수 있습니다.

## 기술 스택

- Astro
- TypeScript
- CSS
- GitHub Pages / GitHub Actions

## 프로젝트 구조

```text
src/
  components/       # 재사용 UI 컴포넌트
  data/resume.json  # 이력서 원본 데이터
  data/resume.ts    # JSON 데이터 타입 래퍼
  pages/index.astro # 메인 이력서 페이지
  styles/global.css # 전역/반응형 스타일
public/
  images/           # 배포용 이미지와 favicon
.github/workflows/  # GitHub Pages 배포 워크플로우
```

## 로컬 실행

```bash
npm install
npm run dev
```

개발 서버가 실행되면 브라우저에서 안내되는 로컬 주소로 접속합니다. 일반적으로 `http://localhost:4321` 또는 `http://127.0.0.1:4321`입니다.

## 빌드 및 검증

```bash
npm run build
npm run preview
npm audit --audit-level=low
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

## 배포

`main` 브랜치에 push하면 `.github/workflows/deploy.yml` 워크플로우가 Astro 정적 사이트를 빌드하고 GitHub Pages에 배포합니다.

GitHub 저장소 설정에서 `Settings > Pages > Source`가 `GitHub Actions`로 설정되어 있어야 합니다.
