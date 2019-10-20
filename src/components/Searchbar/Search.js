import React, {Component} from 'react';
import { InfoWindow} from 'google-maps-react';

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            filterType:""
        };
    }

    updateSearch (event) {
        this.setState({filterType:event.target.value});
    }

    render() {
        let filteredType = this.props.location.filter((location) => {
            return location.value.indexOf(this.state.filterType) !== -1;
        });
        return (
            <div>
                <input type="text" value={this.state.filterType} onChange={this.updateSearch.bind(this)}/>
            <ul>
                {filteredType.map(i => <InfoWindow {...i} key={i.type}/>)}
            </ul>
            </div>
        )
    }
}
