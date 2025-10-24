"use client"
import { Button } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
function Nav() {
  const { toggleColorMode } = useColorMode()
  return (
    <>
      <nav className="navbar">
        <div className="container">
            <div className="nav-container">
                <div className="navbar-logo">
                    <h1 className="navbar-icon">Jose Mari Victorio G. Genuino</h1>
                </div>
                <div className="navbar-links">
                  {/* <a href="src\assets\Resume - Genuino, Jose Mari Victorio G..pdf" download className="download-btn">Download resume</a> */}
                  <Button variant="outline" onClick={toggleColorMode}>
                          Toggle Mode
                  </Button>  
                    {/* <a href="/">Home</a>
                    <a href="/">Projects</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a> */}
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Nav