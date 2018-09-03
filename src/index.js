import _ from 'lodash';
import './style.css';
import Myself from './myself.jpg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //Add the image to our existing div
    let me = new Image();
    me.src = Myself;
    element.appendChild(me);

    //打印xml
    console.log(Data);
    return element;
}
document.body.appendChild(component());