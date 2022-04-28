import './styles.css'
import IMAGE from './father.png'
import { ClickCounter } from './ClickCounter'
import  Button from "@mui/material/Button"

export const App = () => {
    return <> 
    <h1>test React TypeScript Webpack Starter Templates - {process.env.NODE_ENV} {process.env.name}</h1>
    <img src={IMAGE} alt="deneme" width="300" height="300" />
    <ClickCounter/>
    <Button variant="contained">Hello World</Button>
    </>
}