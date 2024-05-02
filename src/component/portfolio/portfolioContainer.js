import React from "react";
import PortfolioItem1 from "./portfolioItems/portfolioItem1";
import PortfolioItem2 from "./portfolioItems/portfolioItem2";
import PortfolioItem3 from "./portfolioItems/portfolioItem3";
import PortfolioItem4 from "./portfolioItems/portfolioItem4";
import PortfolioItem5 from "./portfolioItems/portfolioItem5";
import PortfolioItem6 from "./portfolioItems/portfolioItem6";

export default function PortfolioContainer() {
    

    return (
       <div className="container my-4">
        <div className="row no-gutters">
            <div className="col-12 col-md-4">
                    <PortfolioItem5 />
            </div>
            <div className="col-12 col-md-4">
                    <PortfolioItem6 />
            </div>
            <div className="col-12 col-md-4">
                    <PortfolioItem2 />
            </div>
            </div>
            <div className="row no-gutters">
                <div className="col-12 col-md-4">
                    <PortfolioItem3 />
                </div>
                <div className="col-12 col-md-4">
                    <PortfolioItem4 />
                </div>
                <div className="col-12 col-md-4">
                    <PortfolioItem1 />
                </div>
            </div>
       </div>
    );
}