export default function Navbar() {
    return(
        <nav className="nav">
            <a href="/" className="site-title">Reynaldo's Portfolio</a>
            <ul>
                <CustomLink href="/">About Me</CustomLink>
                <CustomLink href="/portfolio">Portfolio</CustomLink>
                <CustomLink href="/contact">Contact</CustomLink>
                <CustomLink href="/resume">Resume</CustomLink>
            </ul>
        </nav>
    )
}
function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;
    return(
        <li className= {path === href ?"active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}