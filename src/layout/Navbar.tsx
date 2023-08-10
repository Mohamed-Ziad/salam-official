"use client";
import Link from "next/link";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { usePathname } from 'next/navigation'


interface IProps {
  lang: any
  transaltes: any
}

export default function Header(props: IProps) {

  const pathName = usePathname();
  const currentLang = pathName.split("/")[1] === "ar" ? 'en' : 'ar'
  // const changeLang = pathName.split("/")[1] === "ar" ? 'en' : 'ar';
  const changeLang = pathName.includes("ar") ? pathName.replace("ar", "en") : pathName.replace("en", "ar");

  const { links } = props.transaltes.layout.header;
  const { auth } = props.transaltes;

  return <>
    {/* <h1>{changeLang}</h1> */}
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={props.lang === "ar" ? 'me-auto' : 'ms-auto'}>
            <Link className="nav-link" href={`/${props.lang}`}>{links.home}</Link>
            <Link className="nav-link" href={`/${props.lang}/products`}>{links.products}</Link>
            {/* <Link className="nav-link" href={`/${props.lang}/pricing`}>{links.pricing}</Link> */}
            {/* <Link className="nav-link" href={`/${props.lang}/about`}>{links.about}</Link> */}
            <Link className="nav-link" href={`/${props.lang}/contact`}>{links.contact}</Link>
          </Nav>
          <div className="d-flex">
            <Link className="btn btn-outline-light rounded-pill" href={ changeLang}>{currentLang === "ar" ? "العربية" : "English"}</Link>
            <Button variant="outline-light" className="mx-2 rounded-pill">{auth.login}</Button>
            <Button variant="light" className="rounded-pill">{auth.register}</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}