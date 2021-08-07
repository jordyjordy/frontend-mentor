import React from "react";
import '../style/RegionSelect.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faTimes } from "@fortawesome/free-solid-svg-icons"

export default class RegionSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = { region: "", selected: false, dropdown: false }
        this.toggleSelection = this.toggleSelection.bind(this)
        this.renderCancel = this.renderCancel.bind(this)
        this.clearSelection = this.clearSelection.bind(this)
        this.renderDropdown = this.renderDropdown.bind(this)
        this.selectRegion = this.selectRegion.bind(this)
        this.dropdown = React.createRef()
    }
    render() {
        return (
            <div className="region-outter">{this.renderCancel()}
                <div className="region-select">
                    <div ref={this.dropdown} className="region-select-top" onClick={this.toggleSelection}>
                        <div>{this.state.region === "" ? "Filter by Region" : this.state.region}</div> <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                    {this.renderDropdown()}
                </div>
            </div>
        )
    }

    renderCancel() {
        if (this.state.selected) {
            return <button className="cancel-button" onClick={this.clearSelection} value="X" ><FontAwesomeIcon icon={faTimes} /></button>
        }
        return null
    }

    renderDropdown() {
        if (this.state.dropdown) {
            return <div className='dropdown'>
                <div onClick={this.selectRegion}>Africa</div>
                <div onClick={this.selectRegion}>America</div>
                <div onClick={this.selectRegion}>Asia</div>
                <div onClick={this.selectRegion}>Europe</div>
                <div onClick={this.selectRegion}>Oceania</div>
            </div>
        }
        return null
    }
    selectRegion(region) {
        this.setState({ selected: true, region: region.target.innerHTML, dropdown: false })
        this.props.regionChanged(region.target.innerHTML)
    }

    clearSelection() {
        this.setState({ selected: false, region: "" })
        this.props.regionChanged("")
    }
    toggleSelection(event) {
        this.setState({ dropdown: !this.state.dropdown })
    }

}