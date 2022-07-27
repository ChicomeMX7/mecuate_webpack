import { estatico } from '../network/apis.js'

function a_BUILD() {
    let v = [w_.grado, w_.task]
    let s = JSON.stringify(v)

    var r = new Request('/core_v1-3/db/php/aHtml.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: s,
        mode: 'cors',
    })
    d_.write(
        '<!doctype html><html lang="es" dir="ltr"><head></head><body></body></html>'
    )
    a1_()
    fetch(r)
        .then((res) => res.json())
        .then((rst) => {
            let head = d_.createRange().createContextualFragment(rst[0])
            d_.getElementsByTagName('head')[0].appendChild(head)

            let body = d_.createRange().createContextualFragment(rst[1])
            d_.getElementsByTagName('body')[0].appendChild(body)

            setTimeout(() => {
                new Oko(_ok)
            }, 1200)
        })
        .catch((e) => {
            console.error('Error:', e)
        })
}

const build = (param) => {
    const endpoint = '/core/aHtml:latest'
    const params = { responseType: 'json', params: param }
    
    return Promise.resolve(estatico.get(endpoint, params))
}

export { build }
