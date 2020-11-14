// CSS Custom Styles
import '../assets/css/Footer.css';

const Footer = props => {
	// const { movieData } = props;
	return (
    <footer>
      <div className="row fixed-bottom bg-dark mx-0 pb-4 align-items-center">
        <div className="col-7">
          <div className="row">
            <div className="col-12">
              <p className="my-0 text-white text-truncate">
                <strong>Average Expenses</strong>
              </p>
            </div>
            <div className="col-12">
              <p className="my-0 text-white-50 text-truncate">
                <small>MONTHLY</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <p className="text-right text-white my-0 text-truncate">
            <strong>279,90 €</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;