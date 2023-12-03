// Write your code here.
import './index.css'
import {deflate} from 'zlib'

const BannerCardItem = props => {
  const {BannerDetails} = props
  const {headerText, description, className} = BannerDetails
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="desciption">{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}
export default BannerCardItem
