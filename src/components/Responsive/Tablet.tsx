import { useMediaQuery } from 'react-responsive'

const Tablet = ({ children } : any) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}

export default Tablet
