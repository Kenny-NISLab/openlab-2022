<img src="https://user-images.githubusercontent.com/49851726/118398303-f497c680-b692-11eb-8d6a-cbe5ba9465e5.png" alt="nislab-openlab2021 cover">

# <p align="center">NISLAB OpenLAB 2021 App</p>

<div align="center">
<a href="https://github.com/Kenny-NISLab/openlab-2021/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Kenny-NISLab/openlab-2021" alt="license"></a>
<a href="https://github.com/Kenny-NISLab/openlab-2021"><img src="https://img.shields.io/github/forks/Kenny-NISLab/openlab-2021?style=social" alt="forks"></a>
<a href="https://github.com/Kenny-NISLab/openlab-2021"><img src="https://img.shields.io/github/stars/Kenny-NISLab/openlab-2021?style=social" alt="stars"></a>
</div>

<div align="center">
<a href="https://github.com/Kenny-NISLab/openlab-2021/commits/main"><img src="https://img.shields.io/github/last-commit/Kenny-NISLab/openlab-2021" alt="last-commit"></a>
<a href="https://github.com/Kenny-NISLab/openlab-2021/releases"><img src="https://img.shields.io/github/v/release/Kenny-NISLab/openlab-2021" alt="release"></a>
<a href="https://github.com/Kenny-NISLab/openlab-2021"><img src="https://img.shields.io/github/languages/top/Kenny-NISLab/openlab-2021" alt="languages"></a>
</div>

<div align="center">
<a href="https://github.com/Kenny-NISLab/openlab-2021/actions/workflows/push_main.yml"><img src="https://github.com/Kenny-NISLab/openlab-2021/workflows/Push%20Main%20Branch/badge.svg" alt="actions"></a>
<a href="https://github.com/Kenny-NISLab/openlab-2021/actions/workflows/pr_main.yml"><img src="https://github.com/Kenny-NISLab/openlab-2021/workflows/Pull%20Request%20Main%20Branch/badge.svg" alt="actions"></a>
<a href="https://github.com/Kenny-NISLab/openlab-2021/actions/workflows/push_develop.yml"><img src="https://github.com/Kenny-NISLab/openlab-2021/workflows/Push%20Develop%20Branch/badge.svg" alt="actions"></a>
<a href="https://github.com/Kenny-NISLab/openlab-2021/actions/workflows/pr_develop.yml"><img src="https://github.com/Kenny-NISLab/openlab-2021/workflows/Pull%20Request%20Develop%20Branch/badge.svg" alt="actions"></a>
</div>

## <p align="center"><a href="https://github.com/Kenny-NISLab/openlab-2021/graphs/contributors">Contributors</a></p>

<div align="center">
<a href="https://github.com/Kenny-NISLab/openlab-2021/graphs/contributors"><img src="https://img.shields.io/github/contributors/Kenny-NISLab/openlab-2021" alt="contributors"></a>
</div>

<div align="center">
<a href="https://github.com/nkthkr"><img src="https://avatars.githubusercontent.com/u/55532835?v=4" alt="nkthkr" height="120px"></a>
<a href="https://github.com/kogepanh"><img src="https://avatars.githubusercontent.com/u/49851726?v=4" alt="kogepanh" height="120px"></a>
</div>

---

## <p align="center">Overview</p>

<p align="center">This is an application for making a reservation for a visit our laboratory, taking into account the countermeasure against the new coronavirus infection in conjunction with the holding of the laboratory open lab.</p>

<p align="center">The website is currently closed. (https://openlab.nislab.info/)</p>

## <p align="center">Assets</p>

<p align="center">
<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/49851726/118399748-98847080-b699-11eb-856f-3fa39e8d2614.png" alt="vuejs" height="75px"></a>
<a href="https://vuetifyjs.com/" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/49851726/118399751-9a4e3400-b699-11eb-808d-66515487c281.png" alt="vuetify" height="75px"></a>
<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/49851726/118399749-99b59d80-b699-11eb-9c17-aff36a255c09.png" alt="nodejs" height="75px"></a>
<a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/49851726/118399860-206a7a80-b69a-11eb-98ad-ba63047e2ccb.png" alt="firebase" height="75px"></a>
<a href="https://analytics.google.com/analytics/web" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/49851726/118399753-9ae6ca80-b699-11eb-825e-1b444a70c0c4.png" alt="google analytics" height="75px"></a>
<a href="https://github.com/actions" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/49851726/118399755-9b7f6100-b699-11eb-9f0c-3ede6da6ca90.png" alt="github actions" height="75px"></a>
</p>

## <p align="center">Architecture</p>

![Architecture](https://user-images.githubusercontent.com/49851726/105703760-0ec95f80-5f51-11eb-9ace-2b1514595ec2.png)

## <p align="center">Preview</p>

![preview](https://user-images.githubusercontent.com/49851726/105704969-e5a9ce80-5f52-11eb-8c8d-8bd0263a3bb9.gif)

---

## Build Set-up

### Create `.env` file

```.env
VUE_APP_FIREBASE_API_KEY=
VUE_APP_FIREBASE_AUTH_DOMAIN=
VUE_APP_FIREBASE_DATABASE_URL=
VUE_APP_FIREBASE_PROJECT_ID=
VUE_APP_FIREBASE_STORAGE_BUCKET=
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=
VUE_APP_FIREBASE_APP_ID=
VUE_APP_FIREBASE_MEASUREMENT_ID=
```

### Create `GitHub Actions secrets`

```.env
ENV_PROD=
FIREBASE_TOKEN=
SLACK_WEBHOOK_URL=
```
