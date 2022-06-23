import { Cookies } from 'react-cookie'
import { MecuateApiProvider,baseConfig } from '../../api/network'


export const _read_auth = () => {
  const cookies = new Cookies()
  return cookies.get('user')
}

export const _request_token = () => {
    const cookies = new Cookies()

}
/* 
set(name, value, [options])
Set a cookie value

name (string): cookie name
value (string|object): save the value and stringify the object if needed
options (object): Support all the cookie options from RFC 6265
path (string): cookie path, use / as the path if you want your cookie to be accessible on all pages
expires (Date): absolute expiration date for the cookie
maxAge (number): relative max age of the cookie from when the client receives it in seconds
domain (string): domain for the cookie (sub.domain.com or .allsubdomains.com)
secure (boolean): Is only accessible through HTTPS?
httpOnly (boolean): Can only the server access the cookie? Note: You cannot get or set httpOnly cookies from the browser, only the server.
sameSite (boolean|none|lax|strict): Strict or Lax enforcement
*/