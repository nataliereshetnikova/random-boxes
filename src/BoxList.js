import React, { Component} from 'react';
import Box from './Box';
import './BoxList.css';
import PropTypes from 'prop-types';

class BoxList extends Component{
    static defaultProps = {
        boxes:['red','white','green']
    }
    static propTypes = {
        boxes: PropTypes.arrayOf(PropTypes.string)
    }
    render(){
        const boxes = this.props.boxes.map((color, index) => (
            <Box
              key={index}
              color={color}
            />
          ));
        return(
            <div className="BoxList">
                {boxes}
            </div>
        );
    }
}
   export default BoxList;