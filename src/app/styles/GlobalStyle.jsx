import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html,
body {
    max-width: 100vw;
    overflow-x: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns='http://www.w3.org/2000/svg' height='1156.4' width='2048' version='1.1' xmlns:cc='http://creativecommons.org/ns%23' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 2048 1156.39' xmlns:dc='http://purl.org/dc/elements/1.1/'%3E%3Cdefs%3E%3ClinearGradient id='j'%3E%3Cstop stop-color='%23b3b3b3' offset='0'/%3E%3Cstop stop-color='%23b3b3b3' stop-opacity='0' offset='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='k'%3E%3Cstop stop-color='%23b15454' offset='0'/%3E%3Cstop stop-color='%23b15454' stop-opacity='0' offset='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='h'%3E%3Cstop stop-color='%23999' offset='0'/%3E%3Cstop stop-color='%23999' stop-opacity='0' offset='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='i'%3E%3Cstop stop-color='%23838383' offset='0'/%3E%3Cstop stop-color='%23838383' stop-opacity='0' offset='1'/%3E%3C/linearGradient%3E%3CradialGradient id='g' gradientUnits='userSpaceOnUse' cy='821.32' cx='77.857' gradientTransform='matrix(3.5493 0 .000015109 2.0644 -1266.3 -2170.8)' r='302'%3E%3Cstop stop-color='%2330ac30' offset='0'/%3E%3Cstop stop-color='%2330ac30' stop-opacity='0' offset='1'/%3E%3C/radialGradient%3E%3Cfilter id='c' style='color-interpolation-filters:sRGB' height='1.048' width='1.048' y='-.024' x='-.024'%3E%3CfeGaussianBlur stdDeviation='0.36'/%3E%3C/filter%3E%3ClinearGradient id='b' y2='972.43' xlink:href='%23i' gradientUnits='userSpaceOnUse' x2='-230.66' y1='997.68' x1='-273.44'/%3E%3CradialGradient id='a' xlink:href='%23h' gradientUnits='userSpaceOnUse' cy='983.03' cx='-244.48' gradientTransform='matrix(1.2921 .17699 -.14782 1.0792 216.73 -34.566)' r='18'/%3E%3Cfilter id='f' style='color-interpolation-filters:sRGB' height='1.048' width='1.048' y='-.024' x='-.024'%3E%3CfeGaussianBlur stdDeviation='0.32'/%3E%3C/filter%3E%3ClinearGradient id='e' y2='968.47' xlink:href='%23k' gradientUnits='userSpaceOnUse' x2='72.164' y1='1013.9' x1='72.164'/%3E%3CradialGradient id='d' xlink:href='%23j' gradientUnits='userSpaceOnUse' cy='997.26' cx='70.548' gradientTransform='matrix(1.0068 -1.0068 .92639 .92639 -924.34 144.43)' r='16'/%3E%3C/defs%3E%3Cg transform='translate(0 104.03)'%3E%3Cg%3E%3Crect stroke-linejoin='round' fill='%23a05a2c' transform='scale(-1)' ry='58.435' width='2044.9' stroke='%23a05a2c' stroke-linecap='round' y='-1050.8' x='-2046.5' height='1153.3' stroke-width='3.073'/%3E%3Crect transform='scale(-1)' height='965.71' width='1857.3' y='-957.02' x='-1952.7' fill='%23007430'/%3E%3Crect opacity='.3' transform='scale(-1)' height='965.71' width='4.6126' y='-957.02' x='-1519.2' fill='%23fff'/%3E%3Crect transform='scale(-1)' height='95.341' width='1722' y='8.6951' x='-1883.5' fill='%23a05a2c'/%3E%3Crect transform='scale(-1)' height='95.341' width='1722' y='-1052.4' x='-1883.5' fill='%23a05a2c'/%3E%3Crect transform='scale(-1)' height='965.71' width='1857.3' y='-957.02' x='-1952.7' fill='url(%23g)'/%3E%3Crect transform='scale(-1)' height='830.39' width='95.327' y='-889.36' x='-2048' fill='%23a05a2c'/%3E%3Crect transform='scale(-1)' height='830.39' width='95.327' y='-889.36' x='-95.327' fill='%23a05a2c'/%3E%3Cg fill='%235aa02c'%3E%3Cpath d='m1952.7 889.36-36.901-38.64v-754.68l36.901-37.071z'/%3E%3Cpath d='m95.327 889.36 36.901-38.64v-754.68l-36.901-37.071z'/%3E%3Cpath d='m1883.5-8.5225-38.274 36.561h-768.67l-15.557-36.561z'/%3E%3Cpath d='m150.04-8.3154 37.84 36.147h759.96l15.381-36.147z'/%3E%3Cpath d='m1883.5 957.02-38.274-36.561h-768.67l-15.557 36.561z'/%3E%3C/g%3E%3Cg transform='matrix(-3.0751 0 0 -3.0755 1229.4 3002.3)'%3E%3Ccircle stroke-linejoin='round' cx='-230.33' stroke-linecap='round' stroke='url(%23b)' filter='url(%23c)' cy='974.95' r='18' stroke-width='1.6'/%3E%3Ccircle opacity='.4' cy='974.95' cx='-230.33' r='18' fill='url(%23a)'/%3E%3C/g%3E%3Cg transform='matrix(0 -3.0755 3.0751 0 -1060.4 239.51)'%3E%3Ccircle stroke-linejoin='round' stroke-width='1.6' stroke-linecap='round' stroke='url(%23b)' filter='url(%23c)' cy='974.95' cx='-230.33' r='18'/%3E%3Ccircle opacity='.4' cx='-230.33' cy='974.95' r='18' fill='url(%23a)'/%3E%3C/g%3E%3Cg transform='matrix(3.0751 0 0 3.0755 803.74 -2050.6)'%3E%3Ccircle stroke-linejoin='round' cx='-230.33' stroke-linecap='round' stroke='url(%23b)' filter='url(%23c)' cy='974.95' r='18' stroke-width='1.6'/%3E%3Ccircle opacity='.4' cy='974.95' cx='-230.33' r='18' fill='url(%23a)'/%3E%3C/g%3E%3Cg transform='matrix(0 3.0755 -3.0751 0 3093.5 712.17)'%3E%3Ccircle stroke-linejoin='round' stroke-width='1.6' stroke-linecap='round' stroke='url(%23b)' filter='url(%23c)' cy='974.95' cx='-230.33' r='18'/%3E%3Ccircle opacity='.4' cx='-230.33' cy='974.95' r='18' fill='url(%23a)'/%3E%3C/g%3E%3Cpath d='m151.6 956.75 37.84-36.147h759.96l15.381 36.147z' fill='%235aa02c'/%3E%3Cg transform='matrix(-3.0751 0 0 -3.0755 1229.4 3002.3)'%3E%3Ccircle stroke-linejoin='round' stroke-linecap='round' stroke='url(%23e)' filter='url(%23f)' cy='983.12' cx='70.548' r='16'/%3E%3Ccircle opacity='.3' cx='70.548' cy='983.12' r='16' fill='url(%23d)'/%3E%3C/g%3E%3Cg transform='matrix(-3.0751 0 0 3.0755 1229.4 -2053.9)'%3E%3Ccircle stroke-linejoin='round' cx='70.548' stroke-linecap='round' stroke='url(%23e)' filter='url(%23f)' cy='983.12' r='16'/%3E%3Ccircle opacity='.3' cy='983.12' cx='70.548' r='16' fill='url(%23d)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg transform='translate(0 104.03)' fill='%23fff'%3E%3Cg transform='matrix(1.1959 0 0 1.1961 7.9063 -192.51)'%3E%3Ccircle cy='774.57' cx='34.255' r='5.0508'/%3E%3Ccircle cx='34.255' cy='557.39' r='5.0508'/%3E%3Ccircle cy='340.2' cx='32.235' r='5.0508'/%3E%3C/g%3E%3Cg transform='matrix(1.1959 0 0 1.1961 1960.6 -192.51)'%3E%3Ccircle cx='34.255' cy='774.57' r='5.0508'/%3E%3Ccircle cy='557.39' cx='34.255' r='5.0508'/%3E%3Ccircle cx='32.235' cy='340.2' r='5.0508'/%3E%3C/g%3E%3Cg transform='matrix(1.1959 0 0 1.1961 5.4716 -205.01)'%3E%3Cg transform='matrix(0 1 -1 0 1775.5 978.15)'%3E%3Ccircle cx='34.255' cy='774.57' r='5.0508'/%3E%3Ccircle cy='557.39' cx='34.255' r='5.0508'/%3E%3Ccircle cx='32.235' cy='340.2' r='5.0508'/%3E%3C/g%3E%3Ccircle cx='1012.4' transform='rotate(90)' cy='-265.52' r='5.0508'/%3E%3Ccircle transform='rotate(90)' cy='-482.7' cx='1012.4' r='5.0508'/%3E%3Ccircle cx='1012.4' transform='rotate(90)' cy='-699.89' r='5.0508'/%3E%3C/g%3E%3Cg transform='matrix(1.1959 0 0 1.1961 -25.28 -1271.2)'%3E%3Cg transform='matrix(0 1 -1 0 1775.5 978.15)'%3E%3Ccircle cy='774.57' cx='34.255' r='5.0508'/%3E%3Ccircle cx='34.255' cy='557.39' r='5.0508'/%3E%3Ccircle cy='340.2' cx='32.235' r='5.0508'/%3E%3C/g%3E%3Ccircle transform='rotate(90)' cy='-265.52' cx='1012.4' r='5.0508'/%3E%3Ccircle cx='1012.4' transform='rotate(90)' cy='-482.7' r='5.0508'/%3E%3Ccircle transform='rotate(90)' cy='-699.89' cx='1012.4' r='5.0508'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");;
}

main {
    position: relative;
    width: 100%;
    
}

a {
    color: inherit;
    text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
label,
p {
    color: #f9f8ee;
}


`;

export default GlobalStyle;
