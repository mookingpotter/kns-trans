import {DOMParser} from 'xmldom'
import xpath from 'xpath'

const table2json = (table: string) => {

  const doc = new DOMParser().parseFromString(table)
  const thNodes = xpath.select('.//*[self::th]/text()', doc)
  const headers: Array<string> = []
  thNodes.forEach((thNode)=>{
    headers.push(thNode.toString().trim())
  })
  const tdNodes = xpath.select('.//*[self::td]/text()', doc)
  const jsonArray: Array<any> = []
  for (let i = 0;i < tdNodes.length;i+=1) {

    const headerIndex = i%headers.length
    if (headerIndex === 0) {
      jsonArray.push({})
    }

    const jsonObj = jsonArray[jsonArray.length-1]
    const key =  headers[headerIndex]
    const value = tdNodes[i].toString().trim()
    jsonObj[key] = value

  }

  return jsonArray
}

export default table2json