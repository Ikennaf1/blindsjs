const Footer = () => {
    return (
        <footer className="footer mt-24 pb-12 border-t">
            <div className="flex items-center justify-center">
                <div>
                    <div className="mt-8 text-center">
                        &copy; {new Date().getFullYear()} Blinds
                    </div>
                    <div className="text-center mt-5">
                        <a className="m-5" href="#">Get started</a>
                        <a className="m-5" href="#">Changelog</a>
                        <a className="m-5" href="#">License</a>
                        {/* <a className="m-5" href="#">Templates</a>
                        <a className="m-5" href="#">Components</a> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
