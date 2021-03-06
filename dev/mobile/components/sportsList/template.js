import React from 'react';
import {Link} from 'react-router';
import Loader from "../loader/";
import {t} from "../../../helpers/translator";
import Helpers from "../../../helpers/helperFunctions";

module.exports = function sportsListTemplate () {

    let Sports = [];
    // let key = "sportsList" + this.props.gameType + this.props.timeFilter;
    let data = this.props.data;
    let loading = !this.props.loaded;
    if (data && data.length) {
        Sports = data.map(
            (sport) =>
                <li key={sport.id}
                    ref={
                        (input) => {
                            this[sport.alias] = input;
                        }
                    }>
                    <Link to={ `/${this.props.gameType}/${sport.alias}` } activeClassName="active">
                            <span className={"sport-icon-m " + sport.alias}>
                                <i className="games-count-view-m">{sport.game}</i>
                            </span>
                        <p>{sport.name}</p>
                    </Link>
                </li>
        );
        return (
            <div className={"sports-navigation" + (loading ? " loading" : "") + (Helpers.isPC() ? " isPC" : "")}>
                {Helpers.isPC()
                    ? <button className="sports-navigation-scroll-buttons left-button" onMouseDown={() => {
                        this.handleMouseUp();
                        this.scroll(this.refs.scroller, -3, 17);
                    }}/>
                    : null
                }
                <div className="sport-nav-container-m" ref="scroller">
                    <ul>
                        <li key="favorites">
                            <Link to={ `/${this.props.gameType}/Favorites` } activeClassName="active">
                            <span className="sport-icon-m favorites">
                                <i className="games-count-view-m">{this.favoritesCount()}</i>
                            </span>
                                <p>{t("Favorites")}</p>
                            </Link>
                        </li>
                        {Sports}
                    </ul>
                </div>
                {Helpers.isPC()
                    ? <button className="sports-navigation-scroll-buttons right-button cms-jcon-lc-right" onMouseDown={() => {
                        this.handleMouseUp();
                        this.scroll(this.refs.scroller, 3, 17);
                    }}/>
                    : null
                }
            </div>
        );
    }
    return (
        <div className='sports'>
            <Loader/>
        </div>
    );
};
