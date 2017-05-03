import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {fbLink, fbUnlink} from'./profileAction'

const LinkForm =({fbloggedin, fblink, fbunlink})=>{
	let link_name
	let link_pass
	const _fblink=()=>{
		fblink(link_name.value, link_pass.value)
		link_name.value=''
		link_pass.value=''
	}
	const _fbunlink=()=>{
		fbunlink()
	}
	return(
		<div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 height_90 border_left">
			<h3 className="mytitle">Link Facebook account with a regular account</h3>
			<h5>You can link an account only if you loggedin with fb account</h5>
			<br/>
			<input type="text"  id="link_name" placeholder="Regular account name to link"  className="form-control margin_5" ref={(node) => link_name = node }/>
			<input type="password" id="password" placeholder="Password"  className="form-control margin_5" ref={(node) => link_pass = node }/>
			<br/>
			<button id="fblink" className="btn btn-default float_right" onClick={ _fblink }>Login and Link</button>
			<button id="fbunlink" className="btn btn-default float_right" onClick={ _fbunlink }>Unlink</button>
		</div>
	)
}
export default connect(
	(state) => {
		return {
			fbloggedin: state.fbloggedin
		}
	},
	(dispatch) => {
		return{
			fblink: (name, pass) =>  dispatch(fbLink(name, pass)),
			fbunlink: () => dispatch(fbUnlink())
		}
})(LinkForm)