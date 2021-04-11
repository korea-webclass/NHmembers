## NH멤버스 - 반응형 포트폴리오
본 프로젝트는 웹사이트 메인 부분만 카피하여 반응형으로 작업했습니다. <br>
시뮬레이션으로 디자인 파일 받아서 반응형으로 작업했습니다.

## 소요 기간
4월 5일 ~ 4월 8일

## 사용 기술
HTML5 <br>
CSS3

## 미디어 쿼리 분기점
```css
@media all and (min-width: 1001px) and (max-width: 1097px) {}
@media all and (min-width: 758px) and (max-width: 1000px) {}
@media all and (min-width: 0px) and (max-width: 757px) {}
```

## 공통적으로 적용되는 스타일
```css
/* 공통 */
.center {max-width: 94.1rem; margin: 0 auto; padding: 0 2.1rem;}
.desc {font-size: 3.5rem; line-height: 4.9rem; font-weight: 300; letter-spacing: -1px;}
.text {font-size: 1.076923rem; margin: 1.5rem 0 0 0; line-height: 1.8rem;}
strong {font-size: 3.5rem;}
.control .circle {float: left; display: block; width: 10px; height: 10px; margin: 0 8px 0 0; border: 2px solid #000; border-radius: 10px;}
.control .view-circle {background-color: #000;}
.more-link {display: inline-block; background-color: #098488; height: 70px; line-height: 70px; padding: 0 72px; border-radius: 35px;}
.more-link > span {font-weight: 700; font-size: 16px; color: #fff;}
```

## 이미지 스프라이트(image sprite) 기법 사용
기존 웹사이트는 각각의 요소에 들어가는 이미지를 낱개로 사용하고 있었습니다. <br>
스프라이트 기법으로 이미지를 하나의 파일로 제작 후에 `background-position` 을 사용하여 이미지를 배치하였습니다. <br>

![test-sprite](https://user-images.githubusercontent.com/65770361/114313874-4ea4e980-9b33-11eb-9a4b-69fe781ead08.png)
