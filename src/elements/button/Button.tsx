import { ButtonStyle} from './ButtonStyle'

interface ButtonProps  {
    label: string;
    type?: string;
  }

 const refresh = () => window.location.reload()

 const Button: React.FC<ButtonProps> = ({ label, type }) => ( 
   
        <>
        <ButtonStyle onClick={refresh}> {label} </ButtonStyle>
        </>
    )
    

export default Button