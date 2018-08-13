export class UtilService {
  getCookies() {
    return document.cookie.split(';').filter(c => c.split('=')[0] === 'token');
  }
}
