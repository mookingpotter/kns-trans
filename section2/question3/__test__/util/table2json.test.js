import table2json from '../../src/util/table2json'

describe('testing table2json.', () => {

  it('should return json array correctly.', () => {

    const table = `
    <table>
      <tr>
        <th>key1</th>
        <th>key2 </th>
      </tr>
      <tr>
        <td>value1</td>
        <td>value2</td>
      </tr>
      <tr>
      <td>value3</td>
      <td>value4</td>
    </tr>
    </table>`

    const jsonArray = table2json(table)
    expect(Object.keys(jsonArray[0])).toEqual(['key1', 'key2'])
    expect(jsonArray).toHaveLength(2)
  })

})