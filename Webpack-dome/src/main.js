import count  from "./js/count";
import sum  from "./js/sum";

// 需要webpack打包，必修要引入
import  "./css/index.css";
import  "./less/index.less";
// stylus不好用
import  "./stylus/index.styl";
// sass不好用
// import  "./sass/index.sass";
import  "./sass/index.scss";

console.log(count(6,3));
console.log(sum(5,4,6));