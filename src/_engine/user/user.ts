import { _cookie } from '../storage/storage'

const user = (() => {
    const user_cookies = _cookie.get('user')
    return user_cookies ? user_cookies : {}
})()

export { user }
