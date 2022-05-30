import { useMediaQuery } from 'react-responsive'

const Default = ({ children } : any) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
export default Default
