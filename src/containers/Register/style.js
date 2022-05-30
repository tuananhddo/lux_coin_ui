import styled from 'styled-components'

export const Wrapper = styled.div`
   width:100%;
   height: 100vh;
   display: flex;
`

export const Header = styled.div`
   width:100%;
   margin-bottom: 1rem;
`
export const Content = styled.div`
   width:100%;
`

export const Footer = styled.div`
   width:100%;
`

export const Slide = styled.div`
   width:100%;
   height: 100%;

   img{
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`

export const SliderForm = styled.div`
   width:100%;
   display: flex;
   height: 100%;

   .left-form{
      position: relative;
      .MuiMobileStepper-positionStatic{
         position: absolute;
         bottom:20px;
         background: transparent;
         width: 100%;
         display: flex;
         justify-content: center;
         padding: 0;
      }
   }

   @media only screen and (max-width: 768px) {
         & {
            flex-direction: column;

            .left-form{
               width: 100%;
               min-height: 300px;
               max-height: 350px;
               overflow: hidden;
            }
            .right-form{
               width: 100%;
               height: 100%;

               .form-container{
                  width: auto;
                  padding: 20px 20px 40px 20px;

                  .footer-element{
                     .footer-text{
                        position:inherit;
                        margin-top: 2rem;
                     }
                  }
               }
            }
         }
   }
`

export const LeftForm = styled.div`
   width:50%;
   height: 100%;
`

export const RightForm = styled.div`
   width: 50%;
   background-image: linear-gradient(to bottom right, #212121, #212121);

   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
`

export const DefaultForm = styled.div`
   /* width:50%; */
   width: 100%;
   background-image: linear-gradient(to bottom right, #212121, #212121);
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   padding: 20px 20px 50px 20px;
`

export const ImageForm = styled.div`
   /* width:50%; */
   width: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   padding: 20px 20px 50px 20px;
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   /* background:rgba(25, 24, 24, 0.32); */
   box-shadow: 0px 1px 13px 2px rgba(251, 251, 251, 0.09);

   .form-container{
      @media only screen and (min-width: 768px) {
         & {
            backdrop-filter: blur(4px);
            background-color: rgba(0, 0, 0, 0.4);
            padding: 20px;
            border-radius: 10px;

            .footer-element{
               .footer-text{
                  position:inherit;
                  margin-top: 2rem;
               }
            }
         }
      }
   }
`

export const FormContainer = styled.div`
   max-width: 500px;
   width: 100%;
`