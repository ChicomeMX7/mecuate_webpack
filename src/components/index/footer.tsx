import React from "react";
import { ReactDOM } from "react-dom";
import { Button } from "../shared/Button";

const Footer = (props: Mecuate.Props) => {
	return (
		<div className="footer">
            <Button class={'dognut'} content={'Donas'} />
			<div>
				<a href="#">Credits</a>
			</div>
			<div>
				<a href="#">Contact</a>
			</div>
			<div>
				<a href="#">SiteMap</a>
			</div>
			<span className="date mini_date">{new Date().toDateString()}</span>
		</div>
	);
};

export { Footer };
