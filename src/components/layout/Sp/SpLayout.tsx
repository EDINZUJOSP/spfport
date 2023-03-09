import SpFooter from "./partials/SpFooter"
import SpHeader from "./partials/SpHeader"


const SpLayout = ({ children }) => {
  return (
    <>
      <SpHeader />
        <main className="flex flex-col flex-grow">{children}</main>
      <SpFooter />
    </>
  )
}


export { SpLayout }
