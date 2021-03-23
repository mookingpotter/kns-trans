import axios from "axios"
import table2json from "../util/table2json"

const getNetAssetValue = async (fundName: string) => {

  const response = await axios.get('https://codequiz.azurewebsites.net/', {
    headers: {
      Cookie: 'hasCookie=true'
    }
  })

  let html: string = response.data;
  const from = html.indexOf('<table>')
  const tableEndTag = '</table>'
  const to = html.lastIndexOf(tableEndTag) + tableEndTag.length
  const table = html.substring(from, to)
  const fundArray = table2json(table)
  for (let i = 0;i < fundArray.length;i++) {
    const fundObject = fundArray[i]
    if (fundObject['Fund Name'] === fundName) {
      return fundObject['Nav']
    }
  }

  return null
}

const fundService = {
  getNetAssetValue
}
export default fundService