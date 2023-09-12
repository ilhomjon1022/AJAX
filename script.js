

const uzs = document.querySelector('#uzs'),
    usd = document.querySelector('#usd')

uzs.addEventListener('input', (e) => {
    const request = new XMLHttpRequest()

    // console.log(e);

    request.open('GET', 'json/current.json')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    request.send()

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request,response)
            const data = JSON.parse(request.response)
            usd.value = (+uzs.value / data.current.usd).toFixed(2)
        }else{
            usd.value = 'Something went wrong'
        }
    })

    // status-  200-ok, 404-not found, 500-server, 400-client error
    // statustext- ok, not found, server, client error
    // respnse- requestdan kelgan javob
    // readyState-XMLHttp ning to'g'ri bajarilganligi haqida ma'lumot
})