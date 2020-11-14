import React from "react";
import ReactDOM from 'react-dom'
import Nav from 'react-bootstrap/Nav';

const FooterPage = () => {
    return (
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="#">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

//export default FooterPage;
document.addEventListener('turbolinks:load', () => {
    const app = document.getElementById('footer')
    app && ReactDOM.render(<FooterPage />, app)
})
