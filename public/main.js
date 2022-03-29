let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}`);
    request.onreadystatechange = () => {
        if ((request.readyState === 4) && (request.status === 200)) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n = n + 1; //请求成功才+1
        }
    }
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const object = JSON.parse(request.response); // 把符合json格式的字符串转换为对象形式。
            myName.textContent = object.name;
        }
    };
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            // responseXML 返回的是一个dom对象
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        };
    };
    request.send();
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html'); // 查找服务器的相关路由，也可以理解为创立链接。
    request.onload = () => {
        console.log('request.response');
        console.log(request.response);
        const div = document.createElement('div');
        div.innerHTML = request.response;
        document.body.appendChild(div);
    };
    request.onerror = () => {
        console.log('失败了！');
    };
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onload = () => {
        console.log('request.response');
        console.log(request.response);
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.body.appendChild(script);
    }
    request.onerror = () => {
        console.log('失败了！');
    }
    request.send();
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        // 当readyState这个属性的值发生改变时，就会触发onreadystatechange这个函数。
        if (request.readyState === 4) {
            // readyState的值为4，表示数据已经下载完成了。
            if (request.status >= 200 && request.status < 300) {
                // 数据已经下载完成，但是需要判断是成功还是失败。成功的request.status(数字状态码)值是2xx，失败的话是4xx,5xx都有可能。
                // 成功的话就创建style标签，并插入到head里面。
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style);
            } else {
                // 数据下载失败，就显示失败弹窗。
                alert('加载 CSS 失败！');
            }
        }
        console.log('request.readyState');
        console.log(request.readyState);
    }
    request.send();
}
