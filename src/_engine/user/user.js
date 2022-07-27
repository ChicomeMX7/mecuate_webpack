import { _cookie } from '../storage/storage.js'

const user = (() => {
    const user_cookies = _cookie.get('user')
    return user_cookies ? user_cookies : {}
})()

export { user }
