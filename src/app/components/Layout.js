import { Header } from "./header"

export const Layout = ({children}) => {
    return(
        <div className="flex flex-col w-full" data-theme="light">
            <Header/>
            {children}
        </div>
    )
}