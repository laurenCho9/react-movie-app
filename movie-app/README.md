# React-Project-MovieListSite

리액트 + YTS API\_영화 목록 조회 사이트

YTS.mx API 사용 - https://yts.mx/

# 🖥 프로젝트 소개

Movie List Site 평점 8.5 이상의 영화 목록 조회 사이트입니다.

#### 7.7강 github pages 배포

- npm i gh-pages: 결과물을 github pages에 업로드할 수 있게 해주는 패키지
- npm run build: 빌드 폴더 생성, 코드 압축 및 최적화
- git remote -v: 레포지토리 이름 조회
- npm run deploy: 배포 실행
- package.json에 입력한 homepage: 링크로 접속. 2분 뒤 배포된 게 열림.
- 흰 페이지만 뜨고 콘솔창 에러: Error with Permissions-Policy header: Origin trial controlled feature not enabled: 'interest-cohort'.
  스택 오버플로우에서 <Home /> 컴포넌트에 해당하는 라우트의 path="/"에 path="/desa" 로 경로를 정의해야 한다고 하여 입력 후 해결.
  (문제는 오류 메시지가 아니라 반응 라우터를 사용하고 있기 때문에 github repo 이름에 따라 경로를 정의해야 합니다.)
  -> /home으로 해도 잘 되었고, 다시 /로 바꿨는데도 잘 되었다. 단지 시간 문제였던 것 같다.

##### CoinTracker API

https://api.coinpaprika.com/v1/tickers

#### MovieList API

https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
