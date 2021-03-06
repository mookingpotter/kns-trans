import fundService from '../../src/service/fund'

jest.mock('axios', () => ({
  get: async () => {
    return {
      data: `<!DOCTYPE html><html><head><title>Code Quiz</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>Code Quiz</h1><script>function logout() {document.cookie = 'hasCookie=';location.reload();}</script><p>Funds NAV</p><table><tbody><tr><th>Fund Name</th><th>Nav </th><th>Bid</th><th>Offer</th><th>Change</th></tr><tr><td>B-INCOMESSF</td><td>10.0548</td><td>10.0549</td><td>10.0548</td><td>0.0107</td></tr><tr> <td>BM70SSF </td><td>9.9774</td><td>9.9775</td><td>9.9774</td><td>0.0927</td></tr><tr> <td>BEQSSF</td><td>11.247</td><td>11.2471</td><td>11.247</td><td>0.1319</td></tr><tr> <td>B-FUTURESSF</td><td>11.443</td><td>11.4431</td><td>11.443</td><td>0.1488</td></tr></tbody></table><input type="button" value="Logout" onclick="logout()"></body></html>`
    }
  }
}))

describe('testing fundService.', () => {

  describe('testing getNetAssetValue method.', () => {

    it('should return NAV value of BM70SSF', async () => {
        const nav = await fundService.getNetAssetValue('BM70SSF')
        expect(nav).toStrictEqual('9.9774')
      })
  })

})