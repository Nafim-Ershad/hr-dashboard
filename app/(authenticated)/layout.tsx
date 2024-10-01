import NavigationBar from "../components/NavigationBar.Component"

export default function Layout({ children }: Readonly<{
    children: React.ReactNode
}>){
    return(
        <div className="w-full h-full max-h-screen flex items-center justify-start gap-2">
                <NavigationBar/>
                <section className="w-full h-full max-h-screen">
                    { children }
                </section>
        </div>
    )
}