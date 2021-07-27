import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = (props) => {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer amount={props.footerAmount}/>
		</>
	)
}

export default Layout;