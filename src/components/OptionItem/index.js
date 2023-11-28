import {Option} from './styledComponents'

const OptionItem = props => {
  const {details} = props
  const {id, displayText} = details

  return <Option value={id}>{displayText}</Option>
}

export default OptionItem
