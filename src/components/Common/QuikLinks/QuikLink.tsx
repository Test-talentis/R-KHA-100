
import { TQuickLinks } from '@types'
import { Link } from 'react-router-dom'
import { List } from '@components/ui'

function QuikLink({text, href}: TQuickLinks) {
  return (
    <Link to={href}>
    <List title={text}/>
    </Link>
  )
}

export default QuikLink