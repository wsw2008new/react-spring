'use strict';

import React, {Component, PropTypes} from 'react';
import UnsliderContainer from './unsliderContainer';
import InvestorTitle from '../components/investorTitle';
import CompNewsContainer from './compNews';
import CountScrollContainer from './countScrollContainer';
import IncreateRateContainer from './increaseRateContainer';
import NewsConatiner from './listNewsContainer';

require('../../styles/customerIndex.scss');

export default class CustomerIndex extends Component {
	render() {
		return (
			<div id="content">
				<UnsliderContainer />
				<CompNewsContainer />
				<div id="invest-center">
				  <p id="inv-title">投资中心</p>
				  <InvestorTitle />
				</div>
				<div id="news">
				  <p id="zixun">资讯</p>
				  <NewsConatiner />
				</div>
			</div>
		)
	}
}