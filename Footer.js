import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
				<h4>company name</h4>
  	 			<p>
                    Something about company. May be a brief description. Its your choice 
                    what to write here. 
                </p>
  	 		</div>
			
			<div className="footer-col">
				<h4>Quick Links</h4>
				<ul>
					<li><a href="#">about us</a></li>
					<li><a href="#">our services</a></li>
					<li><a href="#">privacy policy</a></li>
					<li><a href="#">affiliate program</a></li>
				</ul>
			</div>

  	 		<div className="footer-col">
  	 			<h4>Address</h4>
  	 			<p className="addr">
					78, Satmasjid Road
					(Road#27),Dhanmondi,
					Dhaka, 1205, Bangladesh.
					Phone: 10620, (+88) 09666787878
				</p>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  );
}

export default Footer;
