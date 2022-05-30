import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children } : any) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  return isDesktop ? children : null
}

export default Desktop
